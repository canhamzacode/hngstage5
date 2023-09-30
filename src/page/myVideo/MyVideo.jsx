import React from 'react'
import DasboardNav from '../../Components/NavBar/DasboardNav'
import DashboardCard from '../../Components/Card/DashboardCard'

const MyVideo = () => {
  return (
    <div className='w-full px-[20px] md:px-[40px] py-[20px] grid gap-[15px]'>
        <DasboardNav/>
        <DashboardCard/>
    </div>
  )
}

export default MyVideo