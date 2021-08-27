import frango from "../assets/frango_yin_yang.png";
import coca from "../assets/coquinha_gelada.png";
import pudim from "../assets/pudim.png";

export const products = [
	{
		id: 1,
		title: "Primeiro, seu prato",
		name: "Prato",
		options: [
			{
				id: 1,
				key: 1, 
				meal: "Frango Yin Yang",
				description: "Um pouco de batata, um pouco de salada",
				price: 14.90,
				image: frango,
				quantity: 0
			},
			{
				id: 2,
				key: 2, 
				meal: "Carne Yin Yang",
				description: "Um pouco de batata, um pouco de salada",
				price: 16.90,
				image: frango,
				quantity: 0
			},
			{
				id: 3,
				key: 3, 
				meal: "Peixe Yin Yang",
				description: "Um pouco de batata, um pouco de salada",
				price: 17.90,
				image: frango,
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
				key: 4, 
				meal: "Guaraná gelada",
				description: "Lata 350ml",
				price: 5.90,
				image: coca,
				quantity: 0
			},
			{
				id: 2,
				key: 5, 
				meal: "Coquinha gelada",
				description: "Lata 350ml",
				price: 6.90,
				image: coca,
				quantity: 0
			},
			{
				id: 3,
				key: 6, 
				meal: "Suquinho gelado",
				description: "Lata 350ml",
				price: 7.90,
				image: coca,
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
				key: 7, 
				meal: "Pudim",
				description: "Apenas um pudim",
				price: 4.90,
				image: pudim,
				quantity: 0
			},
			{
				id: 2,
				key: 8, 
				meal: "Mousse",
				description: "Cremoso, gostoso",
				price: 6.90,
				image: pudim,
				quantity: 0
			},
			{
				id: 3,
				key: 9, 
				meal: "Brownie",
				description: "É um bolinho",
				price: 7.90,
				image: pudim,
				quantity: 0
			}
		]
	}
];