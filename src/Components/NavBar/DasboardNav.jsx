import React, { useState } from 'react'
import Logo from "../../assets/Image/logo2.svg"
import {AiOutlineUser,AiFillCaretDown,AiOutlinePoweroff} from "react-icons/ai"

const DasboardNav = () => {
    const [modalState, setModalState] = useState(false);
    const toggleState = ()=>{
        setModalState(!modalState)
    }
  return (
    <div className='w-full flex justify-between relative'>
        <img src={Logo} alt="" />
        <div className='flex gap-[10px] items-center'>
            <div className='w-[50px] h-[50px] bg-black/25 flex items-center justify-center rounded-[50%]'>
                <AiOutlineUser size={30} />
            </div>
            <p className='font-bold'>John Mark</p>
            <AiFillCaretDown size={25} onClick={toggleState} className='cursor-pointer' />
            {modalState &&(
                <div className='absolute bottom-[-60px] right-0 p-[15px] rounded-lg bg-red-500 flex gap-[10px] items-center text-white'>
                <AiOutlinePoweroff size={30}/> 
                <p className='font-bold'>LogOut</p>
             </div>
            )}
        </div>
    </div>
  )
}

export default DasboardNav