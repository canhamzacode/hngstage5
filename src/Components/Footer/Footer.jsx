import React from 'react'
import footerImg from "../../assets/Image/footerLogo.svg"

const Footer = () => {
  return (
    <div  className='w-full px-[20px] md:p-[40px] py-[20px] grid md:grid-cols-4 grid-cols-1 gap-[25px] bg-[#120B48] text-white items-center justify-center md:justify-between '>
      <div className='w-full'>
        <img src={footerImg} alt="" />
      </div>
      <div className='grid gap-[20px]'>
        <p>Menue</p>
        <p>Home</p>
        <p>Converter</p>
      </div>
      <div className='grid gap-[20px]'>
        <p>Menue</p>
        <p>Home</p>
        <p>Converter</p>
      </div>
      <div className='grid gap-[20px]'>
        <p>Menue</p>
        <p>Home</p>
        <p>Converter</p>
      </div>
    </div>
  )
}

export default Footer