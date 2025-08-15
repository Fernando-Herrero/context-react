import { useContext } from "react";
import "./CartItems.css";
import { CartContext } from "../../context/CartContext";
import { EditableCartList } from "../EditableCartList/EditableCartList";
import { SummaryCartList } from "../SummaryCartList/SummaryCartList";
import { PermissionsContext } from "../../context/PermissionsContext";

export const CartItems = () => {
	const { items, totalItems, handleInputQty, handleAddCart, handleRemoveItem, handleClearCart } =
		useContext(CartContext);
	const { can } = useContext(PermissionsContext);

	const totalQty = totalItems.reduce((acc, item) => acc + item.cartQty, 0);

	return (
		<div className="cart-items-container">
			{can("edit") && <EditableCartList items={items} onQtyChange={handleInputQty} onAdd={handleAddCart} />}

			<div className="cart-items-bought">
				<div className="cart-img-list">
					<div className="img-cart">
						🛒<span>{totalQty}</span>
					</div>

					{totalItems.length > 0 && <SummaryCartList totalItems={totalItems} onRemove={handleRemoveItem} />}
				</div>

				{totalItems.length > 0 && can("delete") && (
					<button className="clear-btn" onClick={handleClearCart}>
						Clear cart
					</button>
				)}
			</div>
		</div>
	);
};
