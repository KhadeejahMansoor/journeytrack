const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json({ extended: false })); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Connect Database
connectDB(); // Connect to MongoDB Atlas

// Define Routes
app.use('/api/patients', require('./routes/patients')); // Patient-related routes
app.use('/api/injections', require('./routes/injections')); // Injection-related routes

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder for React
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
