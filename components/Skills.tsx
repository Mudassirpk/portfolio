import React from "react";
import Skill from "./Skill";
import { firstRow } from "@/utils/skill-icons";

type Props = {};

function Skills({}: Props) {
  return (
    <section className="w-full text-3xl py-20 font-semibold text-white">
      <h2 className="w-full text-center">Skills</h2>
      <div className="w-full flex flex-col gap-4 items-center my-12">
        <div className="w-[550px] gap-4 grid grid-cols-4">
          {firstRow.map((skill) => {
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
