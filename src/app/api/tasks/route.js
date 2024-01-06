import { Task } from "@/models/task";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

async function connectWithDB(){
  await connectDB();
}
connectWithDB();

//get all tasks
export async function GET(request){
  let tasks = [];
  try {
    tasks = await Task.find();
    console.log("Retrieved all Tasks");
    return NextResponse.json(tasks);
  } catch (error) {
    console.log("error in all tasks");
    console.log(error);
    return NextResponse.json({
      message:"failed to fetch all tasks",
      success:false,
    })
  }
}
// create a new tasks
export async function POST(request){
  // fetch data from request ki body
  const { title,content,userId } = await request.json();

  // fetching logged in user data taaki uski id use kar sake for making a new post corresponding to him
  const authToken = request.cookies.get("authToken")?.value;
  const data = jwt.verify(authToken,process.env.JWT_KEY);

  console.log(title,content,userId);
  try {
    // create a new object to be saved in the DB
    const task = new Task({
      title:title,content:content,userId:data._id
    });
    console.log(task);
    const createdTask = await task.save();
    console.log("created a new task");
    return NextResponse.json(createdTask,{status:201,});
    
  } catch (error) {
    console.log("task POST route failed");
    console.log(error);
    return NextResponse.json({
      message:"failed to create a new task",
      success:false,
    })
  }
}