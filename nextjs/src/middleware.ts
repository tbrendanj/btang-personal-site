// ./frontend/src/middleware.ts

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

/**
 * Currently just a basic middleware that doesn't really do anything other than redirect /home to /. Placeholder.
 * I just put this here because I expect middleware to be a standard inclusion in NextJS projects.
 */
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname === '/home') {
    return NextResponse.redirect(new URL(`/`, request.url));
  }
  return NextResponse.next();
}
