import TaskManager from './components/TaskManager';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Task Manager</h1>
      <TaskManager />
    </div>
  );
}
