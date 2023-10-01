import React, { useEffect, useState } from 'react';
import DasboardNav from '../../Components/NavBar/DasboardNav';
import { FiSearch } from "react-icons/fi";
import DashboardCard from '../../Components/Card/DashboardCard';
import Footer from '../../Components/Footer/Footer';

const Dashboard = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Load the videos from local storage when the component mounts
    const data = localStorage.getItem("videos");
    if (data) {
      setVideos(JSON.parse(data)); // Parse the stored data to get an array
    }
  }, []);

  return (
    <>
      <div className='w-full px-[20px] md:px-[40px] py-[20px] grid gap-[15px]'>
        <DasboardNav />
        <div className='w-full flex justify-between items-center mt-[30px]'>
          <div className='w-full'>
            <h2 className='text-3xl font-bold mb-2'>Hello, John Mark</h2>
            <p className='text-lg'>Here are your recorded videos</p>
          </div>
          <div className='w-full max-w-[400px] p-[10px] rounded-lg bg-slate-200 flex gap-[10px]'>
            <FiSearch size={25} />
            <input type="text" placeholder='Search...' className='w-full p-[5px] border-none outline-none bg-transparent' />
          </div>
        </div>
        <div className='w-full grid gap-[15px] mt-[35px]'>
          <div>
            <p>Recent files</p>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-[25px]'>
            {videos.map((video, index) => (
              <DashboardCard key={index} video={video} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard;