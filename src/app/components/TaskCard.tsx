import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Task = {
  id: number;
  title: string;
  color: string;
  completed: boolean;
};

type TaskCardProps = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  const [isChecked, setIsChecked] = useState(task.completed);
  const router = useRouter();

  const toggleTask = () => {
    setIsChecked(!isChecked);
    onToggle(task.id);
  };

  const textStyle = isChecked
    ? { color: "#808080", textDecoration: "line-through" }
    : { color: task.color };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      onDelete(task.id);
    }
  };

  return (
    <div
      className="flex flex-row items-start p-4 gap-3 w-[736px] h-[72px] bg-[#262626] border border-[#333333] shadow-sm rounded-lg cursor-pointer"
      onClick={() => router.push(`/edit?id=${task.id}`)}
    >
      <div
        className="flex-none w-6 h-6 relative"
        onClick={(e) => {
          e.stopPropagation();
          toggleTask();
        }}
      >
        {!isChecked ? (
          <Image src="/assets/Vector1.png" alt="Unchecked" fill />
        ) : (
          <div className="w-6 h-6 rounded-full bg-[#5E60CE] flex items-center justify-center">
            <Image
              src="/assets/Vector2.png"
              alt="Checked"
              width={12}
              height={12}
            />
          </div>
        )}
      </div>
      <div
        className="flex-grow h-[40px] text-[14px] leading-[140%]"
        style={textStyle}
      >
        {task.title}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDelete();
        }}
        className="w-6 h-6 rounded-[4px] flex-none hover:opacity-80"
      >
        <Image src="/assets/trash.png" alt="Delete" width={24} height={24} />
      </button>
    </div>
  );
}
