"use client";
import { addUser } from "@/services/userServices";
import { useState } from "react";
import { toast } from 'react-toastify';

const SignupForm = () => {


  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg",
  });

  const resetForm = ()=>{
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL:
        "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg",
    });
  }

  const handleUserSignup = async(event)=>{
    event.preventDefault();
    console.log(data);
    if(data.name.trim===""||data.name==null){
      toast.warning("Name is Required",{position:'top-center'});
      return;
    }
    if(data.email.trim===""||data.email==null){
      toast.warning("Email is Required",{position:'top-center'});
      return;
    }
    if(data.password.trim===""||data.password==null){
      toast.warning("Password is Required",{position:'top-center'});
      return;
    }
    if(data.about.trim===""||data.about==null){
      toast.warning("About is Required",{position:'top-center'});
      return;
    }
    try {
      const res = await addUser(data);
      console.log(res);
      toast.success("New User Account Created successfully",{
        position:'top-center'
      });
      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL:
          "https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg",
      });
    } catch (error) {
      console.log("error in creating via Signup in axios");
      console.log(error);
      toast.error("New Signup Failed",{position:'top-center'});
    }
  }

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 my-5">
      <form onSubmit={handleUserSignup} className="bg-white rounded-lg shadow-md p-6 md:w-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">SignUp</h2>

        <div className="mb-4">
          <label
            htmlFor="user_name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            UserName
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="w-full border rounded-md p-2"
            placeholder="Your Username"
            onChange={(event)=>{
              setData({
                ...data,
                name:event.target.value
              });
            }}
            value={data.name}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="user_email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="w-full border rounded-md p-2"
            placeholder="youremail@example.com"
            onChange={(event)=>{
              setData({
                ...data,
                email:event.target.value
              });
            }}
            value={data.email}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="user_about"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Content
          </label>
          <textarea
            id="user_about"
            className="w-full border rounded-md p-2"
            placeholder="Enter Description for Task"
            rows={5}
            name="user_about"
            onChange={(event)=>{
              setData({
                ...data,
                about:event.target.value
              });
            }}
            value={data.about}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="user_password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="user_password"
            className="w-full border rounded-md p-2"
            placeholder="Password"
            name="user_password"
            onChange={(event)=>{
              setData({
                ...data,
                password:event.target.value
              });
            }}
            value={data.password}
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
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Login
          </a>
        </p>
        {/* {JSON.stringify(data)} */}
      </form>
    </div>
  );
};

export default SignupForm;
