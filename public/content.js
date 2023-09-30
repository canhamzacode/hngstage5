console.log("Content js");

// Function to start capturing
function startCapture() {
  chrome.desktopCapture.chooseDesktopMedia(
    ['screen', 'window'],
    (streamId) => {
      if (streamId) {
        navigator.mediaDevices
          .getUserMedia({
            audio: false,
            video: {
              mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: streamId,
              },
            },
          })
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

// Listen for messages from the extension popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'startRecording') {
    console.log("Hello");
    startCapture();
  }
});