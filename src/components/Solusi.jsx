import React from "react";

const Solusi = () => {
  return (
    <div
      className="solusiSection grid grid-cols-2  px-[100px] h-full"
      style={{
        background: "linear-gradient(to bottom, #ADECFF, #fff, #fff",
      }}
    >
      <div className="leftSolusi my-[100px]">
        <h3 className="text-[54px] font-semibold font-sansita">
          Sudah bisa adaptasi <br /> dengan ekonomi <br /> digital?
        </h3>
        <p className="text-[17px] text-[#183866] mt-10">
          Bisnis yang terlambat beradaptasi dengan ekonomi digital <br />dapat kalah
          dalam persaingan lokal dan global. <br /> (Kementrian Investasi)
        </p>
      </div>
      <div className="rightSolusi grid grid-cols-2 my-[100px]">
        <div className="data1 bg-[#10545d] h-full p-6 rounded-[26px] border-none">
          <h3 className="text-[60px] text-[#fff] font-bold mb-5">
            2.9jt
          </h3>
          <p className="text-[16px] text-[#fff]">
            Pekerja yang terdampak pandemi covid baik di PHK,<br />
            dirumahkan, atau dikurangi jam kerjanya. (kementrian ketenagakerjaan)
          </p>
        </div>
        <div className="data2 bg-[#213053] h-full ms-5 p-6 rounded-[26px] border-none">
          <h3 className="text-[60px] text-[#fff] font-bold mb-5">
            30jt
          </h3>
          <p className="text-[16px] text-[#fff]">
          UMKM gulung tikar karena <br /> dampak pandemi. Bisnis <br /> konvensional mengalami <br /> tantangan yang berat <br /> (Asosiasi UMKM Indonesia)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solusi;
