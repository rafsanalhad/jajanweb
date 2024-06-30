import React from 'react'

const PacketWeb = () => {
  return (
    <div className="mx-auto mt-10">
      <p className="text-[16px] text-center">Website Seperti Apa Yang Dapat Dibuat?</p>
      <h3 className="text-[40px] text-center font-semibold   mb-[50px]">Pilihan & Jenis Website </h3>
      <div className="flex flex-row justify-center">
        <div className="data1 p-[30px] bg-[#fff] me-10 w-[350px] rounded-[12px]">
          <h3 className="text-[21px] text-[#fff] mb-4">Lite</h3>
          <img src="/companyprofile.png" alt="" />
        </div>
        
        <div className="data1 p-[30px] bg-[#0c1f43] me-10 w-[350px] rounded-[12px]">
          <h3 className="text-[21px] text-[#fff] mb-4">Company Profile</h3>
          <p className="text-[16px] text-[#fff]">Pembuatan website company profile untuk menampilkan profil perusahaan atau bisnis secara mendetail. </p>
          <img src="/companyprofile.png" alt="" />
        </div>
        
        <div className="data1 p-[30px] bg-[#163d86] me-10 w-[350px] rounded-[12px]">
          <h3 className="text-[21px] text-[#fff] mb-4">Company Profile</h3>
          <p className="text-[16px] text-[#fff]">Pembuatan website company profile untuk menampilkan profil perusahaan atau bisnis secara mendetail. </p>
          <img src="/companyprofile.png" alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default PacketWeb
