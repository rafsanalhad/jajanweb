import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-3 lg:px-[100px] md:px-12 sm:px-12 px-12 bg-[#fff] py-[50px]">
      <div className="left lg:col-span-2 md:col-span-2 sm:col-span-3 col-span-3">
        <h3 className="text-[22px] text-[#1c6fc1]">Warisan IT</h3>
        <p className="text-[13px] mt-5 text-[#677788] mb-5">
          GoSocial merupakan perusahaan konsultan <br />sekaligus Creative & Digital
          Hub No.1 di Indonesia yang <br />bertujuan membantu bisnis dalam melakukan
          Digital Marketing <br /> dengan berbagai layanan terbaik
        </p>
      </div>
      <div className="lg:col-span-1 md:col-span-1 sm:col-span-3 col-span-3">
      <div className="right grid grid-cols-3 w-full">
      <div className="middle w-full">
        <h3 className="text-[14px] font-semibold">Company</h3>
        <ul className="list-none">
            <li className="py-3 text-[14px] text-[#677788]">About</li>
            <li className="py-3 text-[14px] text-[#677788]">Contact Us</li>
            <li className="py-3 text-[14px] text-[#677788]">Partners</li>
            <li className="py-3 text-[14px] text-[#677788]">Portofolio</li>
        </ul>
      </div>
      <div className="middle">
        <h3 className="text-[14px] font-semibold">Company</h3>
        <ul className="list-none">
            <li className="py-3 text-[14px] text-[#677788]">About</li>
            <li className="py-3 text-[14px] text-[#677788]">Contact Us</li>
            <li className="py-3 text-[14px] text-[#677788]">Partners</li>
            <li className="py-3 text-[14px] text-[#677788]">Portofolio</li>
        </ul>
      </div>
      <div className="middle">
        <h3 className="text-[14px] font-semibold">Company</h3>
        <ul className="list-none">
            <li className="py-3 text-[14px] text-[#677788]">About</li>
            <li className="py-3 text-[14px] text-[#677788]">Contact Us</li>
            <li className="py-3 text-[14px] text-[#677788]">Partners</li>
            <li className="py-3 text-[14px] text-[#677788]">Portofolio</li>
        </ul>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
