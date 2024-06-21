/** @jsxImportSource solid-js */
import { createSignal } from "solid-js";

export const Counter = () => {
  const [count, setCount] = createSignal(0);
  console.log("rendering solid counter");
  return (
    <div>
      <h1>Solid.js counter component</h1>
      <p>Count: {count()}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
};
