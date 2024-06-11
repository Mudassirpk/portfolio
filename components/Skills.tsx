import React from "react";
import Skill from "./Skill";
import { firstRow, lastRow, secondRow } from "@/utils/skill-icons";
import Heading from "./ui/Heading";

type Props = {};

function Skills({}: Props) {
  return (
    <section className="w-full pt-20 pb-5 text-white">
      <Heading title="Skills" theme="dark" />
      <div className="w-full flex flex-col gap-4 items-center my-12">
        <div className="w-full sm:w-auto px-6 gap-4 grid sm:grid-cols-[repeat(4,130px)] grid-cols-[repeat(2,50%)]">
          {firstRow.map((skill) => {
            return (
              <Skill key={skill.src} src={skill.src} title={skill.title} />
            );
          })}
        </div>
        <div className="w-full sm:w-auto px-6 gap-4 grid sm:grid-cols-[repeat(4,130px)] grid-cols-[repeat(2,50%)]">
          {secondRow.map((skill) => {
            return (
              <Skill key={skill.src} src={skill.src} title={skill.title} />
            );
          })}
        </div>
        <div className="w-full sm:w-auto  px-6 gap-4 grid sm:grid-cols-[repeat(2,130px)] grid-cols-[repeat(2,50%)]">
          {lastRow.map((skill) => {
            return (
              <Skill key={skill.src} src={skill.src} title={skill.title} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
