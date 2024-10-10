const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { productRouter } = require('./src/Routers/ProductRouter');
const { connectDb, appendDataToDatabase } = require('./importData/ConnectionWithDb');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

// Product routes
app.use('/randomProducts', productRouter);



//  connect to the database and start the server
const startServer = async () => {
  try {
    await connectDb();
    await appendDataToDatabase();
    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/randomProducts/Products`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1); 
  }
};

// Start the server
startServer();
