/** @jsxImportSource @builder.io/qwik */

import { component$, useSignal } from "@builder.io/qwik";
 
export const Counter = component$(() => {
  const counter = useSignal(0);
  return <>
      <h2>This is a qwik counter!</h2>
      <button style="padding: 0px 20px" onClick$={() => counter.value++}><h2>click me: {counter.value}</h2></button>
  </>;
});