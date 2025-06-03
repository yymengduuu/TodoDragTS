import React from "react";
import type { Task } from "../model.ts";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
export default function SingleTask({ task, tasks, setTasks }: Props) {
  return (
    <form className="todos-single">
      <span className="todos-single-text">{task.task}</span>
      <div>
        <span className="icon">{<AiFillEdit />}</span>
        <span className="icon">{<AiFillDelete />}</span>
        <span className="icon">{<MdDone />}</span>
      </div>
    </form>
  );
}
