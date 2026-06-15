import { useCallback, useMemo, useEffect, useState } from "react";
import { ToggleTheme } from "./ToggleTheme";
import { ThemeProvider } from "./theme-context";
import { ThemeBox } from "./ThemeBox";

export default function App() {
	return (
		<ThemeProvider>
			<ToggleTheme />
			<ThemeBox />
		</ThemeProvider>
	);
}
