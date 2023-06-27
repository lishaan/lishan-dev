import type {
  Icons,
  Robots,
} from "next/dist/lib/metadata/types/metadata-types";

import type { Metadata } from "next";
import type { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import type { Twitter } from "next/dist/lib/metadata/types/twitter-types";

const domain = "lishan.dev";
const url = new URL(
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://lishan.dev"
);

const title = `${domain} | Building the Web, One Line at a Time`;
const description =
  "Full-stack developer from the Maldives. 5+ years of experience crafting custom web solutions. Contact for inquiries.";

const keywords = [
  domain,
  "lishan",
  "abbas",
  "lishan abbas",
  "dev",
  "developer",
  "web",
  "full-stack",
  "maldives",
  "typescript",
  "nextjs",
  "react",
];

const robots: Robots = {
  index: true,
  follow: true,
  "max-video-preview": -1,
  "max-image-preview": "large",
  "max-snippet": -1,
};

const icons: Icons = {
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
      url: "/assets/mstile-150x150.png",
      type: "image/png",
      sizes: "150x150",
    },
    {
      url: "/assets/android-chrome-192x192.png",
      type: "image/png",
      sizes: "192x192",
    },
    {
      url: "/assets/android-chrome-512x512.png",
      type: "image/png",
      sizes: "512x512",
    },
  ],
  apple: {
    url: "/apple-touch-icon.png",
    sizes: "180x180",
    type: "image/png",
  },
  other: [
    {
      url: "/assets/safari-pinned-tab.svg",
      type: "image/svg+xml",
      rel: "mask-icon",
    },
  ],
};

const openGraph: OpenGraph = {
  title,
  description,
  url,
  siteName: domain,
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
};

const twitter: Twitter = {
  title,
  site: "@lishan_dev",
  card: "summary_large_image",
};

const defaultMetadata: Metadata = {
  metadataBase: url,

  title,
  description,
  applicationName: domain,
  keywords,
  themeColor: "#18181b",
  colorScheme: "dark",
  viewport: { width: "device-width", initialScale: 1 },
  robots,
  icons,
  manifest: "/site.webmanifest",
  category: "Web Development",

  openGraph,
  twitter,

  verification: { google: process.env.VERIFICATION_GOOGLE },
  assets: "/assets",
};

export default defaultMetadata;
