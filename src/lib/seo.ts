import { Metadata } from "next";

const title = "lishan.dev | Building the Web, One Line at a Time";
const description =
  "Full-stack developer from the Maldives. 5+ years of experience crafting custom web solutions. Contact for inquiries.";
const url = new URL(
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://lishan.dev"
);

const defaultMetadata: Metadata = {
  metadataBase: url,

  title,
  description,
  category: "Web Development",
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
  manifest: "/site.webmanifest",

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

export default defaultMetadata;