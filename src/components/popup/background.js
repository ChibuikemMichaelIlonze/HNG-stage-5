// background.js
let recording = false;
let mediaRecorder;
let recordedChunks = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.name === "startRecording") {
    if (!recording) {
      chrome.desktopCapture.chooseDesktopMedia(["screen", "tab"], (streamId) => {
        if (streamId) {
          const streamConstraints = {
            audio: true,
            video: {
              mandatory: {
                chromeMediaSource: "desktop",
                chromeMediaSourceId: streamId,
                maxWidth: window.screen.width,
                maxHeight: window.screen.height,
              },
            },
          };

          navigator.mediaDevices
            .getUserMedia(streamConstraints)
            .then((stream) => {
              mediaRecorder = new MediaRecorder(stream);

              mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                  recordedChunks.push(event.data);
                }
              };

              mediaRecorder.onstop = () => {
                const blob = new Blob(recordedChunks, { type: "video/webm" });
                const url = URL.createObjectURL(blob);

                // Do something with the recorded video URL (e.g., save or display it)
                console.log("Recording stopped. Video URL:", url);

                // Clean up
                recordedChunks = [];
              };

              mediaRecorder.start();
              console.log("Recording started.");
              recording = true;
            })
            .catch((error) => {
              console.error("Error accessing media devices:", error);
            });
        }
      });
    } else {
      // Stop recording
      if (mediaRecorder && mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        recording = false;
        console.log("Recording stopped.");
      }
    }
  }

  // Handle camera toggle
  if (message.name === "togglecamera") {
    // Handle camera toggle logic here
    const isCameraEnabled = message.isEnabled;
    // Update camera state as needed
  }

  // Handle audio toggle
  if (message.name === "toggleaudio") {
    // Handle audio toggle logic here
    const isAudioEnabled = message.isEnabled;
    // Update audio state as needed
  }
});
