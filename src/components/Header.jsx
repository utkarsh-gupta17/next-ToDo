"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import UserContext from "@/context/UserContext";
import { Logout } from "@/services/userServices";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


const Header = () => {

  const router = useRouter();


  const context = useContext(UserContext);


  function toggleMenu() {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
  };

  async function toggle_logout(){
    toggleMenu();
    
    try {
      const result = await Logout();
      console.log(result);
      context.setUser(undefined);
      toast.success("Logout Successful");
      router.push("/login");
    } catch (error) {
      console.log(error);
      toast.error("Logout Error");
    }
    

  }


  return (
    <nav className="flex flex-wrap items-center justify-between p-5 bg-black shadow-md">
      <div>
        <Link href="/" className="flex">
          <Image src="/todo.svg" alt="menu" width="40" height="25" />
          <span className="text-3xl text-white">Todo</span>
        </Link>
      </div>
      <div className="flex md:hidden">
        <button onClick={toggleMenu}>
          <img
            className="toggle block bg-white rounded"
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="40"
            height="40"
          />
          <img
            className="toggle hidden bg-white rounded"
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="40"
            height="40"
          />
        </button>
      </div>
      <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-gray-200 md:border-none font-medium">
        {context.user && (
          <>
            <Link
              href="/"
              onClick={toggleMenu}
              className="block md:inline-block px-3 py-3 border-b-2 border-gray-200 md:border-none text-white rounded hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              href="/add-tasks"
              onClick={toggleMenu}
              className="block md:inline-block text-white rounded hover:text-blue-500 px-3 py-3 border-b-2 border-gray-200 md:border-none"
            >
              Add Tasks
            </Link>
            <Link
              href="/show-tasks"
              onClick={toggleMenu}
              className="block md:inline-block text-white rounded hover:text-blue-500 px-3 py-3 border-b-2 border-gray-200 md:border-none"
            >
              Show Tasks
            </Link>
          </>
        )}
      </div>
      <div className="toggle hidden md:flex w-full md:w-auto md:gap-4 px-4 py-2 text-right gap-4 font-semibold">
        {context.user && (
          <>
            <Link
              href="/profile/user"
              onClick={toggleMenu}
              className="font-extrabold toggle hidden md:flex w-full md:w-auto px-4 py-2 ml-30 text-right hover:bg-gray-200 hover:text-black text-white rounded md:rounded"
            >
              {context.user.name}
            </Link>
            <button
              href="#"
              onClick={toggle_logout}
              className="toggle hidden md:flex md:w-full px-4 py-2 text-right bg-white hover:bg-gray-800 hover:text-white text-black rounded"
            >
              Logout
            </button>
          </>
        )}
        {!context.user && (
          <>
            <Link
              href="/login"
              onClick={toggleMenu}
              className="toggle hidden md:flex w-full md:w-auto px-4 py-2 ml-30 text-right hover:bg-gray-200 hover:text-black text-white rounded md:rounded"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={toggleMenu}
              className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-white hover:text-white hover:bg-gray-800 text-black rounded"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
