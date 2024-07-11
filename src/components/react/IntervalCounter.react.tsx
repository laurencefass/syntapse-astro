/** @jsxImportSource react */

import { useState, useEffect } from 'react';

export const IntervalCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>React counter: {count}</h1>
    </div>
  );
};