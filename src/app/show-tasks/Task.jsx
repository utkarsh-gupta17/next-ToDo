import UserContext from '@/context/UserContext'
import React, { useContext } from 'react'

const Task = ({task}) => {

  const {user} = useContext(UserContext);

  return (
    <div className='bg-blue-500 shadow-lg text-white rounded mt-3'>
      <div className='p-5'>
        <h1 className='text-2xl font-medium'>{task.title}</h1>
        <p className='font-normal'>{task.content}</p>
        <p className='text-right'>Author : <span className='font-bold'>{user.name}</span></p>
      </div>
      
    </div>
  )
}

export default Task
