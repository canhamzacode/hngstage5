import React from 'react'
import howImg from "../../assets/Image/how.svg"

const How = () => {
  return (
    <div className='w-full px-[20px] md:p-[40px] py-[20px] grid gap-[30px] '>
        <div className='w-full text-center grid gap-[10px]'>
            <h3 className='text-[#141414] text-2xl'>How it works</h3>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-[20px]'>
            <div className='w-full grid gap-[15px] items-center justify-center'>
                <div className='h-[60px] w-[60px] bg-[#120B48] text-center rounded-full text-white flex items-center justify-center text-xl font-bold mx-auto'>
                    1
                </div>
                <div className='w-full flex items-center justify-center'>
                    <h3 className='text-[#141414] text-xl'>Record Screen</h3>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <p className='text-black/40 text-[16px] text-center'>
                    Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.
                    </p>
                </div>
                <div className='w-full h-[250px]'>
                    <img src={howImg} alt="" className='w-full h-full object-contain' />
                </div>
            </div>
            <div className='w-full grid gap-[15px] items-center justify-center'>
                <div className='h-[60px] w-[60px] bg-[#120B48] text-center rounded-full text-white flex items-center justify-center text-xl font-bold mx-auto'>
                    2
                </div>
                <div className='w-full flex items-center justify-center'>
                    <h3 className='text-[#141414] text-xl'>Share Your Recording</h3>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <p className='text-black/40 text-[16px] text-center'>
                    We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.
                    </p>
                </div>
                <div className='w-full h-[250px]'>
                    <img src={howImg} alt="" className='w-full h-full object-contain' />
                </div>
            </div>
            <div className='w-full grid gap-[15px] items-center justify-center'>
                <div className='h-[60px] w-[60px] bg-[#120B48] text-center rounded-full text-white flex items-center justify-center text-xl font-bold mx-auto'>
                    3
                </div>
                <div className='w-full flex items-center justify-center'>
                    <h3 className='text-[#141414] text-xl'>Learn Effortlessly</h3>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <p className='text-black/40 text-[16px] text-center'>
                    Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.
                    </p>
                </div>
                <div className='w-full h-[250px]'>
                    <img src={howImg} alt="" className='w-full h-full object-contain' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default How