import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import Backtop from "@/components/layout/backtop";
import Footer from "@/components/layout/footer";
import { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import { Poppins } from "next/font/google";
import type { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

const font = Poppins({ subsets: ["latin"], weight: ["500"] });

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
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
};

const title = "lishan.dev | Building the Web, One Line at a Time";
const description =
  "Full-stack developer from the Maldives. 5+ years of experience crafting custom web solutions. Contact for inquiries.";
const url = new URL(
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://lishan.dev"
);

export const metadata: Metadata = {
  metadataBase: url,

  title,
  description,
  category: "Software Development",
  keywords: [
    "lishan",
    "dev",
    "developer",
    "web",
    "full-stack",
    "maldives",
    "typescript",
    "nextjs",
    "react",
  ],
  openGraph: {
    title,
    description,
    url,
    siteName: "lishan.dev",
    emails: ["lishan.dev@outlook.com"],
    countryName: "Maldives",
    images: [
      {
        url: "https://ik.imagekit.io/lishan/seo/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title,
    card: "summary_large_image",
  },

  colorScheme: "dark",
  themeColor: "#18181b",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },

  icons: {
    shortcut: "/favicon.ico",
    icon: [
      {
        url: "/assets/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/assets/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/assets/safari-pinned-tab.svg",
        type: "image/svg+xml",
        rel: "mask-icon",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  manifest: "/assets/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: process.env.VERIFICATION_GOOGLE,
  },
};

export default RootLayout;
