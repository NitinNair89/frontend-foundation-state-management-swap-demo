import { dec, inc } from "@/stores/redux/counter.slice";
import { AppDispatch, RootState } from "@/stores/redux/counter.store";
import { useDispatch, useSelector } from "react-redux";

export function useCounterAdapter() {
	const dispatch = useDispatch<AppDispatch>();
	const count = useSelector((state: RootState) => state.count);

	return {
		count,
		increment: () => dispatch(inc()),
		decrement: () => dispatch(dec()),
	};
}
