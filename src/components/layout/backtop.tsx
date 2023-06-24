"use client";

import { useEffect, useState } from "react";

import { ChevronUp } from "lucide-react";

export default function Backtop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      className={`fixed bottom-3 right-3 z-50 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        className="flex items-center justify-center w-12 h-12 rounded bg-zinc-700 text-white hover:bg-zinc-800 transition"
        aria-label="Back to top"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ChevronUp className="w-8 h-8" />
      </button>
    </div>
  );
}
