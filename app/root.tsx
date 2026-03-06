import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router"

import "./index.css"

export function Layout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link href={`${import.meta.env.BASE_URL}favicon.svg`} rel="icon" type="image/svg+xml" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root(): React.JSX.Element {
  return <Outlet />
}
