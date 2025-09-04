import { Router } from "express";
import {
  createTask,
  getTaskById,
  getAllTasks,
  updateTask,
  deleteTask,
} from "../services/taskService";

// The server.ts expects a function: createTaskRouter(db)
export function createTaskRouter(_db: any) {
  const router = Router();

  router.post("/", (req, res) => {
    const task = createTask({
      title: req.body.title,
      description: req.body.description,
      completed: false,
    });
    res.status(201).json(task);
  });

  router.get("/", (req, res) => {
    res.json(getAllTasks());
  });

  router.get("/:id", (req, res) => {
    const task = getTaskById(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
  });

  router.put("/:id", (req, res) => {
    const updated = updateTask(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: "Task not found" });
    res.json(updated);
  });

  router.delete("/:id", (req, res) => {
    const success = deleteTask(req.params.id);
    if (!success) return res.status(404).json({ error: "Task not found" });
    res.json({ success: true });
  });

  return router;
}
