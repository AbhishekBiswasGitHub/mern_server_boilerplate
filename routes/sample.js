///////////////////////////////////////////////////////////////////////////////////////////////////////

// THIS FILE FOR
// all route handlers for a specified path

// THIS FILE DOSE
// create and export route handlers

///////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////

// create and export route handlers //

// frameworks
const express = require("express");

// imports
const {
  readCollection,
  readDocument,
  createDocument,
  deleteDocument,
  updateDocument,
} = require("../controllers/sample"); // controllers (DB operations)

// variables
const router = express.Router(); // will carry route handlers & will connect with app

// routes (to Create, Read, Update, Delete (CRUD))
router.get("/", readCollection); // ["/api/sample/"] Read collection

router.get("/:id", readDocument); // ["/api/sample/:id"] Read document

router.post("/", createDocument); // ["/api/sample/"] Create document

router.delete("/:id", deleteDocument); // ["/api/sample/:id"] Delete document

router.patch("/:id", updateDocument); // ["/api/sample/:id"] Update document

// exports
module.exports = router;

// create and export route handlers //

///////////////////////////////////////////////////////////////////////////////////////////////////////
