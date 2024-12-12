"use client";

import { useRouter } from "next/navigation";
import TaskForm from "../components/TaskForm";
import Header from "../components/Header";

export default function CreateTask() {
  const router = useRouter();

  const handleCreate = async (task: { title: string; color: string }) => {
    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...task, completed: false }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create task");
      }

      router.push("/?success=Task Created");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <div className="relative w-[1440px] h-[1024px] bg-[#1A1A1A]">
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-[#0D0D0D]" />

      {/* Header */}
      <Header showCreateButton={false} />

      <TaskForm onSubmit={handleCreate} onBack={() => router.push("/")} />
    </div>
  );
}
