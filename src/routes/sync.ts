import { Router } from "express";
import { queueSync, processSync, getSyncQueue } from "../services/syncService";

// The server.ts expects: createSyncRouter(db)
export function createSyncRouter(_db: any) {
  const router = Router();

  router.post("/", (req, res) => {
    queueSync(req.body);
    res.json({ message: "Task queued for sync" });
  });

  router.get("/", (req, res) => {
    const tasks = processSync();
    res.json(tasks);
  });

  router.get("/queue", (req, res) => {
    res.json(getSyncQueue());
  });

  return router;
}
