const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, required: true },
  tag: { type: String, required: true, default:'Personal'},
  description: String,
},{timestamps:true});

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = {
  TodoModel,
};
