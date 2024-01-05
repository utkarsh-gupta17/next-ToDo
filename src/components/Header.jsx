"use client";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  function toggleMenu() {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
  }

  return (
    <nav className="flex flex-wrap items-center justify-between p-5 bg-blue-200 shadow-md">
      <div>
        <Link href="/" className="flex">
          <Image src="/todo.svg" alt="menu" width="40" height="25" />
          <span className="text-3xl">Todo</span>
        </Link>
      </div>
      <div className="flex md:hidden">
        <button onClick={toggleMenu}>
          <img
            className="toggle block"
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="40"
            height="40"
          />
          <img
            className="toggle hidden"
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="40"
            height="40"
          />
        </button>
      </div>
      <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none font-medium">
        <Link
          href="/"
          onClick={toggleMenu}
          className="block md:inline-block px-3 py-3 border-b-2 border-blue-900 md:border-none text-gray-900 rounded hover:text-blue-500"
        >
          Home
        </Link>
        <Link
          href="/add-tasks"
          onClick={toggleMenu}
          className="block md:inline-block text-gray-900 rounded hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          Add Tasks
        </Link>
        <Link
          href="/show-tasks"
          onClick={toggleMenu}
          className="block md:inline-block text-gray-900 rounded hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          Show Tasks
        </Link>
      </div>
      <div className="toggle hidden md:flex w-full md:w-auto md:gap-4 px-4 py-2 text-right gap-4 font-semibold">
        <Link
          href="/login"
          onClick={toggleMenu}
          className="toggle hidden md:flex w-full md:w-auto px-4 py-2 ml-30 text-right hover:bg-blue-500 text-gray-900 rounded md:rounded"
        >
          Login
        </Link>
        <Link
          href="/signup"
          onClick={toggleMenu}
          className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white rounded"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Header;
