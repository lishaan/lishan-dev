"use client";

type Loader = {
  src: string;
  width: number;
  quality?: number;
};

export function loader({ src, width, quality }: Loader) {
  return `https://ik.imagekit.io/lishan/tr:w-${width},q-${
    quality ?? 100
  }/${src}`;
}
