import React from "react";

const HeaderButton = ({ children }) => {
  return (
    <div
      className="mb-4 text-center shadow-2xl py-3 px-3 w-[250px] rounded-[16px] font-bold text-[20px] text-button"
      style={{border: 'solid', borderColor: "#B9EFFF" }}
    >
      {children}
    </div>
  );
};

export default HeaderButton;
