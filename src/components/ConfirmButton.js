import React from "react";
import { Link } from "react-router-dom";

export default function confirmButton({ categories }) {
	const enableButton = verifyQuantities(categories);
	
	function verifyQuantities(categories){
		const check = categories.filter(c => {
			return c.options.find(o => o.quantity > 0);
		});

		if (check.length === categories.length) return true;

		return false; 
	}

	return (
		<div className="confirm-order">
			<Link to="/review">
				<button 
					className={enableButton ? "enable" : ""} 
					disabled={!enableButton ? "disabled" : ""} 
				>
					{enableButton ? "Fechar pedido" : "Selecione os 3 itens para fechar o pedido"}
				</button>
			</Link>
		</div>
	);
}