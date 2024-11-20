const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB(); // Connect to MongoDB Atlas

// Init Middleware
app.use(express.json({ extended: false })); // Parse JSON requests

// Define Routes
app.use('/api/users', require('./routes/api/users')); // User-related routes
app.use('/api/auth', require('./routes/api/auth')); // Authentication routes
app.use('/api/profile', require('./routes/api/profile')); // Profile routes
app.use('/api/posts', require('./routes/api/posts')); // Post-related routes

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder for React
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
