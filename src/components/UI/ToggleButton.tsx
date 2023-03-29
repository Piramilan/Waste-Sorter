import React, { ChangeEvent, ChangeEventHandler } from "react";

interface Props {
  value: boolean;
  onClick: () => void;
}

const ToggleButton = ({ value, onClick }: Props) => {
  const toggleClass = "transform translate-x-6";
  return (
    <button
      onClick={onClick}
      className={`w-14 h-7 flex items-center
      bg-white rounded-full 
      p-1 cursor-pointer`}
    >
      <div
        className={`bg-primary h-6
          w-6 rounded-full shadow-md transition transform${
            value ? toggleClass : null
          }`}
      ></div>
    </button>
  );
};

export default ToggleButton;
