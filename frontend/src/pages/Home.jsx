import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../api";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Filter from "../components/Filter";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    status: "",
    category: "",
    search: "",
    sort: "",
  });

  // Fetch Tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);

      const { data } = await getTasks(filters);

      setTasks(data);
    } catch (error) {
      alert("Unable to fetch tasks.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [filters]);

  // Create / Update Task
  const handleSubmit = async (taskData) => {
    try {
      if (editingTask) {
        await updateTask(editingTask._id, taskData);
        alert("✅ Task Updated Successfully");
        setEditingTask(null);
      } else {
        await createTask(taskData);
        alert("✅ Task Added Successfully");
      }

      fetchTasks();
    } catch (error) {
      alert("❌ Something went wrong.");
      console.error(error);
    }
  };

  // Delete Task
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTask(id);

      alert("🗑️ Task Deleted Successfully");

      fetchTasks();
    } catch (error) {
      alert("❌ Something went wrong.");
      console.error(error);
    }
  };

  // Edit Task
  const handleEdit = (task) => {
    setEditingTask(task);
  };

  // Loading Spinner
  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
        <p className="mt-3">Loading Tasks...</p>
      </div>
    );
  }

  return (
    <div>
      <TaskForm
        onSubmit={handleSubmit}
        editingTask={editingTask}
      />

      <Filter
        filters={filters}
        setFilters={setFilters}
      />

      <TaskList
        tasks={tasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Home;