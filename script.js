// Wait for the page to finish loading
window.addEventListener('load', () => {
    // Function to speak the essay content
    function speakEssay() {
        // Get the essay content
        const essayContent = document.getElementById('essay-content').innerText;

        // Create a new speech synthesis object
        const speech = new SpeechSynthesisUtterance();
        // Set the text to be spoken (essay content)
        speech.text = essayContent;
        // Speak the text
        window.speechSynthesis.speak(speech);
    }

    // Call the function to speak the essay content
    speakEssay();
});
