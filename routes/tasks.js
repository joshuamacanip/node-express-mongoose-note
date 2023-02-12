const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
} = require("../controller/tasks");

// App GET and POST Routers
router.route("/").get(getAllTasks).post(createTask);

// App DELETE and UPDATE Routers
router.route("/:id").delete(deleteTask).patch(updateTask);

// Export Router
module.exports = router;
