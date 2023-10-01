// document.addEventListener("DOMContentLoaded", () => {
//     const startRecordingButton = document.getElementById("startRecording");
//     const pauseRecordingButton = document.getElementById("pauseRecording");
//     const resumeRecordingButton = document.getElementById("resumeRecording");
//     const stopRecordingButton = document.getElementById("stopRecording");
//     const recordedVideo = document.getElementById("recordedVideo");
  
//     startRecordingButton.addEventListener("click", () => {
//       chrome.runtime.sendMessage({ type: "startRecording" });
//     });
  
//     pauseRecordingButton.addEventListener("click", () => {
//       chrome.runtime.sendMessage({ type: "pauseRecording" });
//     });
  
//     resumeRecordingButton.addEventListener("click", () => {
//       chrome.runtime.sendMessage({ type: "resumeRecording" });
//     });
  
//     stopRecordingButton.addEventListener("click", () => {
//       chrome.runtime.sendMessage({ type: "stopRecording" });
//     });
  
//     chrome.storage.local.get(["videoUrl"], (result) => {
//       if (result.videoUrl) {
//         recordedVideo.src = result.videoUrl;
//       }
//     });
//   });  