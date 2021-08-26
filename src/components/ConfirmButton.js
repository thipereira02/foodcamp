import React from "react";

export default function confirmButton(props) {
	const { categories } = props;
	console.log(categories);
	
	const enableButton = true;
	

	return (
		<div className="confirm-order">
			<button className={enableButton ? "enable" : ""}>
				{enableButton ? "Fechar pedido" : "Selecione os 3 itens para fechar o pedido"}
			</button>
		</div>
	);
}