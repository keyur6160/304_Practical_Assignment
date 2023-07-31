const http = require('http');
const fs = require('fs');

// Helper function to serve static resources
function serveStaticResource(res, path, contentType) {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Resource not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Handling GET requests
  if (method === 'GET') {
    if (url === '/') {
      // Serve index.html for the root URL
      serveStaticResource(res, 'index.html', 'text/html');
    } else if (url === '/about') {
      // Serve about.html for /about URL
      serveStaticResource(res, 'about.html', 'text/html');
    } else if (url === '/style.css') {
      // Serve style.css for /style.css URL
      serveStaticResource(res, 'style.css', 'text/css');
    } else {
      // Handle 404 for other URLs
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Resource not found');
    }
  }

  // Handling POST requests
  if (method === 'POST') {
    if (url === '/submit') {
      // Handle form submission
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      req.on('end', () => {
        // Parse the POST data
        const params = new URLSearchParams(body);
        const name = params.get('name');

        // Send the name as the response
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello, ${name}! This is the index page.`);
      });
    } else {
      // Handle 404 for other POST requests
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Resource not found');
    }
  }
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
