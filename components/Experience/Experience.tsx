import { TExperience } from "@/types";

type Props = {
  experience: TExperience;
};

export default function SingleExperience({
  experience: { role, company, from, to, description },
}: Props) {
  return (
    <div className="py-6 px-8 sm:px-20">
      <div className="sm:border-l-2 sm:border-l-m-yellow-dark border-t-2 sm:border-t-0 border-t-m-yellow-dark py-2 px-4 bg-gradient-to-r from-gray-700 to-transparent text-white">
        <h3 className="text-xl text-center">
          <span className="">{role}</span> |{" "}
          <span className="font-semibold">{company}</span>
        </h3>
      </div>
      <div className="flex gap-2 mt-4 items-start">
        <div className="hidden sm:block h-[100px] px-2 bg-gradient-to-b from-transparent via-gray-800 to-m-yellow-dark"></div>
        <div>
          <p className="w-full text-center sm:text-left text-m-yellow-dark text-lg">
            From {from} - {to}
          </p>
          <div className="mt-4 text-center">
            <p className="w-full text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
