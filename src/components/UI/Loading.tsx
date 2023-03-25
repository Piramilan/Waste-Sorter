import React from "react";

const Loading = () => {
  return (
    <div
      className="flex absolute
         justify-center items-center bg-[#0f172a] w-[100vw] h-[100vh] overflow-hidden mx-auto bg-bg-primary"
    >
      <div className="bloom" />
    </div>
  );
};

export default Loading;
