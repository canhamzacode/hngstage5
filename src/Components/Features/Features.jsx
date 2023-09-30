import React from 'react'
import Simple from "../../assets/Image/simple.svg"
import Easy from "../../assets/Image/easy.svg"
import Revisit from "../../assets/Image/revisit.svg"
import preview from "../../assets/Image/preview.svg"

const Features = () => {
  return (
    <div className='w-full px-[20px] md:p-[40px] py-[20px] grid gap-[30px] '>
        <div className='w-full text-center grid gap-[10px]'>
            <h3 className='text-[#141414] text-2xl'>Features</h3>
            <p className='text-lg'>Key Highlights of Our Extension</p>
        </div>
        <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-[25px] items-center justify-center'>
            <div className='w-full grid gap-[25px]'>
                <div className='flex gap-[10px]'>
                    <img src={Simple} alt="" className='w-[50px] h-[50px] ' />
                    <div className='w-full grid gap-[15px]'>
                        <h3 className='text-[#1B233D] text-xl'>Simple Screen Recording</h3>
                        <p className='text-black/40 text-[16px]'>
                            Effortless screen recording for everyone. Record with ease, no tech expertise required.
                        </p>
                    </div>
                </div>
                <div className='flex gap-[10px]'>
                    <img src={Easy} alt="" className='w-[50px] h-[50px] ' />
                    <div className='w-full grid gap-[15px]'>
                        <h3 className='text-[#1B233D] text-xl'>Easy-to-Share URL</h3>
                        <p className='text-black/40 text-[16px]'>
                        Share your recordings instantly with a single link. No attachments, no downloads.
                        </p>
                    </div>
                </div>
                <div className='flex gap-[10px]'>
                    <img src={Revisit} alt="" className='w-[50px] h-[50px] ' />
                    <div className='w-full grid gap-[15px]'>
                        <h3 className='text-[#1B233D] text-xl'>Revisit Recordings</h3>
                        <p className='text-black/40 text-[16px]'>
                        Access and review your past content effortlessly. Your recordings, always at your fingertips.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full h-full'>
                <img src={preview} alt="" className='w-full object-contain' />
            </div>
        </div>
    </div>
  )
}

export default Features