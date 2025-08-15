export const SummaryCartList = ({ totalItems, onRemove }) => {
	if (totalItems.length === 0) return;
    
	return (
		<ul>
			{totalItems.map(({ id, name, cartQty }) => (
				<li key={id}>
					<p>{name} →</p>
					<span>{cartQty}</span>
					<button className="remove-btn" onClick={() => onRemove(id)}>
						Remove
					</button>
				</li>
			))}
		</ul>
	);
};
