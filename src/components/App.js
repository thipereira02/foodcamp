import React from "react";

import frango from "../assets/frango_yin_yang.png";
import coca from "../assets/coquinha_gelada.png";
import pudim from "../assets/pudim.png";

import Header from "./Header";
import Categories from "./Categories";

export default function App(){
	return (
		<>
			<div className="overlay escondido">
				<div className="confirmar-pedido">
					<div className="titulo">Confirme seu pedido</div>
					<ul>
						<li className="prato">
							<div className="nome">Frango Yin Yang</div>
							<div className="preco">14,90</div>
						</li>
						<li className="bebida">
							<div className="nome">Coquinha gelada</div>
							<div className="preco">4,90</div>
						</li>
						<li className="sobremesa">
							<div className="nome">Pudim</div>
							<div className="preco">7,90</div>
						</li>
						<li className="total">
							<div>Total</div>
							<div>R$ 27,70</div>
						</li>
					</ul>
					<button className="confirmar">Tudo certo, pode pedir!</button>
					<button className="cancelar">Cancelar</button>
				</div>
			</div>

			<Header />

			{products.map(p => (
				<Categories key={p.id} categories={p}/>
			))}

			<div className="footer">
				<a href="#" className="fazer-pedido">
					Selecione os 3 itens<br/>para fechar o pedido
				</a>
			</div>
		</>
	);
}


const products = [
	{
		id: 1,
		title: "Primeiro, seu prato",
		options: [
			{
				id: 1,
				meal: "Frango Yin Yang",
				description: "Um pouco de batata, um pouco de salada",
				price: "R$ 14,90",
				image: frango,
				quantity: 0
			},
			{
				id: 2,
				meal: "Carne Yin Yang",
				description: "Um pouco de batata, um pouco de salada",
				price: "R$ 16,90",
				image: frango,
				quantity: 0
			},
			{
				id: 3,
				meal: "Peixe Yin Yang",
				description: "Um pouco de batata, um pouco de salada",
				price: "R$ 17,90",
				image: frango,
				quantity: 0
			}
		]
	},
	{
		id: 2,
		title: "Agora, sua bebida",
		options: [
			{
				id: 1,
				meal: "Guaraná gelada",
				description: "Lata 350ml",
				price: "R$ 5,90",
				image: coca,
				quantity: 0
			},
			{
				id: 2,
				meal: "Coquinha gelada",
				description: "Lata 350ml",
				price: "R$ 6,90",
				image: coca,
				quantity: 0
			},
			{
				id: 3,
				meal: "Suquinho gelado",
				description: "Lata 350ml",
				price: "R$ 7,90",
				image: coca,
				quantity: 0
			}
		]
	},
	{
		id: 3,
		title: "Por fim, sua sobremesa",
		options: [
			{
				id: 1,
				meal: "Pudim",
				description: "Apenas um pudim",
				price: "R$ 4,90",
				image: pudim,
				quantity: 0
			},
			{
				id: 2,
				meal: "Mousse",
				description: "Cremoso, gostoso",
				price: "R$ 6,90",
				image: pudim,
				quantity: 0
			},
			{
				id: 3,
				meal: "Brownie",
				description: "É um bolinho",
				price: "R$ 7,90",
				image: pudim,
				quantity: 0
			}
		]
	}
];
