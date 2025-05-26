import { useState } from "react";

export default function MyButton({ handleClick }) {
  const [input, setInput] = useState("");

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          handleClick(input);
        }}
      >
        Cliccami
      </button>
    </>
  );
}
