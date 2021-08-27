import frango from "../assets/frango_yin_yang.png";
import estrogonofe from "../assets/estrogonofe-de-carne.jpg";
import bife from "../assets/bife-com-batata.jpg";
import espaguete from "../assets/espaguete-a-bolonhesa.jpg";
import coca from "../assets/coquinha_gelada.png";
import suco from "../assets/suco.jpg";
import cerveja from "../assets/cerveja.png";
import agua from "../assets/agua.jpg";
import pudim from "../assets/pudim.png";
import pave from "../assets/pave.jpg";
import mousse from "../assets/mousse-de-chocolate.jpg";
import torta from "../assets/torta-alema.jpg";

export const products = [
	{
		id: 1,
		title: "Primeiro, seu prato",
		name: "Prato",
		options: [
			{
				id: 1,
				key: 1, 
				meal: "Frango",
				description: "Um pouco de batata, um pouco de salada",
				price: 14.90,
				image: frango,
				quantity: 0
			},
			{
				id: 2,
				key: 2, 
				meal: "Estrogonofe",
				description: "Carne com molho, arroz e batata",
				price: 16.90,
				image: estrogonofe,
				quantity: 0
			},
			{
				id: 3,
				key: 3, 
				meal: "Bife",
				description: "Bife com batatas e arroz",
				price: 17.90,
				image: bife,
				quantity: 0
			},
			{
				id: 4,
				key: 4, 
				meal: "Espaguete",
				description: "Macarrão com molho à bolonhesa",
				price: 19.90,
				image: espaguete,
				quantity: 0
			}
		]
	},
	{
		id: 2,
		title: "Agora, sua bebida",
		name: "Bebida",
		options: [
			{
				id: 1,
				key: 5, 
				meal: "Água",
				description: "Garrafa 500ml",
				price: 3.90,
				image: agua,
				quantity: 0
			},
			{
				id: 2,
				key: 6, 
				meal: "Refrigerante",
				description: "Lata 350ml",
				price: 4.90,
				image: coca,
				quantity: 0
			},
			{
				id: 3,
				key: 7, 
				meal: "Suco",
				description: "Copo 300ml",
				price: 5.90,
				image: suco,
				quantity: 0
			},
			{
				id: 4,
				key: 8, 
				meal: "Cerveja",
				description: "Lata 350ml",
				price: 6.90,
				image: cerveja,
				quantity: 0
			}
		]
	},
	{
		id: 3,
		title: "Por fim, sua sobremesa",
		name: "Sobremesa",
		options: [
			{
				id: 1,
				key: 9, 
				meal: "Pudim",
				description: "Pudim de leite condensado",
				price: 5.90,
				image: pudim,
				quantity: 0
			},
			{
				id: 2,
				key: 10, 
				meal: "Pavê",
				description: "Torta com base de biscoitos",
				price: 6.90,
				image: pave,
				quantity: 0
			},
			{
				id: 3,
				key: 11, 
				meal: "Mousse",
				description: "Sobremesa leve e aerada",
				price: 7.90,
				image: mousse,
				quantity: 0
			},
			{
				id: 3,
				key: 12, 
				meal: "Torta Alemã",
				description: "Torta com biscoitos e chocolate",
				price: 8.90,
				image: torta,
				quantity: 0
			}
		]
	}
];