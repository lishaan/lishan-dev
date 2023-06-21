"use client";

import { GithubIcon, Mail } from "lucide-react";

import Link from "next/link";

export default function Navbar() {
  function scrollToContact() {
    const element = document.getElementById("contact")!;
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="flex justify-between items-center px-6 py-8 bg-transparent w-full top-0 max-w-4xl mx-auto">
      <Link
        href="https://github.com/Lishaan"
        target="_blank"
        className="flex gap-2 items-center hover:underline hover:text-yellow-300 transition"
        aria-label="Github Link"
      >
        <GithubIcon />
      </Link>
      <Link href="/" className="text-md font-semibold text-gradient">
        lishan.dev
      </Link>
      <button
        onClick={scrollToContact}
        className="flex gap-2 items-center hover:underline hover:text-yellow-300 transition"
        aria-label="Go to Contact"
      >
        <Mail />
      </button>
    </nav>
  );
}
