"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import { getTaskById, updateTask } from "../utils/api";
import Header from "../components/Header";

export default function EditTask() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");
  const id = idParam ? Number(idParam) : null;

  const [task, setTask] = useState<{ title: string; color: string } | null>(
    null
  );

  useEffect(() => {
    if (!id) return;
    loadTask(id);
  }, [id]);

  const loadTask = async (taskId: number) => {
    try {
      const t = await getTaskById(taskId);
      setTask({ title: t.title, color: t.color });
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (updatedTask: {
    title: string;
    color: string;
  }) => {
    if (!id) return;
    await updateTask(id, updatedTask);
    router.push("/?success=Task Updated");
  };

  return (
    <div className="relative w-[1440px] h-[1024px] bg-[#1A1A1A]">
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-[#0D0D0D]" />
      <Header showCreateButton={false} />

      {task ? (
        <TaskForm
          onSubmit={handleUpdate}
          onBack={() => router.push("/")}
          initialTask={task}
          isEditing
        />
      ) : (
        <div
          className="text-white"
          style={{
            position: "absolute",
            top: "300px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Loading...
        </div>
      )}
    </div>
  );
}
