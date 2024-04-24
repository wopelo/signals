import { signal, effect } from "@preact/signals";

const count = signal(0);

effect(() => console.log(count + 1));
effect(() => console.log(count + 2));
effect(() => console.log(count + 3));

console.log(count)

export default function DemoB() {
  return <></>
}