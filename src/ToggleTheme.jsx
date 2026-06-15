import { useContext } from "react";
import { ThemeContext } from "./theme-context";

export const ToggleTheme = () => {
	const { toggleTheme } = useContext(ThemeContext);

	return (
		<div>
			<label className="switch">
				<input type="checkbox" onChange={toggleTheme} />
				<span className="slider round"></span>
			</label>
		</div>
	);
};
