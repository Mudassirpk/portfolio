import { experiences } from "@/utils/experiences";
import Heading from "../ui/Heading";
import SingleExperience from "./Experience";

export default function Experience() {
  return (
    <section>
      <Heading title="Experience" theme="dark" />
      {experiences.map((experience) => {
        return (
          <SingleExperience experience={experience} key={experience.company} />
        );
      })}
    </section>
  );
}
