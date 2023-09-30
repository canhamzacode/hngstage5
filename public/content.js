// import { useReactMediaRecorder } from "react-media-recorder";

// content.js
console.log("Content js")

// const { status, startRecording, stopRecording, mediaBlobUrl,  } =
// useReactMediaRecorder({ video: false, audio: audio, screen: camera });

// Create a container element
const container = document.createElement('div');
container.style.position = 'fixed';
container.style.bottom = '10px'; // Adjust the position as needed
container.style.left = '10px'; // Adjust the position as needed
container.style.backgroundColor = 'red';
container.style.color = 'white';
container.style.padding = '10px';
container.innerHTML = '<div className="flex items-center gap-[20px]"><div className="w-[40px] h-[40px] bg-white rounded-[50%]"></div><div>Start</div><div>Pause</div><div>Stop</div></div>';

// Append the container to the document's body
document.body.appendChild(container);


// content.js

// const gdmOptions = {
//     video: {
//       displaySurface: "window",
//     },
//     audio: {
//       echoCancellation: true,
//       noiseSuppression: true,
//       sampleRate: 44100,
//       suppressLocalAudioPlayback: true,
//     },
//     surfaceSwitching: "include",
//     selfBrowserSurface: "exclude",
//     systemAudio: "exclude",
// };

async function startCapture(displayMediaOptions) {
    let captureStream = null;

    try {
        captureStream = await navigator.mediaDevices.getUserMedia(displayMediaOptions);
    } catch (err) {
        console.error(`Error: ${err}`);
    }
    return captureStream;
}

// Listen for messages from the extension popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'startRecording') {
        console.log("Hello");
        startCapture();
    }
});
