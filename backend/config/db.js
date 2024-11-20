const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); // Get MongoDB URI from the configuration file

const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB
    await mongoose.connect(db, {
      useNewUrlParser: true, // Use the new MongoDB connection string parser
      useUnifiedTopology: true, // Opt into the MongoDB driver's unified topology layer
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    // Exit the process with a failure code
    process.exit(1);
  }
};

module.exports = connectDB; // Export the function for use in server.js
