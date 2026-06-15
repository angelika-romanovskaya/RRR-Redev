import { useContext } from "react";
import { LanguageContext } from "./language-contet";
import { ThemeContext } from "./theme-context";
import { translations } from "./translation";

export const UserProfile = () => {
	const { language } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const styles =
		theme === "light"
			? {
					backgroundColor: "#f5f5f5",
					color: "#000000",
				}
			: {
					backgroundColor: "#333333",
					color: "#ffffff",
				};

	return (
		<section
			style={{
				...styles,
				padding: "20px",
				borderRadius: "8px",
				marginTop: "20px",
			}}
		>
			<h2>{translations[language].profile}</h2>
		</section>
	);
};
