import React from 'react'
import Logo from "../../assets/Image/logo2.svg"
import {FaBars} from "react-icons/fa"

const NavBar = () => {
  return (
    <div className='w-full px-[20px] md:px-[40px] py-[20px] justify-between flex flex-wrap gap-[10px]'>
      <a href="">
        <img src={Logo} alt="" />
      </a>
      <div className='hidden md:flex items-center gap-[20px]'>
        <a href="" className='text-black text-base font-medium'>Features</a>
        <a href="" className='text-black text-base font-medium'>How It works</a>
      </div>
      <div className='flex items-center gap-[10px]'>
        <a href="" className='text-[#120B48] text-lg font-bold flex'>Get Started</a>
        <FaBars size={25} color='#120B48' className='flex md:hidden' />
      </div>
    </div>
  )
}

export default NavBar