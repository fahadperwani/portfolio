import React, { useEffect, useState } from "react";
import { client } from "../sanity";

export interface Skill {
  image?: string;
  title: String;
}

function Skills() {
  const [skills, setSkills] = useState<Skill[] | []>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: Skill[] = await client.fetch(
          `*[_type=="skill"] | order(_createdAt asc) {
            title, image
          }`
        );
        setSkills(result);
      } catch (error) {
        console.error("Failed to fetch hero data", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section id="skills" className="pt-8 dark:bg-black dark:text-white">
      <h1 className="text-2xl font-bold text-center">Tech Stack</h1>
      <main className="flex py-20 px-4 sm:px-20 gap-2 sm:gap-16 flex-nowrap sm:justify-center sm:flex-wrap overflow-auto">
        {skills?.map((skill, i) => (
          <div
            className={`skill min-w-32 ${
              i % 2 === 0
                ? "bg-black shadow-lg shadow-gray-500"
                : "bg-gray-300 shadow-lg shadow-gray-300"
            } rounded-md p-4 hover:scale-105 cursor-pointer`}
          >
            <img src={skill.image} alt="" />
            <p
              className={`${
                i % 2 === 0 ? "text-white" : "text-black"
              } font-bold text-center mt-2`}
            >
              {skill.title}
            </p>
          </div>
        ))}
      </main>
    </section>
  );
}

export default Skills;
