import { useContext } from "react";
import { ThemeContext } from "./theme-context";

export const ThemeBox = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<div
			style={{
				width: "100px",
				height: "100px",
				backgroundColor: theme === "light" ? "white" : "black",
				border: "2px solid black",
			}}
		/>
	);
};
