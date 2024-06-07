import Image from "next/image";

type Props = {
  src: string;
  title: string;
};

function Skill({ src, title }: Props) {
  return (
    <div>
      <div className="border-t-4 flex justify-center items-center border-m-yellow-dark h-28 bg-gradient-to-b from-transparent to-gray-800">
        <div className="relative w-[60px] h-[60px]">
          <Image src={src} alt={title} fill />
        </div>
      </div>
      <div className="w-full p-2 text-center font-normal text-lg">{title}</div>
    </div>
  );
}

export default Skill;
