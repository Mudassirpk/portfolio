import React from "react";

type Props = { children: string };

function Highlight({ children }: Props) {
  return <span className="text-m-yellow-dark">{children}</span>;
}

export default Highlight;
