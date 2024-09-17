"use client"
import TaskManager from './components/TaskManager';
import LoginButton from './components/LoginButton';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Task Manager By Abde</h1>
      <LoginButton />
      {session && <TaskManager />}
    </div>
  );
}
