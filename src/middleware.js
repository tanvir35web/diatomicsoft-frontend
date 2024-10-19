import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();
  const isAuthenticated = req.cookies.get('uidToken');
  const isLoginPage = url.pathname === '/login';

  // If the user is not authenticated and is not on the login page, redirect to the login page
  if (!isAuthenticated && !isLoginPage) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // If the user is authenticated and tries to access the login page, redirect them to the dashboard
  if (isAuthenticated && isLoginPage) {
    url.pathname = '/admin';
    return NextResponse.redirect(url);
  }

  // Continue with the request if no redirects are necessary
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'], // Apply middleware to /admin and any sub-routes
};

