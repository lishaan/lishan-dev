"use client";

import type { DefaultToastOptions } from "react-hot-toast";

type Loader = {
  src: string;
  width: number;
  quality?: number;
};

export function loader({ src, width, quality = 100 }: Loader) {
  return `https://ik.imagekit.io/lishan/tr:w-${width},q-${quality}/${src}`;
}

export const toastOptions: DefaultToastOptions = {
  style: {
    borderRadius: "6px",
    background: "#27272a",
    color: "#fafafa",
  },
};
