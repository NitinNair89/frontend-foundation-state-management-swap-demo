"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

export function AppHeader() {
	return (
		<header className="app-header">
			<h1 className="page-title">State Swap Demo (Redux)</h1>
			<ThemeToggle />
		</header>
	);
}
