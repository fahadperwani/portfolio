import React from "react";

function Nav() {
  return (
    <nav className="shadow-4xl shadow-white flex items-center justify-between py-4 px-14">
      <p className="font-bold text-lg cursor-pointer">fahad.dev</p>
      <ul className="flex gap-8">
        <li className="hover:scale-105 font-bold text-gray-500 hover:text-black">
          <a href="#home">Home</a>
        </li>
        <li className="hover:scale-105 font-bold text-gray-500 hover:text-black">
          <a href="#about">About</a>
        </li>
        <li className="hover:scale-105 font-bold text-gray-500 hover:text-black">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:scale-105 font-bold text-gray-500 hover:text-black">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
