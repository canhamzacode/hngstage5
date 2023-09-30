import React, { useState } from 'react';
import NavBar from './ExtensionComponents/NavBar';
import Control from './ExtensionComponents/Control';
import Permission from './ExtensionComponents/Permission';
import "./style.css";

const Extension = () => {
    const [camera, setCamera] = useState(false);
    const [audio, setAudio] = useState(false);

    // Function to start recording and send a message to content script
    const startRecording = () => {
        chrome.runtime.sendMessage({ type: 'startRecording' });
    };

    return (
        <div className='extension'>
            <NavBar />
            <p>
                This extension helps you record and share help videos with ease.
            </p>
            <Control />
            <Permission camera={camera} setCamera={setCamera} audio={audio} setAudio={setAudio} />
            <button className='w-full p-[15px] rounded-lg flex justify-center items-center border text-center text-white font-extrabold text-lg bg-[#120B48]' onClick={startRecording} type='startRecording'>
                Start Recording
            </button>
        </div>
    );
}

export default Extension;