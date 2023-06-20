import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex flex-col justify-center items-center h-full min-h-[calc(100vh-88px)] p-8">
      <Image
        src="/avatar.jpg"
        className="rounded-full"
        height={128}
        width={128}
        unoptimized
        alt="Avatar"
      />
      <p className="text-sm mt-6 text-zinc-300">
        {"Hello there, my name is Lishan!"}
      </p>
      <br />
      <h1 className="text-3xl md:text-5xl mt-4 text-center font-bold bg-gradient-to-r bg-clip-text text-transparent from-yellow-300 via-red-300 to-yellow-300 animate-text">
        Building the Web
        <br />
        One Line at a Time
      </h1>
    </div>
  );
}
