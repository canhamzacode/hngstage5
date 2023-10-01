let recordingMediaStream = null;
let mediaRecorder = null;
let recordedChunks = [];

function startRecording() {
  const options = {
    audio: true,
    video: {
      mandatory: {
        chromeMediaSource: "desktop",
        maxWidth: 1920,
        maxHeight: 1080,
      },
    },
  };

  chrome.desktopCapture.chooseDesktopMedia(
    ["screen", "window"],
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      chrome.desktopCapture.capture(options, (stream) => {
        recordingMediaStream = stream;
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            recordedChunks.push(event.data);
          }
        };
        mediaRecorder.onstop = () => {
          const blob = new Blob(recordedChunks, { type: "video/webm" });
          const url = URL.createObjectURL(blob);
          chrome.storage.local.set({ videoUrl: url });
        };
        mediaRecorder.start();
      });
    })
  );
}

function pauseRecording() {
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.pause();
  }
}

function resumeRecording() {
  if (mediaRecorder && mediaRecorder.state === "paused") {
    mediaRecorder.resume();
  }
}

function stopRecording() {
  if (mediaRecorder) {
    mediaRecorder.stop();
    recordingMediaStream.getTracks().forEach((track) => track.stop());
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "startRecording") {
    startRecording();
  } else if (message.type === "pauseRecording") {
    pauseRecording();
  } else if (message.type === "resumeRecording") {
    resumeRecording();
  } else if (message.type === "stopRecording") {
    stopRecording();
  }
});
