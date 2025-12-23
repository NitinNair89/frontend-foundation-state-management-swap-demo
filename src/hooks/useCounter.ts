import { useCounterAdapter } from "@/stores/jotai/counter.hook";

export function useCounter() {
	return useCounterAdapter();
}
