import { isbot } from "isbot"
import { renderToReadableStream } from "react-dom/server"
import { type EntryContext, ServerRouter } from "react-router"

const HTTP_INTERNAL_SERVER_ERROR = 500

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext
): Promise<Response> {
  let statusCode = responseStatusCode
  const body = await renderToReadableStream(
    <ServerRouter context={routerContext} url={request.url} />,
    {
      onError(error: unknown) {
        console.error(error)
        statusCode = HTTP_INTERNAL_SERVER_ERROR
      },
    }
  )

  if (isbot(request.headers.get("user-agent") ?? "")) {
    await body.allReady
  }

  responseHeaders.set("Content-Type", "text/html")

  return new Response(body, {
    headers: responseHeaders,
    status: statusCode,
  })
}
