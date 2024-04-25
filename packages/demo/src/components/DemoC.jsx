// 多个Signal + 多个 Effect
import { signal, effect } from "@preact/signals";

const name = signal("Jane");
const surname = signal("Doe");
const count = signal(0);

effect(() => console.log(`${name.value} ${surname.value}`)); // EffectA
effect(() => console.log(`${name.value} is No.${count.value}`)); // EffectB

console.log(name);
console.log(surname);
console.log(count);

export default function DemoC() {
  return <></>
}