/** @jsxImportSource react */

import { useEffect } from 'react';
import { atom } from 'nanostores'
import { useStore } from '@nanostores/react'
import "./styles.css"

export const $counter = atom<number>(0);
export const $name = atom<string>("");

export const Subscriber = () => {
  const count = useStore($counter);
  const name = useStore($name);

  console.log("Subscriber rendering");

  useEffect(() => {
    console.log("Subscriber loaded");
  }, [])

  return <div className="bordered">
    <h2>Subscriber</h2>
    <h3>count = {count}</h3>
    <h3>name= {name}</h3>
  </div>
}

export const Publisher = () => {
  const count = useStore($counter);
  const name = useStore($name);

  console.log("Publisher rendering");

  useEffect(() => {
    console.log("Publisher loaded");
  }, [])

  return <div>
    <h1>Shared state between React components using nanostores</h1>
    <div className="bordered">
      <h2>Publisher</h2>
      <div>name: <input onChange={(e) => $name.set(e.target.value)} type="text" /></div>
      {name}
      <div>
        <h2>count: {count}</h2>
        <button onClick={() => $counter.set(count + 1)}>Increment</button>
        <button onClick={() => $counter.set(count - 1)}>Decrement</button>
      </div>
    </div>
  </div>
};