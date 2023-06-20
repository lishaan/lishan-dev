import Image from "next/image";
import { loader } from "@/lib/utils";

export default function Intro() {
  return (
    <section className="flex flex-col justify-center items-center h-full min-h-[calc(100vh-88px)] p-8">
      <Image
        src="avatar.jpg"
        className="rounded-full w-32"
        width={256}
        height={256}
        priority
        loader={loader}
        alt="Avatar"
      />
      <h1 className="text-sm mt-6 text-zinc-300">
        {"Hello there, my name is Lishan!"}
      </h1>
      <br />
      <p className="text-2xl md:text-4xl mt-4 text-center font-bold bg-gradient-to-r bg-clip-text text-transparent pb-2 from-yellow-300 via-red-300 to-yellow-300 animate-text">
        Building the Web
      </p>
      <p className="text-3xl md:text-5xl mt-4 text-center font-bold bg-gradient-to-r bg-clip-text text-transparent pb-2 from-yellow-300 via-red-300 to-yellow-300 animate-text">
        One Line at a Time
      </p>
    </section>
  );
}
