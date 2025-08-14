import { useContext } from "react";
import { LanguageContext} from "../../context/LanguageContext";
import "./LanguageTranslate.css";

export const LanguageTranslate = () => {
	const { lang, handleSelect, texts } = useContext(LanguageContext);

	return (
		<div className="language-translate-container">
			<div>
				<header>
					<h1>{texts[lang].header.welcome}</h1>
				</header>
				<nav>
					<button>{texts[lang].buttons.save}</button>
					<button>{texts[lang].buttons.cancel}</button>
					<button>{texts[lang].buttons.delete}</button>
					<button>{texts[lang].buttons.edit}</button>
				</nav>
				<main>
					<section>
						<p>{texts[lang].messages.success}</p>
						<p>{texts[lang].messages.error}</p>
						<p>{texts[lang].messages.warning}</p>
					</section>
				</main>
			</div>

			<select name="translate" id="translate" value={lang} onChange={(event) => handleSelect(event.target.value)}>
				<option value="en">English</option>
				<option value="es">Spanish</option>
			</select>
		</div>
	);
};
