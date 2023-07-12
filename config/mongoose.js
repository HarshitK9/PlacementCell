// requiring the library
const mongoose = require("mongoose");

//connecting to the database
mongoose.connect(
  "mongodb+srv://Nitish:nitish33@cluster0.ksobj.mongodb.net/Ecommerce?retryWrites=true&w=majority"
);

// acquiring the connection to check if it is succesfull
const db = mongoose.connection;

// checking for the error
db.on("error", console.error.bind(console, "error in connecting the database"));

// up and running then print the statement
db.once("open", () => {
  console.log("succesfully connected to database");
});

// exporting the connection
module.exports = db;
