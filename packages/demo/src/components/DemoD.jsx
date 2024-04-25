// 多个 Signal + 1个 Computed + 1个 Effect
import { signal, computed, effect } from "@preact/signals";

const name = signal("Jane");
const surname = signal("Doe");
const job = signal("worker");

const fullname = computed(() => `${name.value} ${surname.value}`)

effect(() => console.log(`${fullname.value} is a ${job.value}`));

console.log(name);
console.log(surname);
console.log(job);
console.log(fullname);

export default function DemoD() {
  return <></>
}