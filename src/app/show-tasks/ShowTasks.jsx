"use client";
import UserContext from '@/context/UserContext';
import { deleteTask, showMyTask } from '@/services/taskServices';
import React, { useContext, useEffect, useState } from 'react'
import Task from './Task';
import { toast } from "react-toastify";
import Swal from 'sweetalert2'


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

    Swal.fire({
      title: "Do you want to delete this Task?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Task Deleted!", "", "success");
        async function callkaro(){
          try {
            const result = await deleteTask(taskId);
            console.log(result);
            // after deletion, ui par se hata do deleted task ko
            const newTask = tasks.filter(item=>item._id!=taskId);
            setTasks(newTask);
            // toast.success("Task Deleted Successfully!");
          } catch (error) {
            console.log(error);
            toast.error("Error in Deleting Task");
          }
        }
        callkaro();
      } else if (result.isDenied) {
        Swal.fire("Task Not Deleted", "", "info");
      }
    });
  }
  

  return (
    <div className='grid grid-cols-12 mt-3'>
      <div className='col-span-6 col-start-2 col-end-12 md:col-start-4 md:col-end-10'>
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
