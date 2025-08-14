import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const ToggleButtonTheme = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return <button onClick={() => toggleTheme()}>{theme === "dark" ? "☀️ Light" : "🌙 Dark"}</button>;
};
