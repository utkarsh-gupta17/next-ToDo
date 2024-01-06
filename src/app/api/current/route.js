import { NextResponse } from 'next/server'
import jwt from "jsonwebtoken";
import { User } from '@/models/user';
import { connectDB } from '@/utils/db';

export async function GET(request){
  const authToken = request.cookies.get("authToken")?.value;
  if(!authToken){
    return NextResponse.json({
      message:"User is not Logged In",
      success:false,
    })
  }
  const data = jwt.verify(authToken,process.env.JWT_KEY);
  await connectDB();
  const user = await User.findById(data._id).select("-password");
  return NextResponse.json(user)
}