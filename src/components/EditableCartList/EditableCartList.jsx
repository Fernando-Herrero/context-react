export const EditableCartList = ({ items, onQtyChange, onAdd }) => {
	if (items.length === 0) return null;
	return (
		<ul className="cart-items">
			{items.map(({ id, name, qty }) => (
				<li key={id}>
					<p>{name}</p>
					<div className="cart-it">
						<input type="number" value={qty} onChange={(e) => onQtyChange(id, e.target.value)} min="0" />
						<button onClick={() => onAdd(id)}>Add</button>
					</div>
				</li>
			))}
		</ul>
	);
};
