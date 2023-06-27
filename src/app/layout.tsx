import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import Backtop from "@/components/layout/backtop";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Poppins } from "next/font/google";
import type { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import defaultMetadata from "@/lib/seo";

const font = Poppins({ subsets: ["latin"], weight: ["500"] });

export const metadata = defaultMetadata;

export default function RootLayout({ children }: PropsWithChildren) {
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
        <Analytics />
      </body>
    </html>
  );
}
