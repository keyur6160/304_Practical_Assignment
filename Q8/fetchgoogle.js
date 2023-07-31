const fetch = require('node-fetch');

async function fetchGooglePage() {
  try {
    const response = await fetch('https://www.google.com');

    // Check if the response status is 200 (OK)
    if (!response.ok) {
      throw new Error(`Failed to fetch data from Google. Status: ${response.status} ${response.statusText}`);
    }

    const data = await response.text();
    console.log(data); // Print the HTML content of the Google homepage
  } catch (error) {
    console.error('Error fetching data from Google:', error.message);
  }
}

fetchGooglePage();