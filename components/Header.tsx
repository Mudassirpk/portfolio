import React from "react";
import Button from "./Button";

type Props = {};

function Header({}: Props) {
  return (
    <header className="w-full px-6 h-[125px] flex justify-between bg-gradient-to-b from-transparent to-[rgb(115,115,115,.1)] items-center max-w-[1200px] mx-auto">
      <div className="flex items-start gap-1">
        <p className="text-2xl text-white">I'M</p>
        <div className="flex-col flex items-start">
          <p className="text-4xl text-m-yellow-dark font-semibold">
            Mudasir Khan
          </p>
          <p className="text-2xl text-white">Full Stack Developer</p>
        </div>
      </div>
      <Button className="font-semibold">Contact me</Button>
    </header>
  );
}

export default Header;
