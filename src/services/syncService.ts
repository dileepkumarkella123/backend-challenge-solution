import { createTask, updateTask, getAllTasks } from "./taskService";

interface SyncTask {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  updatedAt: number;
}

let syncQueue: SyncTask[] = [];

export const queueSync = (task: SyncTask) => {
  syncQueue.push(task);
};

export const processSync = (): SyncTask[] => {
  const allServerTasks = getAllTasks();

  for (const queued of syncQueue) {
    const existing = allServerTasks.find((t) => t.id === queued.id);

    if (!existing) {
      createTask({
        title: queued.title,
        description: queued.description,
        completed: queued.completed,
      });
    } else {
      if (queued.updatedAt > existing.updatedAt) {
        updateTask(existing.id, queued);
      }
    }
  }

  syncQueue = [];
  return getAllTasks();
};

export const getSyncQueue = () => syncQueue;
