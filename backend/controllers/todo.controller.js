const jwt = require("jsonwebtoken");
const { TodoModel } = require("../models/todo.model");
const { authentiation } = require("../middlewares/authentication.middleware");
const { authorisation } = require("../middlewares/authorization.middleware");

const getTodo = async (req, res) => {
  let todos = await TodoModel.find();
  res.send(todos);
};
const createTodo = async (req, res) => {
  let newtodo = req.body;

  let todos = await TodoModel.insertMany([newtodo]);
  res.send({ ...todos });
};
const updateTodo = async (req, res) => {
  let { id } = req.params;
  let updatedTodo = req.body;

  let todos = await TodoModel.updateOne({ _id: id }, { ...updatedTodo });
  console.log("updated-Todo-id:" + id);

  res.send(todos);
};
const deleteTodo = async (req, res) => {
  let { id } = req.params;

  let todos = await TodoModel.deleteOne({ _id: id });
  console.log("deleted-todo-id:" + id);
  res.send(todos);
};

const TodoController = {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};

module.exports = {
  TodoController,
};
