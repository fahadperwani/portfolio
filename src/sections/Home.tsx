import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { client } from "../sanity";

interface SocialLink {
  title: string;
  url: string;
}

interface Hero {
  description: string;
  imageUrl: string;
  skill: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
}

function Home() {
  const [hero, setHero] = useState<Hero | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: Hero[] = await client.fetch(
          `*[_type=="hero"]{
            description,
            "imageUrl": image.asset->url,
            skill,
            "socialLinks": socials[]->{
              title, url
            },
            "resumeUrl": resume.asset->url
          }`
        );
        setHero(result[0]); // Assuming you're fetching one hero
      } catch (error) {
        console.error("Failed to fetch hero data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row gap justify-center items-center h-[90vh] gap md:gap-14  px-5 dark:bg-black"
    >
      <main className="justify-center items-center gap-8">
        <p className="text-lg uppercase font-bold sm:text-xl md:text-2xl dark:text-gray-200">
          Hello, I'm a
        </p>
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold my-2 dark:text-gray-200">
          {hero?.skill}👋
        </h1>
        <p className="font-bold text-gray-600 dark:text-gray-400 md:w-[400px] text-sm md:text-lg">
          {hero?.description}
        </p>
        <div className="mt-4 flex items-center">
          <button>
            <a href={hero?.socialLinks[0].url} target="_blank">
              <FaLinkedin
                size={40}
                className="text-gray-600 hover:text-black mr-2 dark:hover:text-gray-200"
              />
            </a>
          </button>
          <button>
            <a href={hero?.socialLinks[1].url} target="_blank">
              <FaGithubSquare
                size={40}
                className="text-gray-600 hover:text-black mr-2 dark:hover:text-gray-200"
              />
            </a>
          </button>
          <a
            target="_blank"
            href={hero?.resumeUrl}
            className="bg-gray-600 text-white font-bold p-2 rounded-md active:scale-95 hover:bg-black dark:text-black dark:hover:bg-gray-200"
          >
            Downlaod Resume
          </a>
        </div>
      </main>
      <div>
        <img
          className="shape bg-yellow-500 md:w-[250px] md:h-[250px] w-[300px] h-[300px] lg:w-[300px] lg:h-[300px] relative dark:border-gray-300"
          src={hero?.imageUrl}
          alt=""
        />
      </div>
    </section>
  );
}

export default Home;
