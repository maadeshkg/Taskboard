import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
  headers: {
    "Content-Type": "application/json",
  },
});

// Get all tasks
export const getTasks = (params = {}) => API.get("/", { params });

// Get single task
export const getTask = (id) => API.get(`/${id}`);

// Create task
export const createTask = (task) => API.post("/", task);

// Update task
export const updateTask = (id, task) => API.put(`/${id}`, task);

// Delete task
export const deleteTask = (id) => API.delete(`/${id}`);
