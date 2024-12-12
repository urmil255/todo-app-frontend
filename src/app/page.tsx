'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskCard from './components/TaskCard';
import EmptyState from './components/EmptyState';
import { getTasks, updateTask, deleteTask } from './utils/api';

type Task = {
  id: number;
  title: string;
  color: string;
  completed: boolean;
};

export default function TasksView() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const success = searchParams.get('success');
    if (success) {
      setSuccessMessage(success);
      setTimeout(() => setSuccessMessage(''), 3000);
    }
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="relative w-[1440px] h-[1024px] bg-[#1A1A1A]">
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-[#0D0D0D]" />
      <Header onCreate={() => router.push('/create')} />

      <div
        className="absolute flex flex-col gap-6"
        style={{
          width: "736px",
          left: "calc(50% - 736px/2)",
          top: "291px",
        }}
      >
        <div className="flex flex-row justify-between items-end w-[736px] h-[19px]">
          {/* Created Tasks Info */}
          <div className="flex flex-row items-center gap-2">
            <span className="text-[#4EA8DE] font-bold text-[14px] leading-[17px]">
              Tasks
            </span>
            <div className="flex justify-center items-center px-[8px] py-[2px] bg-[#333333] rounded-full">
              <span className="text-[#D9D9D9] font-bold text-[12px] leading-[15px]">
                {tasks.length}
              </span>
            </div>
          </div>

          {/* Completed Tasks Info */}
          <div className="flex flex-row items-center gap-2">
            <span className="text-[#8284FA] font-bold text-[14px] leading-[17px]">
              Completed
            </span>
            <div className="flex justify-center items-center px-[8px] py-[2px] bg-[#333333] rounded-full">
              <span className="text-[#D9D9D9] font-bold text-[12px] leading-[15px]">
                {completedTasks} of {tasks.length}
              </span>
            </div>
          </div>
        </div>

        {successMessage && (
          <div className="bg-green-500 text-white p-3 rounded-md">
            {successMessage}
          </div>
        )}

        {tasks.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="flex flex-col gap-3">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={async (id) => {
                  await updateTask(id, { ...task, completed: !task.completed });
                  loadTasks();
                }}
                onDelete={async (id) => {
                  await deleteTask(id);
                  loadTasks();
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
