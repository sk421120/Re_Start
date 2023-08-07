import { useState } from "react";

export default function AddMemo({ onAddTitle }) {
  const [title, setTitle] = useState("");

  function resetInput() {
    setTitle("");
  }

  return (
    <>
      <input
        placeholder="Add title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          resetInput();
          onAddTitle(title);
        }}
      >
        Add
      </button>
    </>
  );
}
