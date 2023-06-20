import About from "@/components/home/about";
import Intro from "@/components/home/intro";
import Skills from "@/components/home/skills";

export default function Home() {
  return (
    <main className="h-full min-h-screen">
      <Intro />
      <About />
      <Skills />
    </main>
  );
}
