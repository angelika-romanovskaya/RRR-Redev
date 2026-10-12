import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function ThemeSettings() {
	const [theme, setTheme] = useLocalStorage("app-theme", "light");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<div
			style={{
				padding: "10px",
				border: "1px solid #ccc",
				marginBottom: "15px",
			}}
		>
			<h3>Настройки темы</h3>
			<p>
				Текущая тема: <strong>{theme}</strong>
			</p>
			<button onClick={toggleTheme}>Переключить тему</button>
		</div>
	);
}
