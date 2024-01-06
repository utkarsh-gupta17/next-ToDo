"use client";
import UserContext from '@/context/UserContext';
import { showMyTask } from '@/services/taskServices';
import React, { useContext, useEffect, useState } from 'react'
import Task from './Task';

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
  

  return (
    <div className='grid grid-cols-12 mt-3'>
      <div className='col-span-6 col-start-4'>
        <h1 className="text-3xl text-center mb-2">My Tasks ( {tasks.length} )</h1>
        {
          tasks.map((t)=>(
            <Task task={t} key={t._id}/>
          ))
        }
      </div>
      
    </div>
  )
}

export default ShowTasks;
