import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import GOverlay from "../../assets/Image/greenoverlay.svg";
import Greyverlay from "../../assets/Image/greyoverlay.svg";
import LeftTop from "../../assets/Image/leftTop.svg"
import LeftBottom from "../../assets/Image/leftBottom.svg"
import Right from "../../assets/Image/right.svg"
import "./Hero.css"


const Hero = () => {
  return (
    <div className='w-full px-[20px] md:p-[40px] py-[20px] grid gap-[20px] md:grid-cols-2 grid-cols-1 items-center'>
        <div className='grid gap-[20px] '>
            <h1 className='text-[#141414] md:text-[45px] text-[30px] '>Show Them Don’t Just Tell</h1>
            <p className='text-black/70 text-lg'>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
            <button className='flex gap-[10px] max-w-[300px] w-full p-[10px] items-center justify-center rounded-md bg-[#120B48] '>
                <p className='text-[20px] text-white'>Install HelpMeOut</p>
                <AiOutlineArrowRight color='#fff' size={25}/>
            </button>
        </div>
        <div className='relative min-h-[70vh] w-full flex items-center justify-center'>
            <img src={GOverlay} alt="" className=' top-0 md:top-[-100px] right-0 absolute w-full max-w-[350px] z-[-1]' />
            <img src={Greyverlay} alt="" className=' bottom-0  left-0 absolute w-full max-w-[350px] z-[-1]' />
            <div className='heroGrid'>
                <img src={LeftTop} className='topLeft object-contain' alt="" />
                <img src={LeftBottom} className='bottomLeft object-contain' alt="" />
                <img src={Right} className='right object-contain' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero