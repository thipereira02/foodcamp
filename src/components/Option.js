/* eslint-disable react/prop-types */
import React from "react";

export default function Option(props) {
	const { option } = props;
	const { description, image, meal, price } = option;
	console.log(description,image,meal,price);

	return (
		<div className="opcoes pratos">
			<div className="opcao prato-frango" onClick="selecionarPrato()">
				<img src={image} />
				<div className="titulo">{meal}</div>
				<div className="descricao">{description}</div>
				<div className="preco">{price}</div>
				<div className="check">
					<ion-icon name="checkmark-circle"></ion-icon>
				</div>
			</div>
		</div>
	);
}
