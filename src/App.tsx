import React, { useState } from "react";
import "./index.css";
import InputFields from "./components/InputFields";
import TodoList from "./components/TodoList";
import type { Task } from "./model.ts";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const colorPalette = [
    "#7c3aed",
    "#6d28d9",
    "#3b82f6",
    "#0ea5e9",
    "#9333ea",
    "#6366f1",
    "#8b5cf6",
    "#3f3f46",
  ];

  const getRandomColor = () => {
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([
        ...tasks,
        { id: Date.now(), task: task, isDone: false, color: getRandomColor() },
      ]);
      setTask("");
    }
  };

  return (
    <div className="App">
      <span className="heading">To Do List</span>
      <InputFields task={task} setTask={setTask} handleAdd={handleAdd} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
