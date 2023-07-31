// app.js
const newChatbot = require('my-new-chatbot-module');

function startChatbot() {
  console.log('Chatbot is ready. Type "exit" to quit.');
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function (input) {
    const message = input.trim();
    if (message === 'exit') {
      console.log('Goodbye!');
      process.exit();
    } else {
      const response = newChatbot.getWeatherResponse(message);
      console.log('Chatbot: ' + response);
    }
  });
}

startChatbot();
