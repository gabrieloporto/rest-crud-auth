import { createContext, ReactNode, useContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  getTasksRequest,
  updateTaskRequest,
} from "../api/tasks";
import { FieldValues } from "react-hook-form";

interface TaskProviderProps {
  children: ReactNode;
}

interface TaskContextType {
  tasks: FieldValues | [];
  createTask: (task: FieldValues) => Promise<void>;
  getTasks: () => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  updateTask: (id: string, task: FieldValues) => Promise<void>;
  getTask: (id: string) => Promise<FieldValues>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }

  return context;
};

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const res = await getTasksRequest();
    setTasks(res.data);
  };

  const deleteTask = async (id: string) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status === 204)
        setTasks(tasks.filter((task: FieldValues) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task: FieldValues) => {
    try {
      const res = await createTaskRequest(task);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id: string) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id: string, task: FieldValues) => {
    try {
      await updateTaskRequest(id, task);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
