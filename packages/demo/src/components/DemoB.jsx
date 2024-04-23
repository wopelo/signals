import { signal, computed } from "@preact/signals";

const count = signal(1);
const completed = computed(() => count.value * 10 );

export default function DemoB() {
  console.log(count);
  console.log(completed);
  
  return (
    <div>
      <p>Count: {completed.value}</p>
      <button onClick={() => count.value++}>click me</button>
    </div>
  );
}

/**
 * Signal <-> NodeA <-> Computed <-> NodeB <-> Effect
 */