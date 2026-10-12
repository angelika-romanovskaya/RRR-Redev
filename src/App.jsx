import React from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { ThemeSettings } from "./components/ThemeSettings";
import { SearchUsers } from "./components/SearchUsers";

export default function App() {
	const [theme] = useLocalStorage("app-theme", "light");

	const appStyles = {
		backgroundColor: theme === "dark" ? "#222" : "#fff",
		color: theme === "dark" ? "#fff" : "#000",
		minHeight: "100vh",
		padding: "20px",
		transition: "all 0.3s ease",
		fontFamily: "sans-serif",
	};

	return (
		<div style={appStyles}>
			<header
				style={{
					marginBottom: "20px",
					borderBottom: "1px solid #ccc",
					paddingBottom: "10px",
				}}
			>
				<h1>React Custom Hooks Demo</h1>
			</header>

			<main style={{ maxWidth: "600px", margin: "0 auto" }}>
				<ThemeSettings />

				<SearchUsers />
			</main>
		</div>
	);
}
