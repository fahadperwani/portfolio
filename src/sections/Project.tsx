import React from "react";
import { FaGithub } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import { ProjectProps } from "./Projects";

function Project({
  title,
  summary,
  image,
  linkToGitHub,
  linkToBuild,
  technologies,
}: ProjectProps) {
  console.log(linkToBuild);
  return (
    <div className="group h-[400px] lg:w-[300px] w-full rounded-lg text-gray-300 relative overflow-hidden p-3.5 lg:hover:w-[90%] transition-all duration-200 z-10">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-no-repeat before:absolute before:bg-black before:bg-opacity-50 before:h-full before:w-full group-hover:before:bg-opacity-80"
      ></div>
      <h2 className="text-2xl mb-2">{title}</h2>
      <p className="lg:hidden lg:group-hover:block">{summary}</p>
      <p className="font-bold lg:hidden lg:group-hover:block">Technologies</p>
      <ul className="mt-2 lg:hidden lg:group-hover:block">
        {technologies.map((technology) => (
          <li className="list-disc ml-8">{technology.title}</li>
        ))}
      </ul>
      <div className="absolute right-3 bottom-3  ">
        <a
          href={linkToGitHub}
          target="_blank"
          className="mr-2 z-10 cursor-pointer"
        >
          <FaGithub size={25} className="inline-block" />
        </a>
        <a href={linkToBuild} target="_blank" className="z-10 cursor-pointer">
          <HiExternalLink size={25} className="inline-block" />
        </a>
      </div>
    </div>
  );
}

export default Project;
