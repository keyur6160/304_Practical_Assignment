// test.js
const newChatbot = require('./new-chatbot');

const response1 = newChatbot.getWeatherResponse('What is the weather today?');
const response2 = newChatbot.getWeatherResponse('Tell me the temperature.');
console.log(response1);
console.log(response2);
