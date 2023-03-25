import React from "react";

import UnderlineLink from "../links/UnderlineLink";

const Footer = () => {
  return (
    <div className="sticky flex items-center justify-center mt-14">
      <footer className="absolute bottom-0 text-white">
        © {new Date().getFullYear()} Developed By{" "}
        <UnderlineLink href="http://milan.vercel.app/">Milan</UnderlineLink>
      </footer>
    </div>
  );
};

export default Footer;
