import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <>
      <button className="flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-black text-white   font-montserrat rounded-full">
        {label}
        <img src={iconURL} className="ml-2 rounded-full" alt="arrow-right" />
      </button>
    </>
  );
};

export default Button;
