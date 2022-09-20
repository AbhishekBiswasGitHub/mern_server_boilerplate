///////////////////////////////////////////////////////////////////////////////////////////////////////

// BEFORE STARTING
// need valid credentials in .env file

// TO START
// to start, execute "npm start" in terminal
// to develop, execute "npm run dev" in terminal
// to stop, press "ctrl+c" in terminal

///////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////

// THIS FILE FOR
// entry point of this app

// THIS FILE DOSE
// setup server
// connect to DataBase(DB)
// start listening for incoming requests

///////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////

// server setup //

// security
require("dotenv").config(); // used for hiding credentials
// frameworks
const express = require("express"); // web app framework (server)
const mongoose = require("mongoose"); // Object Document Mapping (ODM)

// imports
const sampleRoutes = require("./routes/sample"); // route handlers for "/api/sample" path

// variables
const app = express(); // express app initialization

// middlewares
app.use(express.json()); // convert "req.body" JSON to Object

app.use((req, res, next) => {
  console.log(req.hostname, req.method, req.path);
  next(); // IMPORTANT -> continue handling process
}); // log each request

// routes
app.use("/api/sample", sampleRoutes); // used "router" for better maintainability

// server setup //

// connect to DB // + // start listening for incoming requests //

mongoose
  .connect(process.env.MONGO_URI) // [async] connect to DB
  // if sucessful
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`listening on port:${process.env.PORT}`);
    }) // start server
  )
  // if fails
  .catch((error) => {
    console.log(error);
  }); // to know the issue

// connect to DB // + // start listening for incoming requests //

///////////////////////////////////////////////////////////////////////////////////////////////////////
