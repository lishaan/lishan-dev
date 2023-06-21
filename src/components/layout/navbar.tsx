import { GithubIcon, Mail } from "lucide-react";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-8 bg-transparent w-full top-0 max-w-4xl mx-auto">
      <Link
        href="mailto:lishan.dev@outlook.com"
        className="flex gap-2 items-center hover:underline hover:text-yellow-300 transition"
        aria-label="Email Link"
      >
        <Mail />
      </Link>
      <span className="text-md font-semibold text-gradient">lishan.dev</span>
      <div className="flex self-end gap-4">
        <Link
          href="https://github.com/Lishaan"
          target="_blank"
          className="flex gap-2 items-center hover:underline hover:text-yellow-300 transition"
          aria-label="Github Link"
        >
          <GithubIcon />
        </Link>
      </div>
    </nav>
  );
}
