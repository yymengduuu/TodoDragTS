import React from "react";
import type { Task } from "../model.ts";
import SingleTask from "./SingleTask.tsx";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function TodoList({ tasks, setTasks }: Props) {
  return (
    <div className="todos">
      {tasks.map((task) => (
        <SingleTask
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
}
