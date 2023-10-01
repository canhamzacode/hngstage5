import React from 'react'
import {AiOutlineLink} from "react-icons/ai"
import {BsThreeDotsVertical} from "react-icons/bs"

const DashboardCard = ({videoUrl}) => {
  return (
    <div className='w-full bg-slate-200 p-[10px] rounded-md '>
        <div className='w-full h-[300px] bg-red-600'>
          <video controls src={videoUrl} className='w-full h-full'></video>
        </div>
        <div className='w-full grid gap-[10px]'>
        <div className='flex items-center justify-between py-[10px]'>
            <p>How to create Facebook Ad listing</p>
            <div className='flex gap-[10px]'>
                <AiOutlineLink size={25}/>
                <BsThreeDotsVertical size={25}/>
            </div>
        </div>
        <div>
            <p>SEPTEMBER 23, 2023</p>
        </div>
        </div>
    </div>
  )
}

export default DashboardCard