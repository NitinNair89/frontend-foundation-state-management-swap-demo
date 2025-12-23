"use client";

import { useCounter } from "@/hooks/useCounter";

export default function Page() {
	const { count, increment, decrement } = useCounter();

	return (
		<div className="page-container flex items-center justify-center">
			<div className="flex flex-col gap-4 rounded-md border p-6">
				<div className="text-3xl font-bold text-center">Counter: {count}</div>

				<div className="btn-group">
					<button onClick={decrement} className="btn">
						-
					</button>

					<button onClick={increment} className="btn">
						+
					</button>
				</div>
			</div>
		</div>
	);
}
