const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add cors middleware

const app = express();
const PORT = 4000;

// Connect to MongoDB (replace <password> with your actual password)
mongoose.connect('mongodb+srv://abdullahkha7701:topfloor@cluster0.1lyynr7.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});


// Define MongoDB schema
const userSchema = new mongoose.Schema({
  clientName: String,
  email: String,
  phone: String,
  password: String,
  address: String,
  city: String,
  country: String,
  zip: String,
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// API endpoint for user sign-up
app.post('/signup', async (req, res) => {
  try {
    const {
      clientName,
      email,
      phone,
      password,
      address,
      city,
      country,
      zip,
    } = req.body;

    // Validate the request data here if needed

    // Create a new user document
    const newUser = new User({
      clientName,
      email,
      phone,
      password,
      address,
      city,
      country,
      zip,
    });

    // Save the user to the database
    await newUser.save();

    // Send a success response
    res.json({
      success: true,
      message: `Hello dear ${clientName}, Welcome you to Art Vista Admin panel.`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
