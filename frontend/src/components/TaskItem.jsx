function TaskItem({ task, onEdit, onDelete }) {
    return (
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
  
          <p className="card-text">
            <strong>Description:</strong>{" "}
            {task.description || "No Description"}
          </p>
  
          <p className="mb-2">
            <strong>Category:</strong>{" "}
            <span className="badge bg-primary">
              {task.category}
            </span>
          </p>
  
          <p className="mb-2">
            <strong>Status:</strong>{" "}
            <span
              className={`badge ${
                task.status === "done"
                  ? "bg-success"
                  : task.status === "in-progress"
                  ? "bg-warning text-dark"
                  : "bg-secondary"
              }`}
            >
              {task.status}
            </span>
          </p>
  
          <p className="mb-3">
            <strong>Due Date:</strong>{" "}
            {new Date(task.dueDate).toLocaleDateString()}
          </p>
  
          <div className="d-flex gap-2">
            <button
              className="btn btn-warning btn-sm"
              onClick={() => onEdit(task)}
            >
              Edit
            </button>
  
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(task._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TaskItem;