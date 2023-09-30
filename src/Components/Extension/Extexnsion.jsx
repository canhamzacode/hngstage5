import React, { useState } from 'react'
import NavBar from './ExtensionComponents/NavBar'
import "./style.css"
import Control from './ExtensionComponents/Control'
import Permission from './ExtensionComponents/Permission'
import { useReactMediaRecorder } from 'react-media-recorder'

const Extexnsion = () => {
    const [camera, setCamera] = useState(false);
    const [audio, setAudio] = useState(false);

    const { status, stopRecording, mediaBlobUrl,  } =
    useReactMediaRecorder({ video: false, audio: audio, screen: camera });

    const startRecording = () => {
      chrome.runtime.sendMessage({ type: 'startRecording' });
    };
    
      
  return (
    <div className='extension'>
        <NavBar/>
        {status}
        <p>
            This extension helps you record and share help videos with ease.
        </p>
        <Control />
        <Permission camera={camera} setCamera={setCamera} audio={audio} setAudio={setAudio} />
        <button  className='w-full p-[15px] rounded-lg flex justify-center items-center border text-center text-white font-extrabold text-lg bg-[#120B48] ' onClick={startRecording} type='startRecording' >
            Start Recording
        </button>
        <button onClick={stopRecording}>stop</button>
        <div>
        {mediaBlobUrl}
        </div>
    </div>
  )
}

export default Extexnsion