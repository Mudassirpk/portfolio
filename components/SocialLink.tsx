import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  link: string;
};

function SocialLink({ children, link }: Props) {
  return (
    <Link target="_blank" href={link}>
      {children}
    </Link>
  );
}

export default SocialLink;
