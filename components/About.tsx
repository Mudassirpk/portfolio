import Highlight from "./Highlight";
import { FaGithub } from "react-icons/fa";
type Props = {};

function About({}: Props) {
  return (
    <section className="w-full px-6 py-6 flex flex-col justify-center border-t-4 border-t-m-yellow-dark">
      <h2 className="text-2xl text-white font-semibold mb-4">About Me</h2>
      <div className="flex items-stretch gap-4">
        <div className="border-t-4 border-t-m-yellow-dark bg-gradient-to-b from-transparent to-slate-700 px-5"></div>
        <p className="text-white">
          Full Stack Developer with{" "}
          <Highlight>2+ years of experience</Highlight> in building
          industry-standard and enterprise applications. Throughout my career, I
          have collaborated with a diverse range of clients globally, both as a
          freelancer and as an employee. My expertise includes developing web
          applications using <Highlight>ReactJS, NextJS, and NodeJS</Highlight>.
          Additionally, I have experience integrating AI features using{" "}
          <Highlight>Pinecone (a vector database)</Highlight> and OpenAI APIs.
          Beyond my proficiency with these technologies, I am always eager to
          explore and work with new tools and frameworks to deliver the best
          solutions for my clients.
        </p>
      </div>
    </section>
  );
}

export default About;
