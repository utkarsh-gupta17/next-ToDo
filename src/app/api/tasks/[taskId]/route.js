import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// get a particular task
export async function GET(request,{params}){
  const id = params.taskId;
  try {
    let tasks = await Task.findById(id);
    console.log("all tasks retrieved");
    return NextResponse.json(tasks);
  } catch (error) {
    console.log("error in task GET");
    console.log(error);
    return NextResponse.json({
      message:"failed to get all tasks",
      success:false,
    })
  }
}
// delete a particular task
export async function DELETE(request,{params}){

  const id = params.taskId;
  try {

    await Task.findByIdAndDelete(id);
    console.log("task deleted successfully");
    return NextResponse.json({
      message:"task deleted successfully",
      success:true,
    })
  } catch (error) {
    console.log("error in DELETE route of {taskId}");
    console.log(error);
    return NextResponse.json({
      message:"deletion of a single task failed",
      success:false,
    })
  }
}
// update a particular tasks
export async function PUT(request,{params}){
  const id = params.taskId;
  const {title,content,userId} = await request.json();
  try {
    let taskp = await Task.findById(id);
    taskp.title=title;
    taskp.content=content;
    taskp.userId=userId;
    const updatedTask = await taskp.save();
    console.log("Updated Single Task successfully");
    return NextResponse.json(updatedTask);
  } catch (error) {
    console.log("error in PUT route of {taskId}");
    console.log(error);
    return NextResponse.json({
      message:"updation of task failed",
      success:false,
    });
  }
}