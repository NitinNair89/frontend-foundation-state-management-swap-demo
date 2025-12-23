import { AppHeader } from "@/components/AppHeader";
import { ThemeProvider } from "@/providers/theme-provider";
import { CounterProvider } from "@/stores/jotai/counter.provider";
import "@/styles/global.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta name="author" content="Nitin Chandran Nair" />
				<meta
					name="description"
					content="Demonstrate transport swapping (redux → jotai) with zero UI changes"
				/>
				<meta
					name="keywords"
					content="frontend, nextjs, tailwindcss, typescript, state, redux, redux-toolkit, jotai"
				/>
				<title>Frontend Foundation — State Swap Demo using Jotai</title>
			</head>
			<body className="min-h-screen bg-surface text-primary">
				<ThemeProvider>
					<AppHeader />
					<main>
						<CounterProvider>{children}</CounterProvider>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
