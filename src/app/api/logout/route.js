import { NextResponse } from 'next/server'


export async function POST(request){
  const response = NextResponse.json({
    message:"Logged Out!",
    success:true
  });
  response.cookies.set("authToken","",{
    httpOnly: true,
    maxAge: 0, // 0 second hours in seconds
  });
  return response;
}