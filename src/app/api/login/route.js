import { User } from "@/models/user";
import { NextResponse } from 'next/server'
import bcrypt, { hash, hashSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/utils/db";

connectDB();

export async function POST(request){
  const { email,password } = await request.json();
  try {
    const user = await User.findOne({email:email});

    // if user is not found in the database
    if(user==null){
      throw new Error("User Not Found");
    }

    // now check password is correct or not
    const matched = bcrypt.compareSync(password,user.password);
    if(!matched){
      throw new Error("Wrong Password");
    }

    // now if the user is validated for the first time,then now create jsonwebtoken
    const token = jwt.sign({
      _id:user._id,
      name:user.name
    },process.env.JWT_KEY);

    // now put token into the cookie
    const response = NextResponse.json({
      message:"Login Successful!",
      success:true
    });

    response.cookies.set("authToken",token,{expiresIn:"1d",httpOnly:true})

    console.log(user);
    console.log(token);

    return response; 

  } catch (error) {

    console.log("error in login route post");
    console.log(error);

    return NextResponse.json({
      message:error.message,
      success:false,
    },{status:500})    
  }
}