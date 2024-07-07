import React, {useRef} from 'react'
import {motion, useInView} from 'framer-motion'

const TypeWeb = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true});
  const delay= [1, 1.5, 2];
  return (
    <motion.div  ref={ref} initial={{opacity: 0, y: -50}} animate={inView ? {opacity: 1, y: 0} : ''} transition={{duration: 1}} className="lg:py-32 md:py-[70px] sm:py-[70px] py-[70px] lg:px-[100px] md:px-[20px] sm:px-10 px-10 flex flex-col items-center justify-center">
     <motion.p ref={ref} initial={{opacity: 0, y: -50}} animate={inView ? {opacity: 1, y: 0} : ''} transition={{duration: 1}} style={{background: "linear-gradient(to right, #B9EFFF, #fff)"}} className="text-[#0597FA] rounded-[4px] px-3 lg:text-[22px] md:text-[20px] sm:text-[16px] text-[16px] font-semibold">Website Apa Yang Kami Buat?</motion.p>
        <motion.p ref={ref} initial={{opacity: 0, scale: 0.5}} animate={inView ? {opacity: 1, scale: 1} : ''} transition={{duration: 1}} className="lg:text-[48px] md:text-[36px] sm:text-[26px] text-[26px] font-sansita font-semibold mb-[50px] text-center">
        Pilihan <span className="text-[#0597FA]">& Jenis Website</span>, 
        </motion.p>
      <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col justify-center">
        <motion.div ref={ref} initial={{opacity: 0, y: -50}} animate={inView ? {opacity: 1, y: 0} : ''} transition={{duration: 1, delay: delay[0]}} className="data1 p-[30px] bg-[#a1acc0] me-10 lg:w-full md:w-full mb-5 sm:w-full w-full rounded-[12px]">
          <h3 className="text-[21px] text-[#fff] mb-4">Company Profile</h3>
          <p className="text-[16px] text-[#fff]">Pembuatan website company profile untuk menampilkan profil perusahaan atau bisnis secara mendetail. </p>
          <img src="/companyprofile.png" alt="" />
        </motion.div>
        
        <motion.div ref={ref} initial={{opacity: 0, y: -50}} animate={inView ? {opacity: 1, y:0} : ''} transition={{duration: 1, delay: delay[1]}} className="data1 p-[30px] bg-[#0c1f43] me-10 lg:w-full mb-5 md:w-full sm:w-full w-full rounded-[12px]">
          <h3 className="text-[21px] text-[#fff] mb-4">Company Profile</h3>
          <p className="text-[16px] text-[#fff]">Pembuatan website company profile untuk menampilkan profil perusahaan atau bisnis secara mendetail. </p>
          <img src="/companyprofile.png" alt="" />
        </motion.div>
        
        <motion.div ref={ref} initial={{opacity: 0, y: -50}} animate={inView ? {opacity: 1, y:0} : ''} transition={{duration: 1, delay: delay[2]}} className="data1 p-[30px] bg-[#163d86] mb-5 lg:w-full md:w-full sm:w-full w-full rounded-[12px]">
          <h3 className="text-[21px] text-[#fff] mb-4">Company Profile</h3>
          <p className="text-[16px] text-[#fff]">Pembuatan website company profile untuk menampilkan profil perusahaan atau bisnis secara mendetail. </p>
          <img src="/companyprofile.png" alt="" />
        </motion.div>
        
      </div>
    </motion.div>
  )
}

export default TypeWeb
