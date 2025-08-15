import { useContext } from "react";
import { PermissionsContext } from "../../context/PermissionsContext";

export const SummaryCartList = ({ totalItems, onRemove }) => {
	const { can } = useContext(PermissionsContext);

	if (totalItems.length === 0) return;

	return (
		<ul>
			{totalItems.map(({ id, name, cartQty }) => (
				<li key={id}>
					<p>{name} →</p>
					<span>{cartQty}</span>
					{can("delete") && (
						<button className="remove-btn" onClick={() => onRemove(id)}>
							Remove
						</button>
					)}
				</li>
			))}
		</ul>
	);
};
