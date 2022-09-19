// frameworks
const express = require("express");

// variables
const router = express.Router(); // router initialization ("router" isplaceholder for "app" in server.js)

// routes
//  Create, Read, Update, Delete (CRUD)

//  Read collection (method -> GET, path -> "/api/sample/")
router.get("/", (req, res) => {
  res.json({ msg: "read collection" });
});

//  Read single document (method -> GET, path -> "/api/sample/:id")
router.get("/:id", (req, res) => {
  res.json({ msg: "read document" });
});

//  Create single document (method -> POST, path -> "/api/sample/")
router.post("/", (req, res) => {
  res.json({ msg: "create document" });
});

//  Delete single document (method -> DELETE, path -> "/api/sample/:id")
router.delete("/:id", (req, res) => {
  res.json({ msg: "delete document" });
});

//  Update single document (method -> PATCH, path -> "/api/sample/:id")
router.patch("/:id", (req, res) => {
  res.json({ msg: "update document" });
});

// exports
module.exports = router;
