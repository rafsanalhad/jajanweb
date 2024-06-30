import React from "react";
import CardWhyUs from "./CardWhyUs";
import HeaderButton from "./HeaderButton";

const Kenapa = () => {
  let data = [
    {
   
      title: "High-Demand",
      ket: "Pekerjaan yang membutuhkan kemampuan digital menjadi jenis pekerjaan yang paling banyak dibutuhkan dalam industri lokal maupun global",
      img: "/Pemanis Satu.png",
    },
    {
  
      title: "High-Paying",
      ket: "Pekerjaan yang menggunakan kemampuan digital memiliki beragam tipe dan jenjang karir dengan gaji yang tinggi dalam rata-rata industri",
      img: "/Pemanis Satu.png",
    },
    {
    
      title: "Stay Relevant",
      ket: "Kemampuan digital terus relevan untuk masa depan. Bahkan kemampuan digital terus berkembang! Yuk jangan ketinggalan!",
      img: "/Pemanis Satu.png",
    },
  ];

  return (
    <div className="ms-[100px] me-[100px] mt-[50px]">
      <div className="headerKenapa flex flex-col items-center p-5 text-center bg-white">
        <p className="text-[60px] font-bold font-sansita mb-[100px]">
         Kenapa Harus Membuat Website <br /> Untuk Bisnis Anda?
        </p>
      </div>
      <div className="grid grid-cols-3">
      {data.map((dataWhy, index) => (
        <CardWhyUs
          button={dataWhy.button}
          title={dataWhy.title}
          ket={dataWhy.ket}
          img={dataWhy.img}
        />
    ))}

      </div>
    </div>
  );
};

export default Kenapa;
