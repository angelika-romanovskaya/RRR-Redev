import { useCallback, useMemo, useEffect, useState } from "react";
import { LanguageProvider } from "./language-contet";
import { ThemeProvider } from "./theme-context";
import { ControlsPanel } from "./ControlsPanel";
import { Header } from "./Header";
import { UserProfile } from "./UserProfile";

export default function App() {
	return (
		<LanguageProvider>
			<ThemeProvider>
				<ControlsPanel />
				<Header />
				<UserProfile />
			</ThemeProvider>
		</LanguageProvider>
	);
}
