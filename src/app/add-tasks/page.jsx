"use client"
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full flex flex-col md:flex-row  p-4 mx-auto my-5 justify-center ali">
      <Image className="md:w-1/4" src="/add.svg" alt="menu" width="500" height="500" />
      <form className="bg-white rounded-lg shadow-md p-6 md:w-1/3 mt-2">
        <h2 className="text-2xl font-semibold mb-4">Add Task</h2>
    
        <div className="mb-4">
          <label htmlFor="task_title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
          <input type="text" id="task_title" className="w-full border rounded-md p-2" placeholder="Write your Task Title" />
        </div>
    
        <div className="mb-4">
          <label htmlFor="task_content" className="block text-gray-700 text-sm font-bold mb-2">Content</label>
          <textarea id="task_content" className="w-full border rounded-md p-2" placeholder="Enter Description for Task" rows={5} />
        </div>

        <div className="mb-4">
          <label htmlFor="task_status" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
          <select id="task_status" className="w-full border rounded-md p-2 bg-white">
            <option value="none" selected disabled>---Select Status---</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
    
        <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md w-full mt-2">Clear</button>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full mt-2">Add Task</button>
        <p className="mt-4 text-sm text-gray-400 text-center">
        Don't have an account? <a href="/signup" className="text-blue-500">Register</a>
      </p>
      </form>
  </div>
  )
}

export default page
