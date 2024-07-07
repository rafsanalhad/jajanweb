import React, {useRef} from 'react'
import { motion, useInView } from 'framer-motion'

const PacketWeb = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true});
  const delay= [1, 1.5, 2];
  return (
    <motion.div ref={ref} initial={{opacity: 0, y: -50}} animate={inView ? {opacity: 1, y: 0} : ''} transition={{duration: 1}} className=" lg:py-20 md:py-14 sm:py-16 py-16 px-10 flex flex-col justify-center lg:items-center md:items-center bg-[#F8FCFF]">
      <motion.p ref={ref} initial={{opacity: 0, y: -50}} animate={inView ? {opacity: 1, y: 0} : ''} transition={{duration: 1}} style={{background: "linear-gradient(to right, #B9EFFF, #fff)"}} className="text-[#0597FA] text-center rounded-[4px] px-3 lg:text-[22px] md:text-[20px] sm:text-[16px] text-[16px] font-semibold">Berapa Harga Untuk Pembuatan Suatu Website?</motion.p>
        <motion.p ref={ref} initial={{opacity: 0, scale: 0.5}} animate={inView ? {opacity: 1, scale: 1} : ''} transition={{duration: 1}} className="lg:text-[48px] md:text-[36px] sm:text-[26px] text-[26px] font-sansita font-semibold mb-[50px] text-center">
        Pilih Paket Yang <br /> <span className="text-[#0597FA]">Terbaik Untuk Anda</span>, 
        </motion.p>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-1">
        <motion.div ref={ref} initial={{opacity: 0, y: -50}} animate={inView ? {opacity: 1, y: 0} : ''} transition={{duration: 1, delay: delay[0] }} className="data1 p-[30px] bg-[#fff] mb-5 lg:w-[350px] lg:me-10 md:me-0 sm:me-0 me-0 md:w-full sm:w-full w-full rounded-[12px]">
          <h3 className="text-[24px] font-semibold text-[#1e2022] mb-4">Lite</h3>
          <p className="text" style={{textDecoration: 'line-through'}}>Rp36.900</p>
          <p className="text-[25px] font-bold mb-3">Rp. 800.000</p>
        

          <h3 className="text-[20px] font-bold text-[#bebebe] mb-3">
            Layanan Awal 
          </h3>
          <p className="text-[14px]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>

          <div className="w-full h-[1px] bg-[#888] mt-5 mb-5"></div>
        </motion.div>
        <motion.div ref={ref} initial={{opacity: 0, y: -50}} animate={inView ? {opacity: 1, y: 0} : ''} transition={{duration: 1, delay: delay[1] }} className="data1 p-[30px] bg-[#0597FA] lg:w-[350px] md:w-full sm:w-full mb-5 w-full rounded-[12px]">
          <h3 className="text-[24px] font-semibold text-[#fff] mb-4">Lite</h3>
          <p className="text-[#fff]" style={{textDecoration: 'line-through'}}>Rp36.900</p>
          <p className="text-[25px] text-[#fff] font-bold mb-3">Rp. 800.000</p>
         

          <h3 className="text-[20px] font-bold text-[#ffffff] mb-3">
            Layanan Awal 
          </h3>
          <p className="text-[14px] text-[#fff]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px] text-[#fff]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px] text-[#fff]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px] text-[#fff]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px] text-[#fff]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px] text-[#fff]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px] text-[#fff]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
    

          <div className="w-full h-[1px] bg-[#fff] mt-5 mb-5"></div>
        </motion.div>
        <motion.div ef={ref} initial={{opacity: 0, y: -50}} animate={inView ? {opacity: 1, y: 0} : ''} transition={{duration: 1, delay: delay[2] }} className="data1 p-[30px] bg-[#fff] mb-5 lg:w-[350px] md:w-full sm:w-full w-full rounded-[12px]">
          <h3 className="text-[24px] font-semibold text-[#1e2022] mb-4">Lite</h3>
          <p className="text" style={{textDecoration: 'line-through'}}>Rp36.900</p>
          <p className="text-[25px] font-bold mb-3">Rp. 800.000</p>
         

          <h3 className="text-[20px] font-bold text-[#bebebe] mb-3">
            Layanan Awal 
          </h3>
          <p className="text-[14px]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>
          <p className="text-[14px]"><img src="/centang.png" alt="" className="w-[30px] h-[30px] inline"/>Free Domain & Hosting</p>

          <div className="w-full h-[1px] bg-[#888] mt-5 mb-5"></div>
        </motion.div>
      
        
       
        
      </div>
    </motion.div>
  )
}

export default PacketWeb
