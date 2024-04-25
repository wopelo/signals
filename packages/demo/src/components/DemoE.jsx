// 多个 Signal + 1个 Computed，但不使用 Computed
import { signal, computed } from "@preact/signals";

const name = signal("Jane");
const surname = signal("Doe");

const fullname = computed(() => `${name.value} ${surname.value}`);

console.log(name);
console.log(surname);
console.log(fullname);

export default function DemoE() {
  return <></>
}