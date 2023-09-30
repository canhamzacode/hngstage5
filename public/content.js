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

let desktopMediaRequestId;

// Function to start capturing
function startCapture(displayMediaOptions) {
  desktopMediaRequestId = chrome.desktopCapture.chooseDesktopMedia(
    ['screen', 'window'],
    (streamId) => {
      if (streamId) {
        navigator.mediaDevices
          .getUserMedia({ audio: false, video: { mandatory: { chromeMediaSource: 'desktop', chromeMediaSourceId: streamId } } })
          .then((stream) => {
            // Use the stream for recording
            // Handle your recording logic here
            console.log('Screen capture started:', stream);
          })
          .catch((err) => {
            console.error('Error starting screen capture:', err);
          });
      } else {
        console.error('Error selecting desktop media');
      }
    }
  );
}

// Function to stop capturing
function stopCapture() {
  if (desktopMediaRequestId) {
    chrome.desktopCapture.cancelChooseDesktopMedia(desktopMediaRequestId);
    desktopMediaRequestId = null;
  }
}

// Listen for messages from the extension popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'startRecording') {
    console.log("Hello");
    startCapture();
  } else if (message.type === 'stopRecording') {
    console.log("Stop recording");
    stopCapture();
  }
});