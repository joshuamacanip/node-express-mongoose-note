const Tasks = require("../model/task");

// GET Tasks data
const getAllTasks = async (req, res) => {
  const tasks = await Tasks.find({});

  res.status(200).json(tasks);
};

// POST Create new task
const createTask = async (req, res) => {
  const task = await Tasks.create(req.body);

  res.status(200).json(task);
};

// DELETE Task
const deleteTask = async (req, res) => {
  const { id } = req.params;

  const task = await Tasks.findByIdAndDelete(id);

  res.status(200).json(task);
};

// PATCH Task
const updateTask = async (req, res) => {
  const { id } = req.params;

  const task = await Tasks.findByIdAndUpdate(id, req.body, { new: true });

  res.status(200).json(task);
};

//Exports controller
module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
};
