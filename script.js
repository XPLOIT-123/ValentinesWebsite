function displayMessage() {
    const messages = [
      "Hello there!",
      "You clicked the screen!",
      "This is a message.",
      "Click again for more messages!"
    ];
  
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];
    
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.textContent = message;
  }
  