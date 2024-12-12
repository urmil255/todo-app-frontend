const API_BASE_URL = "http://localhost:3001";

export const createTask = async (task: { title: string; color: string }) => {
  const response = await fetch(`${API_BASE_URL}/api/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error("Failed to create task");
  }

  return response.json();
};

export const getTasks = async () => {
  const response = await fetch(`${API_BASE_URL}/api/tasks`);
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return response.json();
};

export const getTaskById = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/api/tasks/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch the task");
  }
  return response.json();
};

export const updateTask = async (id: number, task: any) => {
  const response = await fetch(`${API_BASE_URL}/api/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error("Failed to update task");
  }
  return response.json();
};

export const deleteTask = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/api/tasks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete task");
  }
  return response.json();
};
