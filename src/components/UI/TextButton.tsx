import React from "react";
import UnstyledLink from "../links/UnstyledLink";

type Props = {
  children: any;
  link: any;
};

const TextButton = ({ children, link }: Props) => {
  return (
    <UnstyledLink href={link}>
      <button
        className="bg-gradient-to-b
                   from-blue-500 to-blue-600
                   px-10 py-4
                   text-2xl
                   m-5 border-none 
                    text-white 
                   cursor-pointer
                      shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
      >
        {children}
      </button>
    </UnstyledLink>
  );
};

export default TextButton;
