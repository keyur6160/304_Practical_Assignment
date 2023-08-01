// server.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const CRICKET_API_KEY = 'cf65102a-0cef-44ee-abd9-001795c56d3c'; // Replace with your actual API key

const CRICKET_API_URL = `https://cricapi.com/api/matches?apikey=${CRICKET_API_KEY}`;

app.get('/', async (req, res) => {
  try {
    // Fetch live cricket scores from the API
    const response = await axios.get(CRICKET_API_URL);
    const data = response.data;

    // Prepare the response
    let score = 'No live matches available at the moment.';

    if (data && data.matches && data.matches.length > 0) {
      score = `Live Cricket Scores:\n\n`;s
      data.matches.forEach((match) => {
        score += `${match.date} - ${match.team-1} vs ${match.team-2}\nStatus: ${match.matchStarted ? match.matchScore : 'Not started'}\n\n`;
      });
    }

    res.send(score);
  } catch (error) {
    console.error('Error fetching cricket scores:', error.message);
    res.status(500).send('An error occurred while fetching cricket scores.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
