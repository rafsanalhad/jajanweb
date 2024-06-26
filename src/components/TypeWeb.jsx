import React from 'react'

const TypeWeb = () => {
  return (
    <div className="mx-auto py-20 px-12">
      <p className="text-[16px] text-center">Website Seperti Apa Yang Dapat Dibuat?</p>
      <h3 className="lg:text-[40px] md:text-[32px] sm:text-[28px] text-[28px] text-center font-semibold mb-[50px]">Pilihan & Jenis Website </h3>
      <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col justify-center">
        <div className="data1 p-[30px] bg-[#a1acc0] me-10 lg:w-[350px] md:w-full mb-5 sm:w-full w-full rounded-[12px]">
          <h3 className="text-[21px] text-[#fff] mb-4">Company Profile</h3>
          <p className="text-[16px] text-[#fff]">Pembuatan website company profile untuk menampilkan profil perusahaan atau bisnis secara mendetail. </p>
          <img src="/companyprofile.png" alt="" />
        </div>
        
        <div className="data1 p-[30px] bg-[#0c1f43] me-10 lg:w-[350px] mb-5 md:w-full sm:w-full w-full rounded-[12px]">
          <h3 className="text-[21px] text-[#fff] mb-4">Company Profile</h3>
          <p className="text-[16px] text-[#fff]">Pembuatan website company profile untuk menampilkan profil perusahaan atau bisnis secara mendetail. </p>
          <img src="/companyprofile.png" alt="" />
        </div>
        
        <div className="data1 p-[30px] bg-[#163d86] mb-5 lg:w-[350px] md:w-full sm:w-full w-full rounded-[12px]">
          <h3 className="text-[21px] text-[#fff] mb-4">Company Profile</h3>
          <p className="text-[16px] text-[#fff]">Pembuatan website company profile untuk menampilkan profil perusahaan atau bisnis secara mendetail. </p>
          <img src="/companyprofile.png" alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default TypeWeb
