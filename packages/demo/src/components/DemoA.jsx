// 多个 Signal + 1个 Effect
import { signal, effect } from "@preact/signals";

const name = signal("Jane");
const surname = signal("Doe");
const job = signal("worker");

effect(() => console.log(`${name.value} ${surname.value} is a ${job.value}`));

console.log(name);
console.log(surname);
console.log(job);

export default function DemoA() {
  return <></>
}