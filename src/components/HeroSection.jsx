import React from "react";

const HeroSection = () => {
  return (
    <section
      className="hero flex justify-center items-center"
      style={{
        backgroundColor: "#ADECFF",
      }}
    >
      <div className="absolute" style={{top: '150px'}}>
        <img src="/Lingkaran.png"style={{width: "100%"}} alt="" />
      </div>
      <div className="flex flex-col">
        <div className="header-hero mt-20">
          <div className="text-hero text-center">
            <h3 className="text-[64px] font-sansita font-bold">
              Expand Your Business Reach
            </h3>
            <h3 className="text-[64px] font-sansita font-bold">
              Achieve Fantastis Profits
            </h3>
          </div>
        </div>
        <div className="text-hero mt-5">
          <p class="font-text text-center">
            Elevate your business and seize incredible profits with our dynamic
            solutions. Our <br /> strategic approach is crafted to navigate the
            complexities of the modern market,
            <br /> ensuring your brand stands out amidst competition.
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
        <div className="subHero px-32 mt-40 z-50">
          <div className="border-4 rounded-[16px] w-[80vw] border-button">
            <div className="grid grid-cols-7">
              <div className="background col-span-3 p-5">
                <p
                  className="shadow-2xl py-3 px-3 w-[200px] rounded-[16px] font-bold text-[18px] text-button"
                  style={{ backgroundColor: "#B9EFFF" }}
                >
                  Latar Belakang
                </p>
                <p className="text-[42px] font-sansita font-bold"> 
                  Perubahan Perilaku Konsumen Menuntutmu Untuk Segera Go Digital
                </p>
              </div>
              <div className="ketBackground col-span-4 p-5">
                <div className="flex flex-col">
                  <p className="text-[16px]">
                    Perkembangan teknologi telah membawa perubahan besar dalam
                    berbagai aspek kehidupan, terkhusus dunia bisnis. Tentu
                    penting bagi kita sebagai pelaku bisnis untuk memahami dan
                    beradaptasi dengan perubahan ini agar tetap relevan dan
                    kompetitif.
                  </p>
                  <div className="grid grid-cols-3">
                    <div className="">
                    <div className="ketData text-[40px] text-button" style={{fontWeight: '600'}}>
                      13%
                    </div>
                    <p>Saja UMKM di Indonesia yang sudah beralih ke digital</p>
                    </div>
                    <div className="">
                    <div className="ketData text-[40px] text-button" style={{fontWeight: '600'}}>
                      13%
                    </div>
                    <p>Saja UMKM di Indonesia yang sudah beralih ke digital</p>
                    </div>
                    <div className="">
                    <div className="ketData text-[40px] text-button" style={{fontWeight: '600'}}>
                      13%
                    </div>
                    <p>Saja UMKM di Indonesia yang sudah beralih ke digital</p>
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
