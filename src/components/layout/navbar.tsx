"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "https://github.com/Lishaan", label: "Github", external: true },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMenu]);

  return (
    <nav className="flex justify-between items-center p-6 md:py-8 bg-transparent w-full top-0 max-w-4xl mx-auto">
      <Link
        href="/"
        className="text-lg font-semibold text-gradient"
        aria-label="Go to Home"
      >
        lishan.dev
      </Link>
      <div className="flex gap-2 text-md max-sm:hidden">
        {links.map(({ href, label, external }, key) => (
          <Link
            key={key}
            href={href}
            className={`hover:underline hover:text-yellow-300 transition ${
              pathname === href ? "text-yellow-300" : "text-zinc-100"
            }`}
            aria-label={`Go to ${label}`}
            target={external ? "_blank" : undefined}
          >
            {label}
          </Link>
        ))}
      </div>
      <button
        className="text-xs sm:text-sm hover:text-yellow-300 sm:hidden"
        aria-label="Open Menu"
        onClick={() => setShowMenu(true)}
      >
        <Menu />
      </button>
      <div
        className={`fixed flex flex-col w-full min-h-screen z-50 bg-zinc-950 top-0 left-0 transition duration-300 ${
          showMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } sm:hidden`}
      >
        <Link
          href="/"
          onClick={() => setShowMenu(false)}
          className="text-gradient text-xl justify-start text-center mt-[10vh]"
          aria-label="Go to Home"
        >
          lishan.dev
        </Link>
        <div className="flex flex-col gap-8 text-xl w-full h-full justify-center items-center flex-grow -mt-[calc(10vh-40px)]">
          {links.map(({ href, label, external }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setShowMenu(false)}
              className={`hover:underline hover:text-yellow-300 transition ${
                pathname === href ? "text-yellow-300" : "text-zinc-100"
              }`}
              aria-label={`Go to ${label}`}
              target={external ? "_blank" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setShowMenu(false)}
            className="flex justify-center items-center mb-10 bg-zinc-700 text-zinc-100 rounded-md px-3 py-2 hover:bg-zinc-800 transition"
            aria-label="Close Menu"
          >
            Close
          </button>
        </div>
      </div>
    </nav>
  );
}
