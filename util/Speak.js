function speak(text) {
    // Check if the browser supports the SpeechSynthesis API
    if (!window.speechSynthesis) {
      return;
    }
  
    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(text);
  
    // Set the utterance's voice
    utterance.voice = window.speechSynthesis.getVoices()[0];
  
    // Speak the utterance
    window.speechSynthesis.speak(utterance);
  }