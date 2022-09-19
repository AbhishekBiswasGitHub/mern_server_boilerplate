// need valid credentials in .env file

// to start, execute "npm start" in terminal
// to develop, execute "npm run dev" in terminal
// to stop, press "ctrl+c" in terminal

// security
require("dotenv").config(); // attach .env file's credentials to node's processes as process.env._____

// frameworks
const express = require("express"); // web app framework (serving)
const mongoose = require("mongoose"); // Object Document Mapping (ODM)

// imports
const sampleRoutes = require("./routes/sample");

// variables
const app = express(); // express app initialization

// middleware
app.use(express.json()); // convert JSON to Object in "req" argument

app.use((req, res, next) => {
  console.log(req.hostname, req.method, req.path);
  next(); // IMPORTANT -> continue handling process
}); // log each request

// routes
app.use("/api/sample", sampleRoutes);

// connect to DataBase (DB) & starting to listening for requests
mongoose
  .connect(process.env.MONGO_URI) // connect to DB
  // when sucessful
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`listening on port:${process.env.PORT}`);
    })
  )
  // when fails
  .catch((error) => {
    console.log(error);
  });
