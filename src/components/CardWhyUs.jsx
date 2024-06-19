import React from "react";
import HeaderButton from "./HeaderButton";

const CardWhyUs = ({ img, button, title, ket }) => {
  return (
    <div className="grid grid-cols-2">
      
      <div className="imgWhyUs">
        <img src={img} alt="" />
      </div>
      <div className="ketWhyUs">
        <HeaderButton>{button}</HeaderButton>
        <h3 className="titleWhyUs text-3xl font-medium mb-3">{title}</h3>
        <p>{ket}</p>
      </div>
    </div>
  );
};

export default CardWhyUs;
