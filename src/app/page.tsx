import About from "@/components/home/about";
import Intro from "@/components/home/intro";
import RecentProjects from "@/components/home/recent-projects";
import Skills from "@/components/home/skills";

export default function Home() {
  return (
    <main className="h-full min-h-screen">
      <Intro />
      <About />
      <Skills />
      <RecentProjects />
    </main>
  );
}
