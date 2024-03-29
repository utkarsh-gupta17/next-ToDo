import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("Middleware Executed");
  // now read value of token
  const authToken = request.cookies.get("authToken")?.value;

  if (request.nextUrl.pathname === "/api/login" || request.nextUrl.pathname === "/api/users") {
    return;
  }

  const loggedInUserNotAcessPath = request.nextUrl.pathname === "/login" || request.nextUrl.pathname == "/signup";
  if (loggedInUserNotAcessPath) {
    // accessing not secured route
    if (authToken) {
      return NextResponse.redirect(new URL('/profile/user', request.url));
    }
  }
  else {
    // accessing secured route
    if (!authToken) {
      
      if (request.nextUrl.pathname.startsWith("/api")) {
        return NextResponse.json({
          message: "Access Denied",
          success: false
        }, { status: 401 })
      }
      return NextResponse.redirect(new URL('/login', request.url));
    }
    else {
      //verify
    }
  }
  // console.log(authToken);
  // return NextResponse.redirect(new URL('/home', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/signup", "/show-tasks", "/add-tasks", "/profile/:path*", "/api/:path*"]
}