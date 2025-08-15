import { createContext, useEffect, useRef, useState } from "react";

export const UserContext = createContext(null);

const emptyUser = { id: "", name: "", surname: "", password: "", role: "" };

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(emptyUser);
	const [isLogin, setIsLogin] = useState(false);
	const [error, setError] = useState(null);
	const nextId = useRef(1);

	const handleInputChange = ({ target: { name, value } }) => {
		setError(null);
		setUser((prev) => ({ ...prev, [name]: value }));
	};

	const login = (event) => {
		event.preventDefault();

		if (!user.name.trim() || !user.password.trim()) return setError("Name and password are required");

		setIsLogin(true);
		setUser({ ...user, id: Date.now() + nextId.current, password: "" });
		nextId.current += 1;
		setError(null);
	};

	const logout = (event) => {
		event.preventDefault();
		setIsLogin(false);
		setUser(emptyUser);
	};

	return <UserContext value={{ user, login, logout, isLogin, handleInputChange, error }}>{children}</UserContext>;
};
