import React from "react";
import CardWhyUs from "./CardWhyUs";
import HeaderButton from "./HeaderButton";

const Kenapa = () => {
  const options = {
    items: 3,
    rewind: true,
    autoplay: false,
    loop: true,
   // Atur margin negatif untuk membuat item keluar dari area tampilan
};
 ;
  let data = [
    {
   
      title: "High-Demand",
      ket: "Pekerjaan yang membutuhkan kemampuan digital menjadi jenis pekerjaan yang paling banyak dibutuhkan dalam industri lokal maupun global",
      img: "/tes2.png",
      m: 'mt-10'
    },
    {
  
      title: "High-Paying",
      ket: "Pekerjaan yang menggunakan kemampuan digital memiliki beragam tipe dan jenjang karir dengan gaji yang tinggi dalam rata-rata industri",
      img: "/tes2.png",
      m: 'mt-0'
    },
    {
    
      title: "Stay Relevant",
      ket: "Kemampuan digital terus relevan untuk masa depan. Bahkan kemampuan digital terus berkembang! Yuk jangan ketinggalan!",
      img: "/tes2.png",
      m: 'mt-10'
    },
    {
    
      title: "Stay Relevant",
      ket: "Kemampuan digital terus relevan untuk masa depan. Bahkan kemampuan digital terus berkembang! Yuk jangan ketinggalan!",
      img: "/tes2.png",
      m: 'mt-10'
    },
    
 
  ];

  return (
    <div className="lg:pt-[120px] md:pt-[70px] sm:pt-[0px] pt-[0px0 bg-[#F8FCFF] lg:px-[100px] md:px-[20px] sm:px-[20px] px-[20px] py-[50px]">
      <div className="headerKenapa flex flex-col items-center p-5 text-center bg-white">
        <p style={{background: "linear-gradient(to right, #B9EFFF, #fff)"}} className="text-[#0597FA] rounded-[4px] px-3 lg:text-[22px] md:text-[20px] sm:text-[16px] text-[16px] font-semibold">Kenapa Harus Punya Website?</p>
        <p className="lg:text-[48px] md:text-[36px] sm:text-[26px] text-[26px] font-sansita font-semibold mb-[40px]">
        <span className="text-[#0597FA]">Transformasi Digital Bukan Lagi <br className="lg:block md:block sm:hidden hidden" />Pilihan</span>, melainkan Keharusan
        </p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
      {data.map((dataWhy, index) => (
        <CardWhyUs
        index={index}
          button={dataWhy.button}
          title={dataWhy.title}
          ket={dataWhy.ket}
          img={dataWhy.img}
          m={dataWhy.m}
        />
    ))}

      </div>
      {/* <div className="h-[1px] w-full bg-black"></div> */}
    </div>
  );
};

export default Kenapa;
