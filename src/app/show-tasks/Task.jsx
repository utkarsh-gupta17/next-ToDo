"use client"
import UserContext from '@/context/UserContext'
import React, { useContext } from 'react'
import Image from "next/image";


const Task = ({ task,deleteTaskParent }) => {


  function deletekardo(taskId){
    deleteTaskParent(taskId);
  }

  const { user } = useContext(UserContext);

  return (
    <div className={`shadow-lg w-full md:w-auto relative text-white rounded-md mt-3 ${
      task.status === "Pending" ? "bg-blue-500" : "bg-green-600"}
      `}>
      <div className='p-5'>
        <div className="flex justify-between">
          <h1 className='text-2xl font-medium'>{task.title}</h1>
          <span onClick={()=>{deletekardo(task._id)}} className='absolute -top-2 -right-2 shadow-lg bg-gray-200 hover:bg-red-500 cursor-pointer rounded-full justify-center items-center flex w-7 h-7'>
          <Image src="/closeTask.svg" alt="closeTask" width="25" height="25"/>
          </span>
        </div>
        <p className='font-normal'>{task.content}</p>
        <div className='flex justify-between mt-3'>
          <p className='text-left'>Status : <span className='font-bold'>{task.status}</span></p>
          <p className='text-right'>Author : <span className='font-bold'>{user?.name}</span></p>
        </div>
      </div>
      
    </div>
  )
}

export default Task
