import React, { useEffect, useState } from "react";
import Project from "./Project";
import { client } from "../sanity";
import { Skill } from "./Skills";

export interface ProjectProps {
  title: string;
  summary: string;
  image: string; // Assuming image is a URL for simplicity
  linkToGitHub?: string; // Optional string for GitHub URL
  linkToBuild?: string; // Optional string for LinkedIn URL
  technologies: Skill[]; // Array of technology strings
}

function Projects() {
  const [projects, setProjects] = useState<ProjectProps[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: ProjectProps[] = await client.fetch(
          `*[_type=="project"] 
          | order(_createdAt desc) {
          title, summary, 
            "technologies": 
              technologies[]->{title },
              linkToBuild,
                linkToGitHub,
                "image": image.asset->url
        }`
        );
        setProjects(result);
      } catch (error) {
        console.error("Failed to fetch projects data", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section id="projects" className="pt-8 dark:bg-black">
      <h1 className="text-4xl font-bold text-center m-8 dark:text-white">
        Projects
      </h1>
      <div className="py-16 px-10 flex flex-wrap lg:flex-nowrap justify-between gap-2">
        {projects?.map((project) => (
          <Project
            title={project.title}
            summary={project.summary}
            image={project.image}
            linkToBuild={project.linkToBuild}
            linkToGitHub={project.linkToGitHub}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
