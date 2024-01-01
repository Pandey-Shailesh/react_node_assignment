// this is a Schema of Items


const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
      },
      check: {
        type: Boolean,
      },
      list: {
        type: ObjectId,
        ref: "List",
        required: true
      }
    },
    { timestamps: true }
  );

  module.exports = mongoose.model("Item", itemSchema);