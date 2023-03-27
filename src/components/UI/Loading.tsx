import React from "react";

const Loading = () => {
  return (
    <div
      className="flex absolute
         justify-center items-center bg-primary w-[100vw] h-[100vh] overflow-hidden mx-auto bg-bg-primary "
    >
      <div className="swap" />
    </div>
  );
};

export default Loading;
