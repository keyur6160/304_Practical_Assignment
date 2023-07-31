// websocket-server.js
const WebSocket = require('ws');
const newChatbot = require('my-new-chatbot-module');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
  console.log('New WebSocket connection established.');

  ws.on('message', (message) => {
    console.log('Received message:', message);

    try {
      const response = newChatbot.getWeatherResponse(message);
      console.log('Chatbot response:', response);
      ws.send(response);
    } catch (error) {
      console.error('Error processing message:', error.message);
      ws.send('An error occurred while processing the message.');
    }
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed.');
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error.message);
  });
});

console.log('WebSocket server is listening on port 3000.');
