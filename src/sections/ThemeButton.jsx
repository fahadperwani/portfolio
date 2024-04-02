import React, { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    const html = document.querySelector("html");
    !isDarkMode ? html.classList.add("dark") : html.classList.remove("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={handleClick}
      className="relative overflow-hidden w-10 h-10"
    >
      <MdDarkMode
        className={`absolute top-0 dark:left-0 right-10 transition-all`}
        size={35}
      />
      <MdLightMode
        className={`absolute top-0 dark:-left-10 left-0 transition-all`}
        size={35}
      />
    </button>
  );
};

export default ThemeButton;
