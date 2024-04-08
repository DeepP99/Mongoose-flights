// // config/database.js
// const mongoose = require('mongoose');

// mongoose.connect(process.env.DATABASE_URL)

// // shortcut to mongoose.connection object
// const db = mongoose.connection;
	
// db.on('connected', function() {
//   console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
// });

// module.exports = db;



// config/database.js
const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1); // Exit process with failure
  }
}

module.exports = connectDB;
