import { GithubIcon, Mail } from "lucide-react";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-8 bg-transparent w-full top-0 max-w-4xl mx-auto">
      <Link
        href="mailto:lishan.dev@outlook.com"
        className="flex gap-2 items-center hover:underline hover:text-yellow-300 transition"
      >
        <Mail />
      </Link>
      <span className="text-md font-semibold bg-gradient-to-r bg-clip-text text-transparent from-yellow-300 via-red-300 to-yellow-300 animate-text">
        lishan.dev
      </span>
      <div className="flex self-end gap-4">
        <Link
          href="https://github.com/Lishaan"
          target="_blank"
          className="flex gap-2 items-center hover:underline hover:text-yellow-300 transition"
        >
          <GithubIcon />
        </Link>
      </div>
    </nav>
  );
}
