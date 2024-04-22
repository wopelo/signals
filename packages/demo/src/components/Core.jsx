import { signal, computed, effect } from "@preact/signals-core";
import { useEffect } from "preact/hooks";

export default function Core() {
	// useEffect(() => {
	// 	const name = signal("Jane");
	// 	const surname = signal("Doe");

	// 	const fullName = computed(() => `${name.value} ${surname.value}`);

	// 	console.log('name', name);
	// 	console.log('surname', surname);
	// 	console.log('fullName', fullName);

	// 	const dispose = effect(() => console.log(fullName.value));

	// 	return dispose;
	// }, []);

  useEffect(() => {
		const name = signal("Jane");
		const surname = signal("Doe");

		const dispose = effect(() => console.log(`${name.value} ${surname.value}`));

    	console.log('name', name);
	  	console.log('surname', surname);

		return dispose;
	}, []);

	return <></>;
}
