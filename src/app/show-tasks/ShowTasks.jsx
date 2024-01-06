"use client";
import UserContext from '@/context/UserContext';
import { deleteTask, showMyTask } from '@/services/taskServices';
import React, { useContext, useEffect, useState } from 'react'
import Task from './Task';
import { toast } from "react-toastify";


const ShowTasks = () => {

  const [tasks, setTasks] = useState([]);

  const context = useContext(UserContext);

  async function loadTasks(userId){
    try {
      const tasks = await showMyTask(userId);
      setTasks([...tasks].reverse());
      console.log(tasks);
    } catch (error) {
      console.log(error);
      console.log("error in loading my tasks");
    }
  }

  useEffect(() => {
    if(context.user){
      loadTasks(context.user._id);
    }
  }, [context.user]);

  async function deleteTaskParent(taskId){
    try {
      const result = await deleteTask(taskId);
      console.log(result);
      // after deletion, ui par se hata do deleted task ko
      const newTask = tasks.filter(item=>item._id!=taskId);
      setTasks(newTask);
      toast.success("Task Deleted Successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Error in Deleting Task");
    }

  }
  

  return (
    <div className='grid grid-cols-12 mt-3'>
      <div className='col-span-6 col-start-4'>
        <h1 className="text-3xl text-center mb-2">My Tasks ( {tasks.length} )</h1>
        {
          tasks.map((t)=>(
            <Task task={t} key={t._id} deleteTaskParent={deleteTaskParent}/>
          ))
        }
      </div>
      
    </div>
  )
}

export default ShowTasks;
