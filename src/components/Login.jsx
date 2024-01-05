"use client"
import { useState } from "react";
import { toast } from 'react-toastify';
const LoginForm = () => {


  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const resetForm = () => {
    setData({
      email: "",
      password: "",
    });
  };

  const handleLoginForm = (event)=>{
    event.preventDefault();
    console.log(login);
    if(data.email.trim===""||data.email==null){
      toast.info("Email is Required",{position:'top-center'});
      return;
    }
    if(data.password.trim===""||data.password==null){
      toast.info("Password is Required",{position:'top-center'});
      return;
    }
  }

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 my-5">
      <form className="bg-white rounded-lg shadow-md p-6" onSubmit={handleLoginForm}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-md p-2"
            placeholder="youremail@example.com"
            onChange={(event)=>{
              setLogin({
                ...login,
                email:event.target.value
              });
            }}
            value={login.email}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border rounded-md p-2"
            placeholder="Password"
            onChange={(event)=>{
              setLogin({
                ...login,
                password:event.target.value
              });
            }}
            value={login.password}
          />
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
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full"
        >
          SignUp
        </button>
        <p className="mt-4 text-sm text-gray-400 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
