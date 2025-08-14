import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	useEffect(() => {
		const root = document.documentElement;
		root.classList.toggle("dark", theme === "dark");
	}, [theme]);

	return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
