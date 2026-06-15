import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const languages = ["en", "ru", "de", "es"];

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState("en");

	const toggleLanguage = () => {
		setLanguage((prev) => {
			const currentIndex = languages.indexOf(prev);
			return languages[(currentIndex + 1) % languages.length];
		});
	};

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
