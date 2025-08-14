import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

export const texts = {
	en: {
		header: {
			welcome: "Welcome",
			login: "Login",
			logout: "Logout",
			profile: "Profile",
		},
		home: {
			title: "Home Page",
			description: "This is the home page of our app.",
			explore: "Explore",
		},
		cart: {
			title: "Shopping Cart",
			empty: "Your cart is empty",
			checkout: "Proceed to Checkout",
		},
		buttons: {
			save: "Save",
			cancel: "Cancel",
			delete: "Delete",
			edit: "Edit",
		},
		messages: {
			success: "Operation completed successfully!",
			error: "Something went wrong. Try again.",
			warning: "Please fill all required fields.",
		},
	},
	es: {
		header: {
			welcome: "Bienvenido",
			login: "Iniciar sesión",
			logout: "Cerrar sesión",
			profile: "Perfil",
		},
		home: {
			title: "Página Principal",
			description: "Esta es la página principal de nuestra app.",
			explore: "Explorar",
		},
		cart: {
			title: "Carrito de Compras",
			empty: "Tu carrito está vacío",
			checkout: "Proceder al Pago",
		},
		buttons: {
			save: "Guardar",
			cancel: "Cancelar",
			delete: "Eliminar",
			edit: "Editar",
		},
		messages: {
			success: "¡Operación completada con éxito!",
			error: "Algo salió mal. Intenta de nuevo.",
			warning: "Por favor completa todos los campos obligatorios.",
		},
	},
};

export const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState("en");

	const handleSelect = (value) => {
		setLang(value);
	};

	return <LanguageContext.Provider value={{ lang, handleSelect, texts }}>{children}</LanguageContext.Provider>;
};
