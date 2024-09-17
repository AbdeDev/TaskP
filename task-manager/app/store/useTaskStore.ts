import { create } from 'zustand';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskStore {
  tasks: Task[];
  fetchTasks: () => Promise<void>;
  addTask: (title: string) => Promise<void>;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  
  fetchTasks: async () => {
    const response = await fetch('/api/tasks');
    if (response.ok) {
      const tasks = await response.json();
      set({ tasks });
    }
  },

  addTask: async (title: string) => {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });
    
    if (response.ok) {
      const task = await response.json();
      set((state) => ({
        tasks: [...state.tasks, task],
      }));
    }
  },

  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),

  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));
