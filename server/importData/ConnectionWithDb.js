const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const products = require('../importData/Product.json'); // Ensure correct path
const Product = require('../src/Models/productModel');

// Load environment variables from .env file
dotenv.config();

// Use the MongoDB URI
const dbURI = process.env.DB_URI;

// Connect to the MongoDB database
const connectDb = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("MongoDB is connected successfully");

  } catch (error) {
    console.error("MongoDB connection failed:", error);
    
  }
};


// Append the data into the database
const appendDataToDatabase = async () => {
    try {
      const lengthOfTheProduct = await Product.countDocuments();
      if (lengthOfTheProduct === 0) {
        await Product.insertMany(products.products); // Accessing products array
        console.log("Products are successfully added.");
      }else{
        console.log("Products already exist in the database.");
      }
    } catch (error) {
        console.error("Error appending data to database:", error);
      }
};

module.exports = {
  connectDb,
  appendDataToDatabase,
};
