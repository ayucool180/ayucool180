// Wait for the page to finish loading
window.addEventListener('load', () => {
    // Function to speak the essay content
    function speakEssay() {
        // Create a new speech synthesis object
        const speech = new SpeechSynthesisUtterance();
        // Set the text to be spoken (essay content)
        speech.text = "The Unsung Heroes: A Tribute to Fathers. In the grand symphony of life, fathers play a melody that often goes unnoticed amidst the cacophony of daily existence. They are the unsung heroes, the silent pillars of strength, and the steadfast guides who shape our journey through the labyrinth of existence. The Role of Fathers. Fathers are more than just providers; they are nurturers, mentors, and protectors...";
        // Speak the text
        window.speechSynthesis.speak(speech);
    }

    // Call the function to speak the essay content
    speakEssay();
});
