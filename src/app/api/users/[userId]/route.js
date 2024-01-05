import { User } from "@/models/user";
import { connectDB } from "@/utils/db";
import { NextResponse } from 'next/server'

connectDB();

export async function DELETE(request,{params}) {

  const id = params.userId;
  try {
    await User.findByIdAndDelete({
      _id:id
    });
    console.log("deleted the user successfully");
    return NextResponse.json({
      message:"deleted the user successfully",
      success:true
    });
  } catch (error) {
    console.log("error in DELETE route of {userid}");
    console.log(error);
    return NextResponse.json({
      message:"deletion of a single user failed",
      success:false
    });
  }

}

export async function GET(req,{params}){
  const id = params.userId;
  try {
    const userdata = await User.findById(id);
    return NextResponse.json(userdata);
  } catch (error) {
    console.log("Error in Single User GET data");
    return NextResponse.json({
      message:"Failed to get single user data",
      success:false
    })
  }
}

export async function PUT(request,{params}){
  const id = params.userId;
  const {name,email,password,about,profileURL} = await request.json();

  try {
    const userdata = await User.findById(id);
    userdata.name=name;
    userdata.email=email;
    userdata.password=password;
    userdata.about=about;
    userdata.profileURL=profileURL;
    const UpdatedUser = await userdata.save();
    console.log("Updated user data successfully");
    return NextResponse.json(UpdatedUser);
  } catch (error) {
    console.log("Error in Single User PUT data");
    return NextResponse.json({
      message:"Failed to update single user data",
      success:false
    })    
  }
}
