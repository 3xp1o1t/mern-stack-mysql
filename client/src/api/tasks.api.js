import axios from "axios";

export const getTasksRequest = async () =>
  await axios.get("http://localhost:4000/api/tasks");

// Trae una tarea por ID.
export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/api/tasks/${id}`);

export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:4000/api/tasks", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:4000/api/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/api/tasks/${id}`, newFields);

export const toggleTaskDoneRequest = async (id, is_done) =>
  await axios.put(`http://localhost:4000/api/tasks/${id}`, {
    is_done,
  });
