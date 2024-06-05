import About from "@/components/About";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <About />
    </main>
  );
}
