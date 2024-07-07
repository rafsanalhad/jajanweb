import React from "react";
import {useRef} from "react";
import CardWhyUs from "./CardWhyUs";
import HeaderButton from "./HeaderButton";
import { motion, useInView } from "framer-motion";

const Kenapa = () => {
  const ref= useRef(null);
  const inView = useInView(ref, {once: true});
  const delay= [1, 1.5, 1.8, 2.2];
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
    <motion.div ref={ref} initial={{opacity: 0, y: -50}} animate={inView ? {opacity:1, y:0} : ''} transition={{duration: 1 }} className="lg:pt-[120px] md:pt-[70px] sm:pt-[40px] pt-[40px] bg-[#F8FCFF] lg:px-[100px] md:px-[20px] sm:px-10 px-10 py-[50px]">
      <div className="headerKenapa flex flex-col items-center p-5 text-center bg-white">
        <motion.p ref={ref} initial={{opacity: 0, y: -50}} animate={inView ? {opacity:1, y:0} : ''} transition={{duration: 1 }} style={{background: "linear-gradient(to right, #B9EFFF, #fff)"}} className="text-[#0597FA] rounded-[4px] px-3 lg:text-[22px] md:text-[20px] sm:text-[16px] text-[16px] font-semibold">Kenapa Harus Punya Website?</motion.p>
        <motion.p ref={ref} initial={{opacity: 0, scale: 0.5}} animate={inView ? {opacity:1, scale: 1} : ''} transition={{duration: 1 }} className="lg:text-[48px] md:text-[36px] sm:text-[26px] text-[26px] font-sansita font-semibold mb-[40px]">
        <span className="text-[#0597FA]">Transformasi Digital Bukan Lagi <br className="lg:block md:block sm:hidden hidden" />Pilihan</span>, melainkan Keharusan
        </motion.p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
      {data.map((dataWhy, index) => (
        <motion.div ref={ref} initial={{opacity: 0, y: -50}} animate={inView ? {opacity:1, y:0} : ''} transition={{duration: 1, delay: delay[index] }} className="">
            <CardWhyUs
            index={index}
              button={dataWhy.button}
              title={dataWhy.title}
              ket={dataWhy.ket}
              img={dataWhy.img}
              m={dataWhy.m}
            />
        </motion.div>
    ))}

      </div>
      {/* <div className="h-[1px] w-full bg-black"></div> */}
    </motion.div>
  );
};

export default Kenapa;
