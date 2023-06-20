"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";

export default function Skills() {
  const [skillsParent] = useAutoAnimate({
    duration: 300,
    easing: "ease-in-out",
  });

  const [activeCategory, setActiveCategory] = useState(categorizedSkills[0]);

  return (
    <div className="flex flex-col justify-center items-center h-full min-h-screen p-8">
      <div className="max-w-4xl w-full text-center text-md">
        <h3 className="text-5xl text-center font-bold bg-gradient-to-r bg-clip-text text-transparent from-yellow-300 via-red-300 to-yellow-300 animate-text my-12">
          Skills
        </h3>
        <div className="flex justify-center gap-2 mb-8">
          {categorizedSkills.map((categorizedSkill) => (
            <div
              className="text-sm font-semibold text-zinc-200 cursor-pointer"
              onClick={() => {
                setActiveCategory(categorizedSkill);
              }}
            >
              {categorizedSkill.category}
            </div>
          ))}
        </div>
        <div
          className="flex flex-wrap justify-center h-[200px]"
          ref={skillsParent}
        >
          {activeCategory.skills.map(({ name, level }) => (
            <div className="flex flex-col p-4 w-[200px]">
              <p className="text-xl mb-2">{name}</p>
              <div className="w-full rounded bg-zinc-600">
                <div
                  className="bg-yellow-300 text-xs font-medium h-3 text-center p-0.5 leading-none rounded"
                  style={{ width: `${level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const categorizedSkills = [
  {
    category: "Front-end",
    skills: [
      {
        name: "React.js",
        level: 99,
      },
      {
        name: "Vue.js",
        level: 75,
      },
      {
        name: "SASS",
        level: 99,
      },
      {
        name: "Tailwind CSS",
        level: 85,
      },
    ],
  },
  {
    category: "Back-end",
    skills: [
      {
        name: "Express.js",
        level: 99,
      },
      {
        name: "Flask Python",
        level: 99,
      },
      {
        name: "ASP.NET Core",
        level: 99,
      },
    ],
  },
  {
    category: "Languages",
    skills: [
      {
        name: "TypeScript",
        level: 99,
      },
      {
        name: "Python",
        level: 99,
      },
      {
        name: "Java/Scala",
        level: 99,
      },
      {
        name: "C++",
        level: 99,
      },
      {
        name: "C#",
        level: 99,
      },
      {
        name: "Rust",
        level: 99,
      },
      {
        name: "PHP",
        level: 99,
      },
    ],
  },
];
