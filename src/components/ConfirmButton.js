import React from "react";

export default function confirmButton(props) {
	const { categories } = props;
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
			<button className={enableButton ? "enable" : ""}>
				{enableButton ? "Fechar pedido" : "Selecione os 3 itens para fechar o pedido"}
			</button>
		</div>
	);
}