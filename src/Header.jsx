import { useContext } from "react";
import { LanguageContext } from "./language-contet";
import { ThemeContext } from "./theme-context";
import { translations } from "./translation";

export const Header = () => {
	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const styles =
		theme === "light"
			? {
					backgroundColor: "#ffffff",
					color: "#000000",
				}
			: {
					backgroundColor: "#222222",
					color: "#ffffff",
				};

	return (
		<header
			style={{
				...styles,
				padding: "20px",
				borderRadius: "8px",
			}}
		>
			<h1>{translations[language].welcome}</h1>
		</header>
	);
};
