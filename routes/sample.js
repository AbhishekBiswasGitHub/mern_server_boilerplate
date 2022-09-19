// frameworks
const express = require("express");

// imports
const {
  readCollection,
  readDocument,
  createDocument,
  deleteDocument,
  updateDocument,
} = require("../controllers/sample");

// variables
const router = express.Router(); // router initialization ("router" isplaceholder for "app" in server.js)

// routes
//  Create, Read, Update, Delete (CRUD)

//  Read collection (method -> GET, path -> "/api/sample/")
router.get("/", readCollection);

//  Read single document (method -> GET, path -> "/api/sample/:id")
router.get("/:id", readDocument);

//  Create single document (method -> POST, path -> "/api/sample/")
router.post("/", createDocument);

//  Delete single document (method -> DELETE, path -> "/api/sample/:id")
router.delete("/:id", deleteDocument);

//  Update single document (method -> PATCH, path -> "/api/sample/:id")
router.patch("/:id", updateDocument);

// exports
module.exports = router;
