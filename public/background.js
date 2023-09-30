// Background script to handle extension background processes
// You may add more logic here if needed

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'startRecording') {
        // Handle start recording logic here
        // Use chrome.desktopCapture or other suitable methods

        // For example, you can send a message back to the popup or use any logic
        // to indicate that recording has started
        sendResponse({ message: 'Recording started' });
    }
});
