"use client";

import Link from "next/link";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";

export default function Skills() {
  const [skillsParent] = useAutoAnimate({
    duration: 300,
    easing: "ease-in-out",
  });

  const [activeCategory, setActiveCategory] = useState(categorizedSkills[0]);

  return (
    <section className="flex flex-col justify-center items-center h-full min-h-screen p-8">
      <div className="max-w-4xl w-full text-center text-md">
        <h2 className="text-3xl md:text-4xl text-center font-bold bg-gradient-to-r bg-clip-text text-transparent from-yellow-300 via-red-300 to-yellow-300 animate-text my-10 pb-2">
          Web Development Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categorizedSkills.map((categorizedSkill) => (
            <div
              key={categorizedSkill.category}
              className={`text-sm text-zinc-950 px-4 py-2 rounded hover:cursor-pointer hover:bg-yellow-200 focus:bg-zinc-200 transition ${
                categorizedSkill.category === activeCategory.category
                  ? "bg-yellow-300"
                  : "bg-zinc-300"
              }`}
              onClick={() => {
                setActiveCategory(categorizedSkill);
              }}
            >
              {categorizedSkill.category}
            </div>
          ))}
        </div>
        <div
          className="flex flex-wrap justify-center items-start"
          ref={skillsParent}
        >
          {activeCategory.skills.map(({ name, url, level, color }) => (
            <div key={name} className="flex flex-col p-4 w-[200px]">
              <Link className="group" href={url} target="_blank" rel="nofollow">
                <p className="text-xl mb-2 group-hover:text-zinc-400 transition">
                  {name}
                </p>
                <div className="w-full rounded bg-zinc-600 border-zinc-600 border-2">
                  <div
                    className={`${color} text-xs font-medium h-3 text-center p-0.5 leading-none rounded`}
                    style={{ width: `${level}%` }}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const categorizedSkills = [
  {
    category: "Front-end",
    skills: [
      {
        name: "React.js",
        url: "https://reactjs.org/",
        color: "bg-blue-500",
        level: 100,
      },
      {
        name: "SASS",
        url: "https://sass-lang.com/",
        color: "bg-pink-500",
        level: 100,
      },
      {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/",
        color: "bg-cyan-500",
        level: 85,
      },
      {
        name: "Vue.js",
        url: "https://vuejs.org/",
        color: "bg-green-500",
        level: 75,
      },
    ],
  },
  {
    category: "Back-end",
    skills: [
      {
        name: "Express.js",
        url: "https://expressjs.com/",
        color: "bg-purple-500",
        level: 100,
      },
      {
        name: "Flask Python",
        url: "https://flask.palletsprojects.com/",
        color: "bg-yellow-500",
        level: 100,
      },
      {
        name: "Firebase",
        url: "https://firebase.google.com/",
        color: "bg-yellow-500",
        level: 100,
      },
      {
        name: "ASP.NET Core",
        url: "https://dotnet.microsoft.com/apps/aspnet",
        color: "bg-indigo-500",
        level: 80,
      },
    ],
  },
  {
    category: "Full-stack",
    skills: [
      {
        name: "Next.js",
        url: "https://nextjs.org/",
        color: "bg-black",
        level: 100,
      },
      {
        name: "Astro",
        url: "https://astro.build/",
        color: "bg-yellow-500",
        level: 90,
      },
      {
        name: "T3 Stack",
        url: "https://create.t3.gg/",
        color: "bg-cyan-500",
        level: 80,
      },
      {
        name: "ASP.NET Core",
        url: "https://dotnet.microsoft.com/apps/aspnet",
        color: "bg-indigo-500",
        level: 80,
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/",
        color: "bg-cyan-500",
        level: 100,
      },
      {
        name: "Firestore",
        url: "https://firebase.google.com/docs/firestore",
        color: "bg-yellow-500",
        level: 90,
      },
      {
        name: "MongoDB",
        url: "https://www.mongodb.com/",
        color: "bg-green-500",
        level: 80,
      },
      {
        name: "Redis",
        url: "https://redis.io/",
        color: "bg-red-500",
        level: 70,
      },
    ],
  },
  {
    category: "Languages",
    skills: [
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
        color: "bg-blue-500",
        level: 100,
      },
      {
        name: "Python",
        url: "https://www.python.org/",
        color: "bg-yellow-500",
        level: 100,
      },
      {
        name: "C#",
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
        color: "bg-purple-500",
        level: 90,
      },
      {
        name: "Rust",
        url: "https://www.rust-lang.org/",
        color: "bg-orange-500",
        level: 80,
      },
    ],
  },
];
