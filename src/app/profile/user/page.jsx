"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import UserContext from "@/context/UserContext";
import { showMyTask } from "@/services/taskServices";

const UserPage = () => {
  const context = useContext(UserContext);
  const [tasks, setTasks] = useState([]);

  async function loadTasks(userId) {
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
    if (context.user) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

  return (
    <>
      <section className="flex justify-center items-center mt-10">
        <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div className="mt-6 w-fit mx-auto">
            <Image
              src="/profilePic.svg"
              className="rounded-full w-28 "
              alt="profile picture"
              srcSet=""
              width="25"
              height="25"
            />
          </div>
          <div className="mt-8 ">
            <h2 className="text-white font-bold text-4xl tracking-wide">
              {context.user?.name}
            </h2>
          </div>
          <p className="text-emerald-400 font-semibold mt-2.5 text-2xl">Active</p>

          <div className="mt-3 text-white text-sm">
            <span className="text-gray-300 font-semibold text-xl">Tasks Created: </span>
            <span className="text-xl">{tasks.length}</span>
          </div>

        </section>
      </section>
    </>
  );
};

export default UserPage;
