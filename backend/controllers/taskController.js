const Task = require("../models/Task");
const getAllTasks = async (req, res) => {
  try {
    const { status, category, search, sort } = req.query;

    let filter = {};


    if (status) {
      filter.status = status;
    }


    if (category) {
      filter.category = category;
    }


    if (search) {
      filter.title = {
        $regex: search,
        $options: "i",
      };
    }

 
    let sortOption = { dueDate: 1 };

    if (sort === "status") {
      sortOption = { status: 1 };
    }

    const tasks = await Task.find(filter).sort(sortOption);

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const createTask = async (req, res) => {
  try {
    const { title, description, category, status, dueDate } = req.body;

    if (!title || !category || !status || !dueDate) {
      return res.status(400).json({
        message: "All required fields must be filled.",
      });
    }

    const task = await Task.create({
      title,
      description,
      category,
      status,
      dueDate,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};