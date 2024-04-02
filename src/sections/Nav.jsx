import React from "react";
import ThemeButton from "./ThemeButton";

function Nav() {
  return (
    <nav className="shadow-lg shadow-gray-300 dark:shadow-gray-50 flex items-center sm:justify-between py-4 md:px-14 dark:bg-black dark:text-gray-300">
      <div className="flex items-center gap-2">
        <ThemeButton />
        <p className="font-bold text-xl md:text-2xl cursor-pointer hidden sm:block">
          fahad.dev
        </p>
      </div>
      <ul className="flex gap-8 text-lg text-gray-500 dark:text-gray-300">
        <li className="hover:scale-105 font-bold  hover:text-black dark:hover:text-white">
          <a href="#home">Home</a>
        </li>
        <li className="hover:scale-105 font-bold dark:hover:text-white hover:text-black">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:scale-105 font-bold hover:text-black dark:hover:text-white">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:scale-105 font-bold  hover:text-black dark:hover:text-white">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
