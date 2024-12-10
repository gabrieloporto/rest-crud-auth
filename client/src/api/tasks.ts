import { FieldValues } from "react-hook-form";
import axios from "./axios";

export const getTasksRequest = () => axios.get("/tasks");

export const getTaskRequest = (id: string) => axios.get(`/tasks/${id}`);

export const createTaskRequest = (task: FieldValues) =>
  axios.post("/tasks", task);

export const updateTaskRequest = (id: string, task: FieldValues) =>
  axios.put(`/tasks/${id}`, task);

export const deleteTaskRequest = (id: string) => axios.delete(`/tasks/${id}`);
