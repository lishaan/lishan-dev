export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-2 px-1 bg-zinc-950">
      <p className="text-zinc-400 text-sm flex justify-center items-center">
        {`Copyright © ${new Date().getFullYear()} |`}&nbsp;
        <span className="text-sm text-gradient">lishan.dev</span>
      </p>
    </footer>
  );
}
