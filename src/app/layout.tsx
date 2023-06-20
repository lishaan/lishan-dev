import "./globals.css";

import Backtop from "@/components/layout/backtop";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

const font = Poppins({ subsets: ["latin"], weight: ["500"] });

export const metadata = {
  title: "lishan.dev | Building the Web, One Line at a Time",
  description:
    "Full-stack developer from the Maldives. 5+ years of experience crafting custom web solutions. Expertise in front-end & back-end. Contact for inquiries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster />
        <div className="h-full min-h-screen bg-custom bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 background-animate">
          <Navbar />
          {children}
          <Footer />
        </div>
        <Backtop />
      </body>
    </html>
  );
}
