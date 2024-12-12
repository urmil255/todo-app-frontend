import { useState } from "react";

type TaskFormProps = {
  onSubmit: (task: { title: string; color: string }) => void;
  onBack: () => void;
  initialTask?: { title: string; color: string };
  isEditing?: boolean;
};

export default function TaskForm({
  onSubmit,
  onBack,
  initialTask,
  isEditing,
}: TaskFormProps) {
  const [title, setTitle] = useState(initialTask?.title || "");
  const [color, setColor] = useState(initialTask?.color || "");

  const colors = [
    { hex: "#FF3B30", name: "Red" },
    { hex: "#FF9500", name: "Orange" },
    { hex: "#FFCC00", name: "Yellow" },
    { hex: "#34C759", name: "Green" },
    { hex: "#007AFF", name: "Blue" },
    { hex: "#5856D6", name: "Indigo" },
    { hex: "#AF52DE", name: "Purple" },
    { hex: "#FF2D55", name: "Pink" },
    { hex: "#A2845E", name: "Brown" },
  ];

  const handleSubmit = () => {
    if (!title || !color) {
      alert("Please fill all fields");
      return;
    }
    onSubmit({ title, color });
  };

  return (
    <div
      className="absolute flex flex-col gap-12"
      style={{
        width: "736px",
        left: "calc(50% - 736px/2)",
        top: "291px",
      }}
    >
      <button
        onClick={onBack}
        className="text-white text-[20px] hover:underline flex items-center gap-2"
      >
        <img src="assets/icon.png" alt="Back" className="w-6 h-6" />
      </button>

      <div className="flex flex-col gap-2">
        <span className="text-[#4EA8DE] font-bold text-sm">Title</span>
        <input
          type="text"
          placeholder="Ex. Brush your teeth"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-[736px] h-[52px] bg-[#262626] border border-[#333333] shadow-sm rounded-lg p-4 text-[#F2F2F2]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[#4EA8DE] font-bold text-sm">Color</span>
        <div className="flex flex-row gap-4">
          {colors.map((c) => (
            <button
              key={c.hex}
              onClick={() => setColor(c.hex)}
              className="w-[52px] h-[52px] rounded-full border-4"
              style={{
                backgroundColor: c.hex,
                borderColor: color === c.hex ? "#FFFFFF" : "transparent",
              }}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="flex flex-row justify-center items-center p-4 gap-2 w-[736px] h-[52px] bg-[#1E6F9F] rounded-lg font-bold text-[14px] text-[#F2F2F2]"
      >
        {isEditing ? "Save" : "Add Task"}
        {!isEditing && (
          <img src="assets/plus-icon.png" alt="Plus Icon" className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
