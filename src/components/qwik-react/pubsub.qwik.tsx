/** @jsxImportSource @builder.io/qwik */

import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { $counter1, $counter2 } from "../../store/nanostore";

export const QwikPublisher = component$(() => {
  const store = useStore({ count: $counter2.get() });

  useVisibleTask$(() => {
    const unsubscribe = $counter2.subscribe((value) => {
      store.count = value;
    });
    return () => unsubscribe();
  });

  return (
    <>
      <h2>Qwik publisher</h2>
      <button
        onClick$={() => $counter2.set($counter2.get() + 1)}
      >
        <h2>click me: {store.count}</h2>
        {Math.random().toFixed(4)}
      </button>
    </>
  );
});


export const QwikSubscriber = component$(() => {
  const store = useStore({ count: $counter1.get() });

  useVisibleTask$(() => {
    const unsubscribe = $counter1.subscribe((value) => {
      store.count = value;
    });
    return () => unsubscribe();
  });

  return (
    <div class="bordered">
      <h2>Qwik subscriber</h2>
      <h2>count = {store.count}</h2>
      {Math.random().toFixed(4)}
    </div>
  );
});
