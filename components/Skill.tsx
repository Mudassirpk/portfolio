import Image from "next/image";

type Props = {
  src: string;
  title: string;
};

function Skill({ src, title }: Props) {
  return (
    <div className="w-full aspect-square">
      <div className="border-t-4 w-full h-full flex justify-center items-center border-m-yellow-dark bg-gradient-to-b from-transparent hover:from-gray-800 transition-all duration-500 ease-in hover:to-transparent to-gray-800">
        <div className="relative w-[60px] h-[60px]">
          <Image src={src} alt={title} fill className="object-contain" />
        </div>
      </div>
      <div className="w-full p-2 text-center font-normal text-lg">{title}</div>
    </div>
  );
}

export default Skill;
