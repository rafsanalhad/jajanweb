import React from "react";
import HeaderButton from "./HeaderButton";

const CardWhyUs = ({ img, m, title, ket }) => {
  return (
    <div className="shadow-sm lg:mb-16 md:mb-14 sm:mb-5 mb-5 bg-[#fff] rounded-[10px] p-10 lg:me-5 md:me-5 sm:me-0 me-0">
      <div className="flex flex-row">
      <div className="imgWhyUs">
        <img src={img} className="w-[80px] h-[40px]"alt="" />
      </div>
      <div className="m-0 p-0 ms-5">
        <h3 className="titleWhyUs text-[24px] font-semibold mb-3">{title}</h3>
        <p className="text-[14px] text-[#213053]">{ket}</p>
      </div>
      </div>
    </div>
  );
};

export default CardWhyUs;
