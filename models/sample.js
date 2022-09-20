///////////////////////////////////////////////////////////////////////////////////////////////////////

// THIS FILE FOR
// specify collection & document structure inside it

// THIS FILE DOSE
// create schema (document structure of a new collection)
// create model (interaction methods with collection) with the schema & export it

///////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////

// create schema //

// frameworks
const mongoose = require("mongoose");

//variables
const { Schema } = mongoose;

// Schemas
const itemSchema = new Schema({
  number: Number,
  string: String,
}); // one liner syntax

const sampleSchema = new Schema(
  {
    string: {
      type: String,
      required: true,
      minLength: 20, // number of minimum required character
    },
    number: {
      type: Number,
      required: true,
      min: 1000000000, // minimum value
    },
    boolean: {
      type: Boolean,
      required: true,
    },
    array: {
      type: [String],
      default: undefined, // initial value of default is an empty array
      required: true,
    },
    items: {
      type: [itemSchema], // customize structure for every item inside an array
      default: undefined,
      required: true,
    },
  },
  {
    timestamps: true, // track creation and modification time
  }
);

// create schema //

// create & export model //

// exports
module.exports = mongoose.model("sample", sampleSchema);

// create & export model //

///////////////////////////////////////////////////////////////////////////////////////////////////////
