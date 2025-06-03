import React, { useState } from "react";
import "./index.css";
import InputFields from "./components/InputFields";
import type { Task } from "./model.ts";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, { id: Date.now(), task: task, isDone: false }]);
      setTask("");
    }
  };

  return (
    <div className="App">
      <span className="heading">To Do List</span>
      <InputFields task={task} setTask={setTask} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
