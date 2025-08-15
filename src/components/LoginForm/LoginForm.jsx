import { useContext } from "react";
import "./LoginForm.css";
import { UserContext } from "../../context/UserContext";

export const LoginForm = () => {
	const { user, login, logout, isLogin, handleInputChange, error } = useContext(UserContext);
	console.log(useContext(UserContext));
	const { name, surname, password, role } = user;

	return (
		<>
			{!isLogin && (
				<form className="user-form" onSubmit={login}>
					<h3>Welcome, Guest</h3>
					<label>
						Name:
						<input type="text" value={name} name="name" autoComplete="text" onChange={handleInputChange} />
					</label>

					<label>
						Surname:
						<input
							type="text"
							value={surname}
							name="surname"
							autoComplete="text"
							onChange={handleInputChange}
						/>
					</label>

					<label>
						Password:
						<input
							type="password"
							value={password}
							name="password"
							autoComplete="off"
							onChange={handleInputChange}
						/>
					</label>

					<select name="role" id="role" value={role} autoComplete="off" onChange={handleInputChange}>
						<option value="" disabled>
							--Select a role--
						</option>
						<option value="guest">Guest</option>
						<option value="user">User</option>
						<option value="admin">Admin</option>
					</select>

					<button type="submit">Login</button>

					{error && <p style={{ color: "red" }}>{error}</p>}
				</form>
			)}

			{isLogin ? (
				<div className="is-login">
					{user.role === "admin" ? <button>Manage</button> : ""}
					<h3>Welcome, {name}</h3>
					<button onClick={logout}>Logout</button>
				</div>
			) : (
				""
			)}
		</>
	);
};
