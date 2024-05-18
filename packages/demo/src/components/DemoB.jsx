// 1个Signal + 多个 Effect
import { signal, effect } from "@preact/signals";

const count = signal(0);

effect(() => console.log(count.value + 1));
effect(() => console.log(count.value + 2));
effect(() => console.log(count.value + 3));

console.log(count)

export default function DemoB() {
  return <></>
}