import React from "react";

const Solusi = () => {
  return (
    <div
      className="solusiSection grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 lg:px-[100px] md:px-[50px] sm:px-[50px] px-[50px] h-full"
      style={{
        background: "linear-gradient(to bottom, #ADECFF, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff",
      }}
    >
      <div className="leftSolusi lg:mt-[100px] md:mt-[100px] sm:mt-[50px] mt-[50px]">
        <h3 className="lg:text-[40px] md:text-[38px] lg:text-left md:text-center sm:text-center text-center sm:text-[30px] text-[30px] font-semibold font-sansita">
          Sudah bisa adaptasi <br className="lg:block md:hidden sm:hidden hidden"/> dengan ekonomi <br className="lg:block md:hidden sm:hidden hidden"/> digital?
        </h3>
        <p className="lg:text-[16px] md:text-[16px] sm:text-[14px] mb-5 text-[14px] text-[#183866] lg:mt-10 md:mt-[20px] sm:mt-[10px] mt-[20px] lg:text-left md:text-center sm:text-center text-center">
          Bisnis yang terlambat beradaptasi dengan ekonomi digital <br />dapat kalah
          dalam persaingan lokal dan global. <br className="lg:block md:hidden sm:hidden hidden"/> (Kementrian Investasi)
        </p>
      </div>
      <div className="rightSolusi grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:my-[100px] md:my-[20px] sm:my-[20px] my-20px">
        <div className="data1 bg-[#10545d] h-full p-6 rounded-[26px] border-none">
          <h3 className="lg:text-[60px] md:text-[48px] sm:text-[48px] text-[48px] text-[#fff] font-bold mb-5">
            2.9jt
          </h3>
          <p className="lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px] text-[#fff]">
            Pekerja yang terdampak pandemi covid baik di PHK,
            dirumahkan, atau dikurangi jam kerjanya. <br />(kementrian ketenagakerjaan)
          </p>
        </div>
        <div className="data2 bg-[#213053] h-full lg:ms-5 md:ms-5 sm:ms-0 ms-0 lg:mt-0 md:mt-0 sm:mt-5 mt-5 p-6 rounded-[26px] border-none">
          <h3 className="lg:text-[60px] md:text-[48px] sm:text-[48px] text-[48px] text-[#fff] font-bold mb-5">
            30jt
          </h3>
          <p className="lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px] text-[#fff]">
          UMKM gulung tikar karena dampak pandemi. Bisniskonvensional mengalami tantangan yang berat <br /> (Asosiasi UMKM Indonesia)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solusi;
