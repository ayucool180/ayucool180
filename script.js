// Wait for the page to finish loading
window.addEventListener('load', () => {
    // Function to speak the message
    function speakMessage() {
        // Create a new speech synthesis object
        const speech = new SpeechSynthesisUtterance();
        // Set the text to be spoken
        speech.text = "I love you, Dad";
        // Speak the text
        window.speechSynthesis.speak(speech);
    }

    // Call the function to speak the message
    speakMessage();
});
