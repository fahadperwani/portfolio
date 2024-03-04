import React from "react";
import "./Home.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";

function Home() {
  return (
    <section
      id="home"
      className=" flex justify-center items-center h-[90vh] gap-8"
    >
      <main className="justify-center items-center gap-8">
        <h1 className="text-3xl font-bold my-2">Full-Stack Developer👋</h1>
        <p className="font-bold text-gray-600">
          Hello! I'm Fahad Memon, your friendly neighborhood full
          <p className="mb-2"> stack developer</p>
        </p>
        <button>
          <a href="github.com">
            <FaGithubSquare
              size={30}
              className="text-gray-600 hover:text-black"
            />
          </a>
        </button>
        <button>
          <a href="linkedin.com">
            <FaLinkedin size={30} className="text-gray-600 hover:text-black" />
          </a>
        </button>
      </main>
      <div>
        <img
          className="shape bg-yellow-500 relative"
          src={require("../fahad.png")}
          alt=""
        />
      </div>
    </section>
  );
}

export default Home;
