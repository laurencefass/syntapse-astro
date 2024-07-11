/** @jsxImportSource react */

import { useEffect, useState } from "react";
import { $counter1, $counter2 } from "../../store/nanostore";


export const ReactPublisher = () => {
  const [count, setCount] = useState($counter1.get());

  useEffect(() => {
    const unsubscribe = $counter1.subscribe((value) => {
      setCount(value);
    });
    return () => unsubscribe();
  });

  return (
    <>
      <h2>React publisher</h2>
      <button
        onClick={() => $counter1.set($counter1.get() + 1)}
      >
        <h2>click me: {count}</h2>
        {Math.random().toFixed(4)}
      </button>
    </>
  );
};


export const ReactSubscriber = () => {
  const [count, setCount] = useState($counter2.get());

  useEffect(() => {
    const unsubscribe = $counter2.subscribe((value) => {
      setCount(()=>value);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="bordered">
      <h2>React subscriber</h2>
      <h3>count = {count}</h3>
      {Math.random().toFixed(4)}
    </div>
  );
};