const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema(
  {

    title: {
      type: String,
      required: [true, "{PATH} is a required field"],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters long"],
    },

  },

  { timestamps: true }

);

const Entry = mongoose.model("Entry", EntrySchema);

module.exports = Entry;
