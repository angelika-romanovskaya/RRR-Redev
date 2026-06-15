import { useContext } from "react";
import { LanguageContext } from "./language-contet";
import { ThemeContext } from "./theme-context";

export const ControlsPanel = () => {
	const { toggleLanguage } = useContext(LanguageContext);
	const { toggleTheme } = useContext(ThemeContext);

	return (
		<div
			style={{
				display: "flex",
				gap: "12px",
				marginBottom: "20px",
			}}
		>
			<button onClick={toggleLanguage}>Сменить язык</button>

			<button onClick={toggleTheme}>Сменить тему</button>
		</div>
	);
};
