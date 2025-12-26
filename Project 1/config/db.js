const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase");
    console.log(`MongoDB connected: ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`MongoDB Server Issue: ${error.message}`.bgRed.white);
    process.exit(1);
  }
};

module.exports = connectDB;
