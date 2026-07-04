import { useEffect, useState } from "react";

function TaskForm({ onSubmit, editingTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    category: "Work",
    status: "todo",
    dueDate: "",
  });

  useEffect(() => {
    if (editingTask) {
      setTask({
        title: editingTask.title,
        description: editingTask.description || "",
        category: editingTask.category,
        status: editingTask.status,
        dueDate: editingTask.dueDate
          ? editingTask.dueDate.substring(0, 10)
          : "",
      });
    } else {
      setTask({
        title: "",
        description: "",
        category: "Work",
        status: "todo",
        dueDate: "",
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !task.title ||
      !task.category ||
      !task.status ||
      !task.dueDate
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSubmit(task);

    if (!editingTask) {
      setTask({
        title: "",
        description: "",
        category: "Work",
        status: "todo",
        dueDate: "",
      });
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h4 className="mb-3">
          {editingTask ? "Edit Task" : "Add Task"}
        </h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title *</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Enter task title"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              name="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Enter description"
            ></textarea>
          </div>

          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                name="category"
                value={task.category}
                onChange={handleChange}
              >
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Status</label>
              <select
                className="form-select"
                name="status"
                value={task.status}
                onChange={handleChange}
              >
                <option value="todo">Todo</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label">Due Date</label>
              <input
                type="date"
                className="form-control"
                name="dueDate"
                value={task.dueDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            {editingTask ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;