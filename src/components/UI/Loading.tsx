import React from "react";
import Head from "../Head";

const Loading = () => {
  return (
    <div
      className="flex absolute
         justify-center items-center bg-primary w-[100vw] h-[100vh] overflow-hidden mx-auto bg-bg-primary "
    >
      <Head />
      <div className="swap" />
    </div>
  );
};

export default Loading;
