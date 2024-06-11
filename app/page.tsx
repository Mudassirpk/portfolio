import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <About />
      <Skills />
      <Experience />
    </main>
  );
}
