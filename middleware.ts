import { NextResponse } from 'next/server'
import { UserType } from 'lib/types'
import type { NextRequest } from 'next/server'
import { authRoutes, protectedRoutes } from 'router/routes'

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value

  if (protectedRoutes.includes(request.nextUrl.pathname) && !currentUser) {
    request.cookies.delete('currentUser')
    const response = NextResponse.redirect(new URL('/sign-in', request.url))
    response.cookies.delete('currentUser')

    return response
  }

  if (authRoutes.includes(request.nextUrl.pathname) && currentUser) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }
}
