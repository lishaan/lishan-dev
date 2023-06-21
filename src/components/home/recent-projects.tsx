"use client";

import { ChevronLeft, ChevronRight, LinkIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { loader } from "@/lib/utils";

export default function RecentProjects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [
    Autoplay({ delay: 15000, stopOnMouseEnter: true, stopOnInteraction: true }),
  ]);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="md:flex md:flex-col md:justify-center md:items-center h-full min-h-screen p-8 bg-zinc-950">
      <h2 className="text-3xl md:text-4xl pb-2 text-center font-bold text-gradient mb-12">
        Recent Projects
      </h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex mx-auto max-w-2xl">
          {recentProjects.map(
            ({ name, description, url, image, technologies, hoverColor }) => {
              return (
                <div key={name} className="flex-[0_0_100%] m-w-0">
                  <div className="flex mx-auto max-w-4xl">
                    <div className="flex flex-col mx-auto">
                      <Image
                        priority
                        src={image}
                        className="w-full rounded-lg mx-auto max-w-[512px] mb-4 border-2 border-zinc-700"
                        width={512}
                        height={256}
                        loader={loader}
                        alt={`Preview of ${name}`}
                      />
                      <Link
                        href={url}
                        target="_blank"
                        rel="nofollow"
                        className="flex items-center justify-center gap-2 mb-2 group max-w-fit-content"
                        aria-label={`${name} Link`}
                      >
                        <p
                          className={`text-2xl text-center text-zinc-100 ${hoverColor} transition`}
                        >
                          {name}
                        </p>
                        <LinkIcon
                          size="18"
                          className={`text-zinc-100 ${hoverColor} transition`}
                        />
                      </Link>
                      <p className="text-sm text-center mx-auto max-w-lg">
                        {description}
                      </p>
                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {technologies.map(({ name, colors }) => (
                          <div
                            key={name}
                            className={`text-xs px-2 py-1 rounded ${colors}`}
                          >
                            {name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 mt-6">
        {scrollSnaps.map((_, index) => {
          const activeColor = recentProjects[index].hoverColor.replace(
            "group-hover:text",
            "bg"
          );

          return (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === selectedIndex ? activeColor : "bg-zinc-300"
              }`}
              aria-label={`Scroll to Project ${index + 1} out of ${
                scrollSnaps.length
              }`}
              onClick={() => scrollTo(index)}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-6 gap-2">
        <button
          className="bg-zinc-500 p-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous Project"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <ChevronLeft />
        </button>
        <button
          className="bg-zinc-500 p-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next Project"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

const recentProjects = [
  {
    name: "Ereyvi Maldives",
    url: "https://preview.ereyvi.com",
    hoverColor: "group-hover:text-orange-500",
    description:
      "Ereyvi Maldives is a go-to destination for unique and tailored gifts. Customers can order personalized gifts for their loved ones online.",
    image: "ereyvi-preview.png",
    technologies: [
      {
        name: "Next.js",
        colors: "bg-blue-500 text-black",
      },
      {
        name: "SASS",
        colors: "bg-pink-500 text-black",
      },
      {
        name: "ASP.NET Core",
        colors: "bg-purple-500 text-black",
      },
      {
        name: "Amazon Web Services",
        colors: "bg-yellow-500 text-black",
      },
    ],
  },
  {
    name: "Martline Maldives",
    url: "https://martline.com",
    hoverColor: "group-hover:text-red-500",
    description:
      "Martline is a wholesale online store in the Maldives. Wholesale customers can order products online and have them delivered to their offices anywhere in the Maldives.",
    image: "martline-preview.png",
    technologies: [
      {
        name: "Next.js",
        colors: "bg-blue-500 text-black",
      },
      {
        name: "SASS",
        colors: "bg-pink-500 text-black",
      },
      {
        name: "ASP.NET Core",
        colors: "bg-purple-500 text-black",
      },
      {
        name: "EwityPos",
        colors: "bg-cyan-500 text-black",
      },
      {
        name: "BML Payment Gateway",
        colors: "bg-red-500 text-black",
      },
      {
        name: "Amazon Web Services",
        colors: "bg-yellow-500 text-black",
      },
    ],
  },
  {
    name: "Seenco Cloud",
    url: "https://seenco.cloud",
    hoverColor: "group-hover:text-blue-500",
    description:
      "Seenco Cloud is a cloud-based platform that provides a suite of applications for Seenco Corporation PVT LTD's subsidiaries.",
    image: "seencocloud-preview.png",
    technologies: [
      {
        name: "Next.js",
        colors: "bg-blue-500 text-black",
      },
      {
        name: "Ant Design",
        colors: "bg-blue-600 text-black",
      },
      {
        name: "ASP.NET Core",
        colors: "bg-purple-500 text-black",
      },
      {
        name: "EwityPos",
        colors: "bg-cyan-500 text-black",
      },
      {
        name: "Amazon Web Services",
        colors: "bg-yellow-500 text-black",
      },
    ],
  },
  {
    name: "Ixy Maldives",
    url: "https://ixy.mv",
    hoverColor: "group-hover:text-cyan-500",
    description:
      "Ixy is Maldives' best mobility solution. Ixy provides transportation solutions for your every need in the Maldives.",
    image: "ixy-preview.png",
    technologies: [
      {
        name: "Next.js",
        colors: "bg-blue-500 text-black",
      },
      {
        name: "SASS",
        colors: "bg-pink-500 text-black",
      },
      {
        name: "Firebase",
        colors: "bg-orange-500 text-black",
      },
    ],
  },
  {
    name: "AirForLife Malaysia",
    url: "https://airforlife.my",
    hoverColor: "group-hover:text-blue-500",
    description:
      "Improve the quality of air around you with Air for Life air purifiers in Malaysia. Equipped with effective HEPA filter that keeps bacteria and viruses away.",
    image: "airforlife-preview.png",
    technologies: [
      {
        name: "Next.js",
        colors: "bg-blue-500 text-black",
      },
      {
        name: "React Bootstrap",
        colors: "bg-indigo-500 text-black",
      },
      {
        name: "SASS",
        colors: "bg-pink-500 text-black",
      },
      {
        name: "Firebase",
        colors: "bg-orange-500 text-black",
      },
    ],
  },
];
