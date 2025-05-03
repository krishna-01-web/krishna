async function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatBox = document.getElementById("chatBox");
    
    // Display user message
    chatBox.innerHTML += `<div class="user-message">${userInput}</div>`;

    // Scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;

    // Fetch bot response from the server
    const response = await fetch('http://localhost:3000/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    });

    const botResponse = await response.text();

    // Display bot message
    chatBox.innerHTML += `<div class="bot-message">${botResponse}</div>`;
    
    // Clear input field
    document.getElementById("userInput").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
