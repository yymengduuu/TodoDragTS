import React, { useRef } from "react";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export default function InputFields({ task, setTask, handleAdd }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur(); // Remove focus from input after adding task
      }}
    >
      <input
        ref={inputRef} // Use ref to manage focus
        type="text"
        placeholder="Add a task"
        className="inputbox"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="inputsubmit" type="submit">
        Add
      </button>
    </form>
  );
}
