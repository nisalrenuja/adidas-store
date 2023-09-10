import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-10">
      <div className="w-11 h-11 justify-center items-center bg-black rounded-full flex">
        <img src={imgURL} width={24} length={24} alt={label} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-2 font-palanquin">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
