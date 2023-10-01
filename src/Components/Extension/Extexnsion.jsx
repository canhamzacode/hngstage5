import React, { useState, useEffect } from 'react';
import NavBar from './ExtensionComponents/NavBar';
import Control from './ExtensionComponents/Control';
import Permission from './ExtensionComponents/Permission';
import "./style.css";
import { useReactMediaRecorder } from 'react-media-recorder';
import { useNavigate } from 'react-router-dom';

const Extension = () => {
    const navigate = useNavigate();
    const [camera, setCamera] = useState(false);
    const [audio, setAudio] = useState(false);
    const { status, startRecording, stopRecording, mediaBlobUrl } =
        useReactMediaRecorder({ video: camera, screen: true, audio: audio });
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        console.log(status);
        if (status === "stopped" && mediaBlobUrl) {
            setVideos((prevVideos) => {
                if (prevVideos === null) {
                    return [mediaBlobUrl];
                } else {
                    return [...prevVideos, mediaBlobUrl];
                }
            });
            navigate("/dashboard");
        }
    }, [status, mediaBlobUrl]);

    useEffect(() => {
        localStorage.setItem("videos", JSON.stringify(videos));
    }, [videos]);

    return (
        <div className='extension'>
            {status}
            <NavBar />
            <p>
                This extension helps you record and share help videos with ease.
            </p>
            <Control />
            <Permission camera={camera} setCamera={setCamera} audio={audio} setAudio={setAudio} />
            <button className='w-full p-[15px] rounded-lg flex justify-center items-center border text-center text-white font-extrabold text-lg bg-[#120B48]' onClick={startRecording} type='startRecording'>
                Start Recording
            </button>
            <button className='w-full p-[15px] rounded-lg flex justify-center items-center border text-center text-white font-extrabold text-lg bg-[#120B48]' onClick={stopRecording} type='startRecording'>
                Stop Recording
            </button>
           {videos &&(
             <div>
             {videos.map((videoUrl, index) => (
                 <div key={index}>
                     <video controls src={videoUrl} className='w-full '></video>
                 </div>
             ))}
         </div>
           )}
        </div>
    );
}

export default Extension;