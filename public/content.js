// content.js
console.log("Content js");

// Create a container element for controls
const container = document.createElement('div');
container.style.position = 'fixed';
container.style.bottom = '10px'; // Adjust the position as needed
container.style.left = '10px'; // Adjust the position as needed
container.style.backgroundColor = 'red';
container.style.color = 'white';
container.style.padding = '10px';
container.innerHTML = '<div className="flex items-center gap-[20px]"><div className="w-[40px] h-[40px] bg-white rounded-[50%]"></div><div id="start">Start</div><div id="pause">Pause</div><div id="stop">Stop</div></div>';

// Append the container to the document's body
document.body.appendChild(container);

// Define your screen capture options and logic here (if needed)
// For example:
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

let mediaRecorder;
let recordedChunks = [];

// Function to start capturing
async function startCapture(displayMediaOptions) {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);

    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      chrome.storage.local.set({ videoUrl: url });
      recordedChunks = [];
    };

    mediaRecorder.start();
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}

document.getElementById('start').addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: 'startRecording' });
});

document.getElementById('pause').addEventListener('click', () => {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.pause();
  }
});

document.getElementById('stop').addEventListener('click', () => {
  if (mediaRecorder && (mediaRecorder.state === 'recording' || mediaRecorder.state === 'paused')) {
    mediaRecorder.stop();
  }
});

// Listen for messages from the extension popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'startRecording') {
    console.log("Hello");
    startCapture();
  }
});