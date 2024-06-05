import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ className, children, ...props }: Props) {
  return (
    <button
      {...props}
      className={`px-4 py-2 border-l-4 text-m-yellow-dark border-l-m-yellow-light bg-gradient-to-r hover:from-m-yellow-35 hover:text-white transition-all duration-400 from-[rgb(115,115,115,.4)] to-transparent ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
