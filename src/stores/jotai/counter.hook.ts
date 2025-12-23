import { useAtomValue, useSetAtom } from "jotai";
import { decrementAtom, incrementAtom } from "./counter.actions";
import { counterAtom } from "./counter.atoms";

export function useCounterAdapter() {
	const count = useAtomValue(counterAtom);
	const increment = useSetAtom(incrementAtom);
	const decrement = useSetAtom(decrementAtom);

	return {
		count,
		increment,
		decrement,
	};
}
