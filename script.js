let currentMessageIndex = 0;

const messages = [
  "You are my sunshine!",
  "You make my heart skip a beat!",
  "I love you more than words can express!",
  "You are the best thing that ever happened to me!",
  "Every moment with you is precious!"
];

function displayMessage() {
  const messageContainer = document.getElementById("messageContainer");
  messageContainer.textContent = messages[currentMessageIndex];
  
  currentMessageIndex = (currentMessageIndex + 1) % messages.length;
}
