import "./globals.css";

import { GithubIcon, HomeIcon, Mail } from "lucide-react";

import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "lishan.dev | Home",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full min-h-screen bg-custom bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 background-animate">
          <nav className="flex justify-between items-center px-6 py-8 bg-transparent w-full top-0 max-w-4xl mx-auto">
            <Link
              href="/"
              className="flex self-start gap-2 items-center hover:underline hover:text-yellow-300 transition"
            >
              <HomeIcon />
            </Link>
            <span className="text-md font-semibold bg-gradient-to-r bg-clip-text text-transparent from-yellow-300 via-red-300 to-yellow-300 animate-text">
              lishan.dev
            </span>
            <div className="flex self-end gap-4">
              <Link
                href="mailto:lishan.dev@outlook.com"
                className="flex gap-2 items-center hover:underline hover:text-yellow-300 transition"
              >
                <Mail />
              </Link>
              <Link
                href="https://github.com/Lishaan"
                target="_blank"
                className="flex gap-2 items-center hover:underline hover:text-yellow-300 transition"
              >
                <GithubIcon />
              </Link>
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
