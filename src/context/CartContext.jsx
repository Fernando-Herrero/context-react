import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const sampleProducts = [
	{ id: "product_1", name: "Camiseta React: ¡Código limpio!", qty: 0 },
	{ id: "product_2", name: "Sudadera JS Master: Async Await Forever", qty: 0 },
	{ id: "product_3", name: "Zapatillas NodeRunners", qty: 0 },
	{ id: "product_4", name: "Gorra Full Stack Hero", qty: 0 },
	{ id: "product_5", name: "Mochila DevOps Pro", qty: 0 },
];

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState(sampleProducts);

	const handleInputQty = (id, value) => {
		const qty = Number(value);
		setItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty } : item)));
	};

	const handleAddCart = (id) => {
		const product = items.find((item) => item.id === id);
		if (!product || product.qty === 0) return;

		setItems((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, qty: 0, cartQty: (item.cartQty || 0) + product.qty } : item
			)
		);
	};

	const handleRemoveItem = (id) => {
		setItems((prev) => prev.map((item) => (item.id === id ? { ...item, cartQty: 0 } : item)));
	};

	const handleClearCart = () => {
		setItems((prev) => prev.map((item) => ({ ...item, cartQty: 0 })));
	};

	const totalItems = items.filter((item) => item.cartQty > 0);

	return (
		<CartContext value={{ items, totalItems, handleInputQty, handleAddCart, handleRemoveItem, handleClearCart }}>
			{children}
		</CartContext>
	);
};
