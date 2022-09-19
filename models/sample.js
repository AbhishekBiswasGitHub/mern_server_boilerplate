// frameworks
const mongoose = require("mongoose");

//variables
const { Schema } = mongoose;

// Schema (structure of every single document of this new collection)
const itemSchema = new Schema({
  number: Number,
  string: String,
});

const sampleSchema = new Schema(
  {
    string: {
      type: String,
      required: true,
      minLength: 20,
    },
    number: {
      type: Number,
      required: true,
      min: 1000000000,
    },
    boolean: {
      type: Boolean,
      required: true,
    },
    array: {
      type: [String],
      default: undefined,
      required: true,
    },
    items: {
      type: [itemSchema],
      default: undefined,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// exports
module.exports = mongoose.model("sample", sampleSchema);
