import React from "react";

const Solusi = () => {
  return (
    <div className="solusiSection pt-16 flex flex-col justify-center items-center" style={{background: "linear-gradient(to bottom, #ADECFF, #f0f0f0, #f0f0f0"}}>
      <p
        className="mb-4 text-center shadow-2xl py-3 px-3 w-[200px] rounded-[16px] font-bold text-[18px] text-button"
        style={{ backgroundColor: "#B9EFFF" }}
      >
        Solusi
      </p>
      <p className="text-[40px] font-sansita font-bold mb-5">Buat Website Saja</p>
      <img src="/Pemanis.png" alt="" />
    </div>
  );
};

export default Solusi;
