import React from 'react'

const Form = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 mx-auto my-5">
    <form className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
  
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
        <input type="email" id="email" className="w-full border rounded-md p-2" placeholder="youremail@example.com" />
      </div>
  
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input type="password" id="password" className="w-full border rounded-md p-2" placeholder="Password" />
      </div>
  
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full">Login</button>
      <p className="mt-4 text-sm text-gray-400 text-center">
      Don't have an account? <a href="/signup" className="text-blue-500">Register</a>
    </p>
    </form>
  </div>
  )
}

export default Form
