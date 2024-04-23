import { signal } from "@preact/signals";

const count = signal(0);

export default function DemoA() {
  console.log(count);

  return (
    <div>
      <p>Count: {count.value}</p>
      <button onClick={() => count.value++}>click me</button>
    </div>
  );
}

/**
 * Signal <-> Node <-> Effect
 */