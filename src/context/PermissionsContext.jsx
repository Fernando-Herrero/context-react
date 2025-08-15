import { useContext } from "react";
import { createContext } from "react";
import { UserContext } from "./UserContext";

export const PermissionsContext = createContext(null);

const permissions = {
	guest: { view: true, edit: false, delete: false },
	user: { view: true, edit: true, delete: false },
	admin: { view: true, edit: true, delete: true },
};

export const PermissionsProvider = ({ children }) => {
	const { user } = useContext(UserContext);

	const can = (action) => {
		const role = user.role || "guest";

		return permissions[role]?.[action] ?? false;
	};

	return <PermissionsContext value={{ can }}>{children}</PermissionsContext>;
};
