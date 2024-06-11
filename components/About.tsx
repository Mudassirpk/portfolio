// components
import Highlight from "./Highlight";

// icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import SocialLink from "./SocialLink";

type Props = {};

function About({}: Props) {
  return (
    <section className="bg-gradient-to-b from-transparent to-gray-800 w-full border-t-4 border-t-m-yellow-dark">
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col justify-center ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-white font-semibold">About Me</h2>
          <div className="border-r-2 border-r-m-yellow-dark py-1 pl-1 sm:hidden pr-2 bg-gradient-to-l from-transparent to-slate-700 flex justify-between items-center gap-4">
            <SocialLink link="">
              <FaLinkedin className="text-3xl text-indigo-600" />
            </SocialLink>
            <SocialLink link="https://github.com/Mudassirpk">
              <FaGithub className="text-3xl text-white" />
            </SocialLink>
            <SocialLink link="">
              <RiWhatsappFill className="text-3xl text-green-500" />
            </SocialLink>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden border-t-4 border-t-m-yellow-dark bg-gradient-to-b from-transparent to-slate-700 px-1 py-2 sm:flex flex-col gap-3 items-center">
            <SocialLink link="">
              <FaLinkedin className="text-3xl text-indigo-600" />
            </SocialLink>
            <SocialLink link="https://github.com/Mudassirpk">
              <FaGithub className="text-3xl text-white" />
            </SocialLink>
            <SocialLink link="">
              <RiWhatsappFill className="text-3xl text-green-500" />
            </SocialLink>
          </div>
          <p className="text-white">
            Full Stack Developer with{" "}
            <Highlight>2+ years of experience</Highlight> in building
            industry-standard and enterprise applications. Throughout my career,
            I have collaborated with a diverse range of clients globally, both
            as a freelancer and as an employee. My expertise includes developing
            web applications using{" "}
            <Highlight>ReactJS, NextJS, and NodeJS</Highlight>. Additionally, I
            have experience integrating <Highlight>AI</Highlight> features using{" "}
            <Highlight>Pinecone (a vector database)</Highlight> and OpenAI APIs.
            Beyond my proficiency with these technologies, I am always eager to
            explore and work with new tools and frameworks to deliver the best
            solutions for my clients.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
