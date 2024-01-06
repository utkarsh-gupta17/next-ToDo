"use client";
import { addTask } from "@/services/taskServices";
import Image from "next/image";
import { useState } from "react";
import { toast } from 'react-toastify';

const AddTask = () => {


  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "Pending",
    userId: "6595287627ae59272a2ccec4",
  });

  const resetForm = ()=>{
    setTask({
      title: "",
      content: "",
      status: "Pending",
      userId: "6595287627ae59272a2ccec4",
    });
  }


  const handleAddTask = async(event)=>{
    event.preventDefault();
    console.log(task);
    try {
      
      const res = await addTask(task);
      console.log(res);
      toast.success("Your Task was created successfully",{
        position:"top-center"
      });
      setTask({
        title: "",
        content: "",
        status: "Pending",
        userId: "6595287627ae59272a2ccec4",
      });
    } catch (error) {
      console.log("error in sending task via addTask in axios");
      console.log(error);
      toast.error("Task Creation Failed",{
        position:"top-center"
      })
    }

  }

  return (
    <div className="w-full flex flex-col md:flex-row  p-4 mx-auto my-5 justify-center">
      <Image
        className="md:w-1/4"
        src="/add.svg"
        alt="menu"
        width="500"
        height="500"
      />
      <form className="bg-white rounded-lg shadow-md p-6 md:w-96 mt-2" onSubmit={handleAddTask}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Add Task</h2>

        <div className="mb-4">
          <label
            htmlFor="task_title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="task_title"
            className="w-full border rounded-md p-2"
            placeholder="Write your Task Title"
            name="task_title"
            onChange={(event)=>{
              setTask({
                ...task,
                title:event.target.value
              });
            }}
            value={task.title}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="task_content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Content
          </label>
          <textarea
            id="task_content"
            className="w-full border rounded-md p-2"
            placeholder="Enter Description for Task"
            rows={5}
            name="task_content"
            onChange={(event)=>{
              setTask({
                ...task,
                content:event.target.value
              });
            }}
            value={task.content}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="task_status"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Status
          </label>
          <select
            id="task_status"
            className="w-full border rounded-md p-2 bg-white"
            name="task_status"
            onChange={(event)=>{
              setTask({
                ...task,
                status:event.target.value
              });
            }}
            value={task.status}
          >
            <option value="DEFAULT" disabled>
              ---Select Status---
            </option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button
          type="reset"
          onClick={resetForm}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md w-full mt-2"
        >
          Clear
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full mt-2"
        >
          Add Task
        </button>
        {/* {JSON.stringify(task)} */}
      </form>
    </div>
  );
};

export default AddTask;
