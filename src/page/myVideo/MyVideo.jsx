import React from 'react'
import DasboardNav from '../../Components/NavBar/DasboardNav'
import DashboardCard from '../../Components/Card/DashboardCard'
import Footer from '../../Components/Footer/Footer'
import {BsPen} from "react-icons/bs"
import { Link, useParams } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'

const MyVideo = () => {
  const {id} = useParams()
  return (
    <>
      <NavBar/>
      <div className='w-full px-[20px] md:px-[40px] py-[20px] grid gap-[15px]'>
        <div className='w-full flex gap-[15px] items-center'>
          <Link to="/dashboard">
            <button className='bg-[#413C6D] p-[10px] text-[#fff]'>Videos</button>
          </Link>
          <span>/</span>
          <button className='bg-[#413C6D] p-[10px] text-[#fff]'>{id}</button>
        </div>
        <div className='grid w-full md:grid-cols-2 grid-cols-1 gap-[20px] pt-[30px] '>
          <div className='w-full flex flex-col gap-[30px]'>
            <h2 className='text-3xl font-bold mb-2'>Your Video is ready!</h2>
            <p className='text-base'>Name</p>
            <div className='w-full flex flex-col gap-[10px]'>
              <div className='w-full items-center flex gap-[15px]'>
                <p className='text-xl text-[#413C6D] '>Untitled_Video_20232509 </p>
                <BsPen size={20}/>
              </div>
              <div className='w-full bg-slate-100 flex'>
                <input type="text" className='w-full p-[10px]' placeholder='Enter Email of receiver' />
                <button className='bg-[#413C6D] p-[10px] text-[#fff] ' >Send</button>
              </div>
            </div>
            <div className='w-full flex flex-col gap-[10px]'>
              <div className='w-full items-center flex gap-[15px]'>
                <p className='text-xl text-[#413C6D] '>Video Url</p>
              </div>
              <div className='w-full bg-slate-100 flex'>
                <input type="text" className='w-full p-[10px]' readOnly value={"https://www.helpmeout/Untitled_Video_20232509"} placeholder='Enter Email of receiver' />
                <button className='bg-[#413C6D] p-[10px] text-[#fff]'>Copy</button>
              </div>
            </div>
            <div className='w-full flex flex-col gap-[10px]'>
              <div className='w-full items-center flex gap-[15px]'>
                <p className='text-xl text-[#413C6D] '>Share Your Video</p>
              </div>
              <div className='w-full bg-slate-100 flex gap-[15px]'>
                <button className='bg-[#413C6D] p-[10px] text-[#fff]'>Facebook</button>
                <button className='bg-[#413C6D] p-[10px] text-[#fff]'>Whatsapp</button>
                <button className='bg-[#413C6D] p-[10px] text-[#fff]'>Telegram</button>
              </div>
            </div>
          </div>
          <DashboardCard/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default MyVideo