import { signal, computed } from "@preact/signals";

const name = signal("Jane");
const surname = signal("Doe");
const fullName = computed(() => `${name.value} ${surname.value}`);

export default function DemoC() {
  console.log(name);
  console.log(surname);
  console.log(fullName);
  
  return (
    <div>
      <p>fullName: {fullName.value}</p>
    </div>
  );
}

/**
 * Signal(name)    <-> NodeA <-> Computed <-> NodeB <-> Effect
 *                      ^           ^
 *                      |           |
 *                      v           |
 * Siganl(surname) <-> NodeC ------->
 */
