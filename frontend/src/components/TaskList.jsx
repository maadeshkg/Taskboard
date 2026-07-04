import TaskItem from "./TaskItem";

function TaskList({ tasks, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="alert alert-info text-center">
        No tasks found.
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h3 className="mb-3">Task List</h3>

      <div className="row">
        {tasks.map((task) => (
          <div className="col-md-6 mb-3" key={task._id}>
            <TaskItem
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;