"use client";

import { useTaskStore } from '../store/useTaskStore';
import { useEffect, useState } from 'react';
import { Plus, Trash2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const TaskManager = () => {
  const { tasks, fetchTasks, addTask, toggleTask, removeTask } = useTaskStore();
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      addTask(newTask.trim());
      setNewTask('');
      triggerToast();
    }
  };

  const handleDeleteTask = async (id: number) => {
    const response = await fetch('/api/tasks', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      removeTask(id);
    } else {
      console.error('Erreur lors de la suppression de la tâche');
    }
  };

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (filter === 'completed') {
      return matchesSearch && task.completed;
    } else if (filter === 'uncompleted') {
      return matchesSearch && !task.completed;
    }
    return matchesSearch;
  });

  return (
    <div className="w-full max-w-2xl bg-gray-800/40 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-700 relative">
      <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Mes Tâches
      </h2>

      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-4 right-4 p-3 bg-green-500 text-white rounded-lg shadow-lg"
        >
          Tâche ajoutée avec succès !
        </motion.div>
      )}

      <form onSubmit={handleAddTask} className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nouvelle tâche"
          className="flex-grow p-3 bg-gray-700 text-white rounded-md placeholder-gray-400 border border-gray-600 focus:border-purple-500 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="p-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Ajouter
        </button>
      </form>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Rechercher une tâche"
        className="w-full mb-4 p-3 bg-gray-700 text-white rounded-md placeholder-gray-400 border border-gray-600 focus:border-purple-500 focus:ring-purple-500"
      />

      <div className="mb-4 flex justify-between items-center">
        <p className="text-white">Filtrer les tâches :</p>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded-md focus:outline-none"
        >
          <option value="all">Toutes les tâches</option>
          <option value="completed">Tâches complétées</option>
          <option value="uncompleted">Tâches non complétées</option>
        </select>
      </div>

      <ul className="space-y-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <motion.li
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between items-center p-4 bg-gray-700 rounded-md hover:bg-gray-600 transition-all"
            >
              <span
                className={`cursor-pointer flex items-center space-x-2 ${
                  task.completed ? 'line-through text-gray-400' : ''
                }`}
                onClick={() => toggleTask(task.id)}
              >
                {task.completed && <CheckCircle className="text-green-500" />}
                <span>{task.title}</span>
              </span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </motion.li>
          ))
        ) : (
          <p className="text-center text-gray-400 italic">Aucune tâche correspondante.</p>
        )}
      </ul>
    </div>
  );
};

export default TaskManager;