import { useCallback, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import RegistrationForm from "./components/RegistrationForm";
import { Flex } from "antd";

function App() {
	return (
		<Flex justify="center" style={{ width: "100%", marginTop: 50 }}>
			<RegistrationForm />
		</Flex>
	);
}

export default App;
