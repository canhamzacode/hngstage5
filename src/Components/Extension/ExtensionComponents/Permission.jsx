import React, { useState } from 'react'
import {BsCameraVideo} from "react-icons/bs"
import {AiFillAudio} from "react-icons/ai"
import ToggleSwitch from './ToggleSwitch'

const Permission = ({setAudio,setCamera,audio,camera}) => {
    
    return (
        <div className='w-full grid gap-[15px]'>
            <div className='w-full p-[15px] flex justify-between items-center rounded-lg ' style={{border:"1px solid #000"}}>
                <div className='flex gap-[10px] items-center'>
                    <div>
                        <BsCameraVideo size={40}/>
                    </div>
                    <div>Camera</div>
                </div>
                <div onClick={()=>setCamera(!camera)}>
                    <ToggleSwitch selected={camera}  />
                </div>
            </div>
            <div className='w-full p-[15px] rounded-lg flex justify-between items-center' style={{border:"1px solid #000"}}>
                <div className='flex gap-[10px] items-center'>
                    <div>
                        <AiFillAudio size={40}/>
                    </div>
                    <div>Audio</div>
                </div>
                <div>
                    <div onClick={()=>setAudio(!audio)}>
                        <ToggleSwitch selected={audio}  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Permission