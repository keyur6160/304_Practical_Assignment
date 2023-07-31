// new-chatbot.js
module.exports = {
    getWeatherResponse: function (message) {
      const weatherKeywords = ['weather', 'temperature', 'forecast'];
      const lowercaseMessage = message.toLowerCase();
  
      if (weatherKeywords.some(keyword => lowercaseMessage.includes(keyword))) {
        return 'The weather today is sunny and warm.';
      } else {
        return 'I cannot provide information on that topic.';
      }
    }
  };
  