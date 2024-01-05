import { User } from "@/models/user";
import { NextResponse } from 'next/server'
import bcrypt, { hash, hashSync } from "bcryptjs";
import { connectDB } from "@/utils/db";

connectDB();

export async function POST(request) {
  // fetch user data from request ki body
  const { name, email, password, about, profileURL } = await request.json();
  // create user object with User model
  const user = new User({
    name, email, password, about, profileURL,
  });

  // now save the object to database
  try {
    user.password = bcrypt.hashSync(user.password,parseInt(process.env.BCRYPT_SALT));
    // process.env se aane wala data string hota hai so parseInt humne use kiya hai to change into int
    // hash ke saath await laga dena aage
    // hashSync ke saath await lagane ki jarurat nhi hai
    const createdUser = await user.save();
    const res = await NextResponse.json(createdUser, { status: 201 });
    return res;
  } catch (error) {
    console.log("POST route failed");
    console.log(error);
    return NextResponse.json({
      message:"failed to create user in POST",
      status:false,
    },{status:500})
  }
}

export async function GET(request){

  let userall =[];
  try {
    userall = await User.find();
    // userall = await User.find(),select("-password"); -> isse final o/p mein password ka field nhi send karega
  } catch (error) {
    console.log("error in GET route");
    console.log(error);
    return NextResponse.json({
      message:"failed to find users",
      success:false
    })
  }
  return NextResponse.json(userall);
}