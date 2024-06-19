/** @jsxImportSource react */

import React, { useEffect, useState } from "react";
import { $counter } from "../../store";

export const ReactSubscriber = () => {
  const [count, setCount] = useState($counter.get());

  useEffect(() => {
    const unsubscribe = $counter.subscribe(setCount);
    return () => unsubscribe();
  }, []);

  return (
    <div className="bordered">
      <h2>React store subscriber</h2>
      <h3>count = {count}</h3>
    </div>
  );
};
