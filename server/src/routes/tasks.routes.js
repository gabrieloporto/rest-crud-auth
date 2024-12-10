import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/task.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskScheme } from "../schemas/task.schema.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTask);
router.post(
  "/tasks",
  authRequired,
  validateSchema(createTaskScheme),
  createTask
);
router.put("/tasks/:id", authRequired, updateTask);
router.delete("/tasks/:id", authRequired, deleteTask);

export default router;
