export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-2 px-1 bg-zinc-950">
      <p className="text-zinc-400 text-sm flex justify-center items-center">
        {`Copyright © ${new Date().getFullYear()} |`}&nbsp;
        <p className="text-sm text-center font-bold bg-gradient-to-r bg-clip-text text-transparent from-yellow-300 via-red-300 to-yellow-300 animate-text">
          lishan.dev
        </p>
      </p>
    </footer>
  );
}
