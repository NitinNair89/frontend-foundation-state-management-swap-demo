import { useCounterAdapter } from "@/stores/redux/counter.hook";

export function useCounter() {
	return useCounterAdapter();
}
