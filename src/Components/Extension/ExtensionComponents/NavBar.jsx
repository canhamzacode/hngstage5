import React from 'react'
import Logo2 from "../../../assets/Image/logo2.svg"
import {AiFillSetting, AiFillCloseCircle} from "react-icons/ai"

const NavBar = () => {
  return (
    <div className='w-full flex justify-between'>
        <div>
            <img src={Logo2} alt="" />
        </div>
        <div className='flex gap-[10px]'>
            <AiFillSetting size={25} />
            <AiFillCloseCircle size={25} color='grey' />
        </div>
    </div>
  )
}

export default NavBar