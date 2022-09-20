///////////////////////////////////////////////////////////////////////////////////////////////////////

// THIS FILE FOR
// all controllers for a specified path

// THIS FILE DOSE
// create functions to interact with database and provide response and export them

///////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////

// create functions to interact with database and provide response and export them //

// frameworks
const mongoose = require("mongoose");

// imports
const sampleModel = require("../models/sample"); // interaction methods with "samples" collection

const readCollection = async (req, res) => {
  const collection = await sampleModel.find({}).sort({ createdAt: -1 }); // [async]
  res.status(200).json(collection);
}; // Read collection

const readDocument = async (req, res) => {
  const { id } = req.params; // extract value of id parameter from requested path

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "NOT FOUND" });
  } // check if id is a valid ObjectID

  const document = await sampleModel.findById(id); // [async]

  if (!document) {
    return res.status(404).json({ error: "NOT FOUND" });
  }

  res.status(200).json(document);
}; // Read document

const createDocument = async (req, res) => {
  const { string, number, boolean, array, items } = req.body; // extracting data from request body

  try {
    const document = await sampleModel.create({
      string,
      number,
      boolean,
      array,
      items,
    }); // [async]
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; // Create document

const deleteDocument = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "NOT FOUND" });
  }

  const document = await sampleModel.findByIdAndDelete(id); // [async]

  if (!document) {
    return res.status(404).json({ error: "NOT FOUND" });
  }

  res.status(200).json(document);
}; // Delete document

const updateDocument = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "NOT FOUND" });
  }

  const document = await sampleModel.findByIdAndUpdate(id, {
    ...req.body, // sprading req body for data to be updated
  }); // [async]

  if (!document) {
    return res.status(404).json({ error: "NOT FOUND" });
  }

  res.status(200).json(document);
}; // Update document

// exports
module.exports = {
  readCollection,
  readDocument,
  createDocument,
  deleteDocument,
  updateDocument,
};

// create functions to interact with database and provide response and export them //

///////////////////////////////////////////////////////////////////////////////////////////////////////
