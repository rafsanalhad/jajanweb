import React, { useRef } from 'react'
import {motion, useInView} from 'framer-motion'
const TopFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true});
  return (
    <motion.div initial={{opacity: 0, scale: 0.5}} animate={inView ? {opacity: 1, scale: 1} : ''} ref={ref} transition={{duration: 1}} className="footer flex flex-col justify-center items-center lg:px-48 md:px-5 sm:px-5 px-5 h-[320px] bg-[#0597FA]">
        <motion.h3 initial={{opacity: 0, scale: 0.5}} animate={inView ? {opacity: 1, scale: 1} : ''} ref={ref} transition={{duration: 1}} className="text-[27px] text-[#fff] mb-3 font-semibold text-center">Masih ragu / bingung dengan layanan kami?</motion.h3> 
        <motion.p initial={{opacity: 0, scale: 0.5}} animate={inView ? {opacity: 1, scale: 1} : ''} ref={ref} transition={{duration: 1}} className="text-[16px] text-[#fff] mb-3 text-center">Hubungi tim kami untuk diskusi lebih lanjut terkait jasa pembuatan website </motion.p>
        <motion.button initial={{opacity: 0, scale: 0.5}} animate={inView ? {opacity: 1, scale: 1} : ''} ref={ref} transition={{duration: 1}} className="px-3 py-3 bg-[#16bc10] border-none rounded-[16px] mt-3 text-[#fff]">Kontak Sales</motion.button>
    </motion.div>
  )
}

export default TopFooter
