import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

const privatePaths = ['/me'];
const authPaths = ['/login', '/register'];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const sessionToken = request.cookies.get('sessionToken')?.value;

    // Chưa đăng nhập thì không cho vào private patch
    if (privatePaths.map((path) => pathname.startsWith(path)) && !sessionToken) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // Login rồi thì không cho vào các trang register / login nữa
    if (authPaths.map((path) => pathname.startsWith(path)) && sessionToken) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [...privatePaths, ...authPaths],
}