const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["Work", "Personal", "Urgent"],
    },

    status: {
      type: String,
      required: [true, "Status is required"],
      enum: ["todo", "in-progress", "done"],
      default: "todo",
    },

    dueDate: {
      type: Date,
      required: [true, "Due date is required"],
      validate: {
        validator: function (value) {
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          return value >= today;
        },
        message: "Due date cannot be in the past",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);