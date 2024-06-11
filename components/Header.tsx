import React from "react";
import Button from "./Button";

type Props = {};

function Header({}: Props) {
  return (
    <header className="w-fullbg-gradient-to-b from-transparent to-[rgb(115,115,115,.1)]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 sm:py-0 h-auto sm:h-[125px] gap-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-start gap-1">
          <p className="text-2xl text-white">I&apos;M</p>
          <div className="flex-col flex items-start">
            <p className="text-4xl text-m-yellow-dark font-semibold">
              Mudasir Khan
            </p>
            <p className="text-2xl text-white">Full Stack Developer</p>
          </div>
        </div>
        <Button className="font-semibold">Contact me</Button>
      </div>
    </header>
  );
}

export default Header;
