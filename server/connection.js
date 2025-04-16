// Importing Mongoose, a library to interact with MongoDB easily
const mongoose = require("mongoose");

// Defining an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the URL from the .env file
    await mongoose.connect(process.env.MONGO_URL);

    // If the connection is successful, log the database host name
    console.log(`Connected to Database ${mongoose.connection.host}`);
  } catch (error) {
    // If there's an error connecting to the database, log the error message
    console.log(`Internal server error: ${error}`);
  }
};

// Export the connectDB function so it can be used in other files (like index.js or server.js)
module.exports = connectDB;
