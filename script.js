let currentMessageIndex = 0;

const messages = [
  "Hello there!",
  "You clicked the screen!",
  "This is a message.",
  "Click again for more messages!"
];

function displayMessage() {
  const messageContainer = document.getElementById("messageContainer");
  messageContainer.textContent = messages[currentMessageIndex];
  
  currentMessageIndex = (currentMessageIndex + 1) % messages.length;
}
