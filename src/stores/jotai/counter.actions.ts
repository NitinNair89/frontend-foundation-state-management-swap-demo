import { atom } from "jotai";
import { counterAtom } from "./counter.atoms";

export const incrementAtom = atom(null, (get, set) => {
	set(counterAtom, get(counterAtom) + 1);
});

export const decrementAtom = atom(null, (get, set) => {
	set(counterAtom, get(counterAtom) - 1);
});
