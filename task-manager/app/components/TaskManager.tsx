"use client"

import { useTaskStore } from '../store/useTaskStore';
import { useEffect } from 'react';

const TaskManager = () => {
  const { tasks, fetchTasks, addTask, toggleTask, removeTask } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleAddTask = () => {
    const title = prompt('Enter task title');
    if (title) {
      addTask(title);
    }
  };

  return (
    <div className="p-4">
      <button onClick={handleAddTask} className="mb-4 p-2 bg-blue-500 text-white">
        Add Task
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center">
            <span
              className={`cursor-pointer ${task.completed ? 'line-through' : ''}`}
              onClick={() => toggleTask(task.id)}
            >
              {task.title}
            </span>
            <button onClick={() => removeTask(task.id)} className="ml-4 p-2 bg-red-500 text-white">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
