// Bunny.net Edge Scripting middleware
// Runs on Bunny's Deno-based edge runtime, NOT via local tsx.
// Deploy via: pnpm deploy or scripts/deployBunny.ts
// Env vars configured in Bunny dashboard under Env Configuration.

import * as BunnySdk from "@bunny.net/edgescript-sdk"

// --- Helpers ---

/**
 * Reconstructs the public-facing URL from an incoming edge request.
 *
 * Bunny forwards requests with internal hostnames, so the actual CDN host and
 * protocol are read from the `cdn-host` and `x-forwarded-proto` headers when
 * present.
 */
function buildClientUrl(request: Request): URL {
  const internalUrl = new URL(request.url)
  const cdnHost = request.headers.get("cdn-host") ?? internalUrl.hostname
  const cdnProto =
    request.headers.get("x-forwarded-proto") ?? internalUrl.protocol.replace(":", "")
  return new URL(`${cdnProto}://${cdnHost}${internalUrl.pathname}${internalUrl.search}`)
}

// --- Proxy handler ---

/**
 * Proxies requests under `/ext/shields/` to `img.shields.io` with a 1 h cache.
 *
 * @param url - The reconstructed public-facing request URL.
 * @returns A cached `Response` with the upstream badge, or `undefined` if the
 *   path does not start with `/ext/shields/`.
 */
async function handleShieldsProxy(url: URL): Promise<Response | undefined> {
  const SHIELDS_PREFIX = "/ext/shields/"

  if (!url.pathname.startsWith(SHIELDS_PREFIX)) return undefined

  const rest = url.pathname.slice(SHIELDS_PREFIX.length)
  if (!rest || rest.includes("..") || !rest.startsWith("github/")) {
    return new Response("Forbidden", { status: 403 })
  }

  const upstreamUrl = new URL(`https://img.shields.io/${rest}`)
  upstreamUrl.search = url.search

  try {
    const upstream = await fetch(upstreamUrl.toString(), {
      signal: AbortSignal.timeout(5000),
    })
    const contentType = upstream.headers.get("Content-Type") ?? "image/svg+xml"
    const isOk = upstream.status >= 200 && upstream.status < 300
    const cacheControl = isOk ? "public, max-age=3600" : "no-cache, max-age=60"

    return new Response(upstream.body, {
      headers: {
        "Cache-Control": cacheControl,
        "CDN-Cache-Control": cacheControl,
        "Content-Type": contentType,
      },
      status: upstream.status,
    })
  } catch {
    return new Response("Bad Gateway", {
      status: 502,
      headers: {
        "Cache-Control": "no-store",
        "CDN-Cache-Control": "no-store",
        "Content-Type": "text/plain",
      },
    })
  }
}

// --- Middleware ---

BunnySdk.net.http.servePullZone().onOriginRequest(async (context) => {
  const url = buildClientUrl(context.request)

  return (await handleShieldsProxy(url)) ?? context.request
})
