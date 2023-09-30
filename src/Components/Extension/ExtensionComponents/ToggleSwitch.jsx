import React, { useState } from 'react'

const ToggleSwitch = ({selected}) => {
  return (
    <div className={`transition flex w-20 h-10 bg-[#413C6D]  rounded-full ${selected ? "items-end flex justify-end" :""}`}>
        <span className={`h-10 w-10 bg-gray-200 rounded-full`}/>
    </div>
  )
}

export default ToggleSwitch