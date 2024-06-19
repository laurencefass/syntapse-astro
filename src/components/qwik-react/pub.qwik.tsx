/** @jsxImportSource @builder.io/qwik */

import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { $counter } from "../../store";

export const QwikPublisher = component$(() => {
  const store = useStore({ count: $counter.get() });

  useVisibleTask$(() => {
    const unsubscribe = $counter.subscribe((value) => {
      store.count = value;
    });
    return () => unsubscribe();
  });

  return (
    <>
      <h2>Qwik store publisher</h2>
      <button
        style="padding: 0px 20px"
        onClick$={() => $counter.set($counter.get() + 1)}
      >
        <h2>click me: {store.count}</h2>
      </button>
    </>
  );
});
