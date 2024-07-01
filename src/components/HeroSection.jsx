import React from "react";

const HeroSection = () => {
  return (
    <section
      className="hero flex justify-center items-center lg:pb-36 md:pb-0 sm:pb-0 pb-0"
      style={{
        backgroundColor: "#ADECFF",
      }}
    >
      <div className="absolute lg:top-[150px] md:top-[100px] sm:top-[100px] top-[100px]">
        <img src="/Lingkaran.png"style={{width: "100%", pointerEvents: 'none'}} alt="" />
      </div>
      <div className="flex flex-col">
        <div className="header-hero mt-20">
          <div className="text-hero text-center">
            <h3 className="lg:text-[64px] md:text-[48px] sm:text-[20px] text-[20px] font-sansita font-bold">
              Expand Your Business Reach
            </h3>
            <h3 className="lg:text-[64px] md:text-[48px] sm:text-[28px] text-[28px] font-sansita font-bold">
              Achieve Fantastis Profits
            </h3>
          </div>
        </div>
        <div className="text-hero mt-5 lg:px-[0px] md:px-[100px] sm:px-[100px] px-[100px]">
          <p class="font-text text-center lg:text-[21px] md:text-[14px] sm:text-[14px] text-[14px] mt-[20px]">
            Elevate your business and seize incredible profits with our dynamic
            solutions. Our <br className="lg:block md:block sm:hidden hidden"/> strategic approach is crafted to navigate the
            complexities of the modern market,
            <br className="lg:block md:block sm:hidden hidden"/> ensuring your brand stands out amidst competition.
          </p>
        </div>
        <div className="button-hero flex flex-row justify-center mt-5">
          <button
            className="pesan px-3 py-3 text-white rounded-[16px] me-3"
            style={{
              color: "#f0f0f0",
              background: "linear-gradient(to left, #08BBEA, #0597FA)",
            }}
          >
            Pesan Sekarang
          </button>
          <button className="cekHarga border-2 border-button px-3 py-3font-text rounded-[16px]">
            Pesan Sekarang
          </button>
        </div>
        <div className="subHero px-32 lg:mt-40 md:mt-[20px] sm:mt-[20px] mt-[20px]">
          <div className="border-4 rounded-[16px] w-[80vw] border-button">
            <div className="grid grid-cols-7">
              <div className="background lg:col-span-3 md:col-span-7 sm:col-span-7 col-span-7 p-5">
                <p
                  className="shadow-2xl py-3 px-3 w-[200px] rounded-[16px] font-bold lg:text-[18px] md:text-[14px] sm:text-[14px] text-[14px] text-button"
                  style={{ backgroundColor: "#B9EFFF" }}
                >
                  Latar Belakang
                </p>
                <p className="lg:text-[42px] md:text-[30px] sm:text-[20px] text-[20px] mt-5 font-sansita font-bold"> 
                  Perubahan Perilaku Konsumen Menuntutmu Untuk Segera Go Digital
                </p>
              </div>
              <div className="ketBackground lg:col-span-4 md:col-span-7 sm:col-span-7 col-span-7 pb-5 ps-5 pe-5 lg:pt-5 md:pt-0 sm:pt-0 pt-0">
                <div className="flex flex-col">
                  <p className="lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px]">
                    Perkembangan teknologi telah membawa perubahan besar dalam
                    berbagai aspek kehidupan, terkhusus dunia bisnis. Tentu
                    penting bagi kita sebagai pelaku bisnis untuk memahami dan
                    beradaptasi dengan perubahan ini agar tetap relevan dan
                    kompetitif.
                  </p>
                  <div className="grid grid-cols-3 mt-3">
                    <div className="">
                    <div className="ketData lg:text-[40px] md:text-[28px] sm:text-[28px] text-[28px] text-button" style={{fontWeight: '600'}}>
                      13%
                    </div>
                    <p className="lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px]">Saja UMKM di Indonesia yang sudah beralih ke digital</p>
                    </div>
                    <div className="">
                    <div className="ketData lg:text-[40px] md:text-[28px] sm:text-[28px] text-[28px] text-button" style={{fontWeight: '600'}}>
                      13%
                    </div>
                    <p className="lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px]">Saja UMKM di Indonesia yang sudah beralih ke digital</p>
                    </div>
                    <div className="">
                    <div className="ketData lg:text-[40px] md:text-[28px] sm:text-[28px] text-[28px] text-button" style={{fontWeight: '600'}}>
                      13%
                    </div>
                    <p className="lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px]">Saja UMKM di Indonesia yang sudah beralih ke digital</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
