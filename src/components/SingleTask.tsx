import React, { useState, useRef, useEffect } from "react";
import type { Task } from "../model.ts";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function SingleTask({ task, tasks, setTasks }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.task);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus(); // Focus the input when edit mode is enabled
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTasks(tasks.map((t) => (t.id === id ? { ...t, task: editTask } : t)));
    setEdit(false);
  };

  const handleDelete = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const handleDone = () => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return { ...t, isDone: !t.isDone };
        }
        return t;
      })
    );
  };

  return (
    <form
      className="todos-single"
      style={{ backgroundColor: task.color, color: "#fff" }}
      onSubmit={(e) => handleEdit(e, task.id)}
    >
      <div
        className="todos__single__inner"
        style={{ backgroundColor: task.color }}
      >
        {edit ? (
          <input
            className="todos__single--text"
            value={editTask}
            ref={inputRef}
            onChange={(e) => setEditTask(e.target.value)}
          />
        ) : task.isDone ? (
          <s className="todos-single-text">{task.task}</s>
        ) : (
          <span className="todos-single-text">{task.task}</span>
        )}

        <div>
          <span
            className="icon"
            onClick={() => {
              if (!edit && !task.isDone) {
                setEdit(!edit);
              }
            }}
          >
            {<AiFillEdit />}
          </span>
          <span className="icon" onClick={() => handleDelete()}>
            {<AiFillDelete />}
          </span>
          <span className="icon" onClick={() => handleDone()}>
            {<MdDone />}
          </span>
        </div>
      </div>
    </form>
  );
}
