import React from "react";
import HeaderButton from "./HeaderButton";

const CardWhyUs = ({ img, button, title, ket }) => {
  return (
    <div className="flex flex-col mb-16">
      <div className="imgWhyUs">
        <img src={img} className="w-[150px] h-[150px]"alt="" />
      </div>
      <div className="ketWhyUs pe-[100px]">
        <h3 className="titleWhyUs text-[24px] font-medium mb-3 mt-10">{title}</h3>
        <p className="text-[14px] text-[#213053]">{ket}</p>
      </div>
    </div>
  );
};

export default CardWhyUs;
