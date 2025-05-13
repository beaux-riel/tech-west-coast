const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 12000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}/`);
  console.log(`You can access the website at https://work-1-lblzxcnbbmbzhopt.prod-runtime.all-hands.dev`);
});