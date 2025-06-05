import React from "react";
import type { Task } from "../model.ts";
import SingleTask from "./SingleTask.tsx";
import { Droppable } from "@hello-pangea/dnd";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  completedTasks: Task[];
  setCompletedTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function TodoList({
  tasks,
  setTasks,
  completedTasks,
  setCompletedTasks,
}: Props) {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {tasks.map((task, index) => (
              <SingleTask
                index={index}
                key={task.id}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Tasks</span>
            {completedTasks.map((task, index) => (
              <SingleTask
                index={index}
                key={task.id}
                task={task}
                tasks={completedTasks}
                setTasks={setCompletedTasks}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
