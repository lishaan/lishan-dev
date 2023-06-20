import "./globals.css";

import Navbar from "@/components/navbar";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["500"] });

export const metadata = {
  title: "lishan.dev | Home",
  description: "Building the Web, One Line at a Time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="h-full min-h-screen bg-custom bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 background-animate">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
