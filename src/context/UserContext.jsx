import { createContext, useEffect, useRef, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({ id: "", name: "", surname: "", password: "", role: "" });
	const [isLogin, setIsLogin] = useState(false);
	const nextId = useRef(1);

	const handleInputChange = ({ target: { name, value } }) => {
		setUser((prev) => ({ ...prev, [name]: value }));
	};

	const login = (event) => {
		event.preventDefault();
		setIsLogin(true);
		setUser((prev) => ({
			...prev,
			id: Date.now() + nextId.current,
			password: "",
		}));
		nextId.current += 1;
	};

	const logout = (event) => {
		event.preventDefault();
		setIsLogin(false);
		setUser({ id: "", name: "", surname: "", password: "", role: "" });
	};

	return <UserContext value={{ user, login, logout, isLogin, handleInputChange }}>{children}</UserContext>;
};
