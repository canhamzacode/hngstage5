import React, { useState } from 'react'
import {MdLaptopWindows} from "react-icons/md"
import {GoCopy} from "react-icons/go"

const Control = () => {
    return (
        <div className='w-full flex justify-around'>
            <div className='flex flex-col items-center justify-center gap-[10px]'>
                <MdLaptopWindows size={55}/>
                <h3>Full Screen</h3>
            </div>
            <div className='flex flex-col items-center justify-center gap-[10px]'>
                <GoCopy size={55}/>
                <h3>Current Tab</h3>
            </div>
        </div>
    )
}

export default Control