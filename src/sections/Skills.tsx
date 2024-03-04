import React from "react";

const skills = [
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    title: "HTML",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    title: "CSS",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    title: "JS",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg",
    title: "Tailwind CSS",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    title: "Node JS",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",

    title: "Express JS",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    title: "React JS",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    title: "MongoDB",
  },
];

function Skills() {
  return (
    <section>
      <h1 className="text-2xl font-bold text-center">Tech Stack</h1>
      <main className="flex  p-10 gap-10 justify-center">
        {skills.map((skill, i) => (
          <div
            className={`skill w-32 ${
              i % 2 === 0
                ? "bg-black shadow-2xl shadow-black"
                : "bg-gray-300 shadow-gray-300"
            } rounded-md p-4 hover:scale-105 cursor-pointer`}
          >
            <img src={skill.img} alt="" />
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
