"use client"

import TaskManager from './components/TaskManager';
import LoginButton from './components/LoginButton';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { status } = useSession();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black">
      <header className="bg-black/30 backdrop-blur-md p-4 sticky top-0 z-10 shadow-lg">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center sm:text-left">
            TaskP
          </h1>

          <LoginButton />
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-6">
        {status === 'authenticated' ? (
          <TaskManager />
        ) : (
          <p className="text-center text-white">
            Veuillez vous connecter pour gérer vos tâches
          </p>
        )}
      </main>
    </div>
  );
}
