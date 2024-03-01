// index.js
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Hello, Express!');
  });
  

// Define routes for registration, login, and seminar booking
app.post('/register', (req, res) => {
    // Verify token and handle registration logic
  });
  
app.post('/login', (req, res) => {
    // Verify token and handle login logic
  });
  
app.post('/book-seminar', (req, res) => {
    // Verify token and handle seminar booking logic
  });
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
