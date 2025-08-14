import { useContext } from "react";
import "./CartItems.css";
import { CartContext } from "../../context/CartContext";

export const CartItems = () => {
	const { items, totalItems, handleInputQty, handleAddCart, handleRemoveItem, handleClearCart } =
		useContext(CartContext);

	const totalQty = totalItems.reduce((acc, item) => acc + item.cartQty, 0);

	return (
		<div className="cart-items-container">
			<ul className="cart-items">
				{items.map(({ id, name, qty }) => (
					<li key={id}>
						<p>{name}</p>
						<div className="cart-it">
							<input
								type="number"
								value={qty}
								onChange={(e) => handleInputQty(id, e.target.value)}
								min="0"
							/>
							<button onClick={() => handleAddCart(id)}>Add</button>
						</div>
					</li>
				))}
			</ul>

			<div className="cart-items-bought">
				<div className="cart-img-list">
					<div className="img-cart">
						🛒<span>{totalQty}</span>
					</div>

					{totalItems.length > 0 && (
						<ul>
							{totalItems.map(({ id, name, cartQty }) => (
								<li key={id}>
									<p>{name} →</p>
									<span>{cartQty}</span>
									<button className="remove-btn" onClick={() => handleRemoveItem(id)}>
										Remove
									</button>
								</li>
							))}
						</ul>
					)}
				</div>

				{totalItems.length > 0 && <button className="clear-btn" onClick={handleClearCart}>Clear cart</button>}
			</div>
		</div>
	);
};
