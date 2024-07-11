/** @jsxImportSource @builder.io/qwik */

import { component$, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
 
export const Counter = component$(() => {
  const counter = useSignal(0);
  console.log("counter rendering");

  useTask$(() => {
    console.log("counter.useTask$");    
  });

  useTask$(({ track }) => {
    track(() => counter.value);
    if (isServer) return;
    console.log("counter.useTask$", counter.value); 
  });

  useVisibleTask$(() => {
    console.log("counter.useVisibleTask$", counter.value);    
  });

return <>
      <h2>This is a qwik counter</h2>
      <button onClick$={() => counter.value++}><h2>click me: {counter.value}</h2></button>
      <h2>{counter.value}</h2>
  </>;
});
