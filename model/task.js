const mongoose = require("mongoose");

//Task Schema
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a name!"],
    trim: false,
    maxLength: [50, "Name must not exceed"],
  },
  status: {
    type: Boolean,
    default: false,
  },
});

//Task Model
module.exports = mongoose.model("Task", TaskSchema);
