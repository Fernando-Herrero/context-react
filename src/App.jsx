import "./App.css";
import { LanguageTranslate } from "./components/LanguageTranslate.jsx/LanguageTranslate";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { ToggleButtonTheme } from "./components/ToggleButtonTheme/ToggleButtonTheme";
import { LanguageProvider } from "./context/LanguageContext";

export const App = () => {
	return (
		<div className="app-container">
			<ToggleButtonTheme />
			<LoginForm />
			<LanguageProvider>
				<LanguageTranslate />
			</LanguageProvider>
		</div>
	);
};
