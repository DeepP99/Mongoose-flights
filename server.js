// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

dotenv.config(); // Load environment variables from .env file

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// Connect to the database
connectDB();

// Routes
const flightRoutes = require('./routes/flightRoutes');
const destinationRoutes = require('./routes/destinationRoutes');
const ticketRoutes = require('./routes/ticketRoutes'); // Import ticketRoutes module

// Use flight routes
app.use('/flights', flightRoutes);
// Use destination routes
app.use('/flights', destinationRoutes);
app.use('/tickets', ticketRoutes);


// Define route for root URL
app.get('/', (req, res) => {
  res.redirect('/flights');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});








