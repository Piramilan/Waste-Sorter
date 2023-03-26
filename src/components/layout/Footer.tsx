import React from "react";

import UnderlineLink from "../links/UnderlineLink";

const Footer = () => {
  return (
    <div className="text-center py-4 w-full">
      <footer className=" text-white">
        © {new Date().getFullYear()} Developed By{" "}
        <UnderlineLink href="http://milan.vercel.app/">Milan</UnderlineLink>
      </footer>
    </div>
  );
};

export default Footer;
