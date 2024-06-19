import React from "react";
import CardWhyUs from "./CardWhyUs";
import HeaderButton from "./HeaderButton";

const Kenapa = () => {
  let data = 
    {
      button: "Promosi",
      title: "Memperkenalkan Produk, jasa,  atau Layanan",
      ket: "Website adalah sarana promosi yang efektif bagi UMKM. Dengan memiliki website, UMKM dapat menampilkan informasi produk, jasa, atau layanan secara lengkap dan menarik. Informasi tersebut dapat diakses oleh pelanggan potensial dari seluruh Indonesia bahkan dunia. Dengan begitu, UMKM menjangkau lebih banyak pelanggan potensial dan meningkatkan penjualan.",
      img: "/Pemanis Satu.png",
    };
  
  return (
    <div className="ms-[100px] me-[100px]">
      <div className="headerKenapa flex flex-col items-center p-5 text-center bg-white">
        <HeaderButton>Kenapa Website</HeaderButton>
        <p className="text-[48px] font-bold font-sansita">
          Transformasi Digital Bukan lagi Pillihan,
          <br /> melainkan Keharusan
        </p>
      </div>
      <CardWhyUs button={data.button} title={data.title} ket={data.ket} img={data.img} />
    </div>
  );
};

export default Kenapa;
