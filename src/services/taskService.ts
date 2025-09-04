interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  updatedAt: number;
}

const tasks: Map<string, Task> = new Map();

export const createTask = (task: Omit<Task, "id" | "updatedAt">): Task => {
  const id = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const newTask: Task = { ...task, id, updatedAt: Date.now() };
  tasks.set(id, newTask);
  return newTask;
};

export const getTaskById = (id: string): Task | null => {
  return tasks.get(id) || null;
};

export const getAllTasks = (): Task[] => {
  return Array.from(tasks.values());
};

export const updateTask = (
  id: string,
  updates: Partial<Omit<Task, "id">>
): Task | null => {
  const existing = tasks.get(id);
  if (!existing) return null;

  const updated: Task = { ...existing, ...updates, updatedAt: Date.now() };
  tasks.set(id, updated);
  return updated;
};

export const deleteTask = (id: string): boolean => {
  return tasks.delete(id);
};
