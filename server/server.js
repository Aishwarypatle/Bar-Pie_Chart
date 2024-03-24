const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const axios = require('axios');

// const initializeDatabaseRoute = require('./routes/initializeDatabaseRoute');
// const productRoutes = require('./routes/productRoutes');
// const transactionRoutes = require('./routes/transactionRoutes');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;
// Connect to MongoDB Atlas
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch(err => {
  console.error('Error connecting to MongoDB Atlas:', err);
  process.exit(1);
});

// Middleware
app.use(express.json());

// Routes
// app.use('/initialize_database', initializeDatabaseRoute);
// app.use('/api/products', productRoutes);
// app.use('/api/transactions', transactionRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



