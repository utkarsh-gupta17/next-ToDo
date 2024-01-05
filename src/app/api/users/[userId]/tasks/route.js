import { Task } from "@/models/task";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request,{params}){
  const id = params.userId;
  try {
    const allTasks = await Task.find({
      userId:id
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