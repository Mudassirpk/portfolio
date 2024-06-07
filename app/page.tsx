import About from "@/components/About";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <About />
      <Skills />
    </main>
  );
}
