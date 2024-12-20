export { auth as middleware } from './lib/auth'

export const config = {
  matcher: [
    /*
        Match all request paths except for the onces starting with:
        -api (api routes)
        -_next/static (static files)
        -_next/image (image optimization files)
        -favicon.ico (favicon file)
    */

    `/((?!api|_next/static|_next/image|favicon.ico).*)`,
  ],
}
