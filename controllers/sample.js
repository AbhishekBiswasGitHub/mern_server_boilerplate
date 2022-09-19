// frameworks
const mongoose = require("mongoose");

// imports
const sampleModel = require("../models/sample");

// Read collection
const readCollection = async (req, res) => {
  const collection = await sampleModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(collection);
};

// Read single document
const readDocument = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "NOT FOUND" });
  }

  const document = await sampleModel.findById(id);

  if (!document) {
    return res.status(404).json({ error: "NOT FOUND" });
  }

  res.status(200).json(document);
};

// Create single document
const createDocument = async (req, res) => {
  const { string, number, boolean, array, items } = req.body;

  try {
    const document = await sampleModel.create({
      string,
      number,
      boolean,
      array,
      items,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete single document
const deleteDocument = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "NOT FOUND" });
  }

  const document = await sampleModel.findByIdAndDelete(id);

  if (!document) {
    return res.status(404).json({ error: "NOT FOUND" });
  }

  res.status(200).json(document);
};

// Update single document
const updateDocument = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "NOT FOUND" });
  }

  const document = await sampleModel.findByIdAndUpdate(id, {
    ...req.body,
  });

  if (!document) {
    return res.status(404).json({ error: "NOT FOUND" });
  }

  res.status(200).json(document);
};

// exports
module.exports = {
  readCollection,
  readDocument,
  createDocument,
  deleteDocument,
  updateDocument,
};
