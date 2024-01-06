import { Task } from "@/models/task";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";

async function connectWithDB(){
  await connectDB();
}
connectWithDB();

export async function GET(request,{params}){
  const {userId} = params;
  try {
    const allTasks = await Task.find({
      userId:userId,
    });
    console.log("successfully retrieved all tasks for the particular user");
    return NextResponse.json(allTasks); 
  } catch (error) {
    console.log("error in fetching all tasks for a particular user");
    console.log(error);
    return NextResponse.json({
      message:"failed to retrieve tasks for the user",
      success:false
    })
  }
}