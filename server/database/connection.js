
//Connection file to mongo db
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://0.0.0.0:27017/task1Db");
    console.log(`MongoDB Connected..........!`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;


