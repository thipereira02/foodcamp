import React from "react";

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

			<div className="header">
				<div className="titulo">FoodCamp</div>
				<div className="subtitulo">Sua comida em 6 minutos</div>
			</div>

			<div className="menu">
				<div className="secao">
					<div className="titulo">Primeiro, seu prato</div>
					<div className="opcoes pratos">
						<div className="opcao prato-frango" onClick="selecionarPrato('.prato-frango', 'Frango Yin Yang', 14.90)">
							<img src="img/frango_yin_yang.png" />
							<div className="titulo">Frango Yin Yang</div>
							<div className="descricao">Um pouco de batata, um pouco de salada</div>
							<div className="preco">R$ 14,90</div>
							<div className="check">
								<ion-icon name="checkmark-circle"></ion-icon>
							</div>
						</div>

						<div className="opcao prato-carne" onClick="selecionarPrato('.prato-carne', 'Carne Yin Yang', 17.90)">
							<img src="img/frango_yin_yang.png" />
							<div className="titulo">Carne Yin Yang</div>
							<div className="descricao">Um pouco de batata, um pouco de salada</div>
							<div className="preco">R$ 17,90</div>
							<div className="check">
								<ion-icon name="checkmark-circle"></ion-icon>
							</div>
						</div>

						<div className="opcao prato-peixe" onClick="selecionarPrato('.prato-peixe', 'Peixe Yin Yang', 16.90)">
							<img src="img/frango_yin_yang.png" />
							<div className="titulo">Peixe Yin Yang</div>
							<div className="descricao">Um pouco de batata, um pouco de salada</div>
							<div className="preco">R$ 16,90</div>
							<div className="check">
								<ion-icon name="checkmark-circle"></ion-icon>
							</div>
						</div>
					</div>
				</div>

				<div className="secao">
					<div className="titulo">Agora, sua bebida</div>
					<div className="opcoes bebidas">
						<div className="opcao bebida-coca" onClick="selecionarBebida('.bebida-coca', 'Coquinha gelada', 6.90)">
							<img src="img/coquinha_gelada.png" />
							<div className="titulo">Coquinha gelada</div>
							<div className="descricao">Lata 350ml</div>
							<div className="preco">R$ 6,90</div>
							<div className="check">
								<ion-icon name="checkmark-circle"></ion-icon>
							</div>
						</div>

						<div className="opcao bebida-guarana" onClick="selecionarBebida('.bebida-guarana', 'Guaraná gelado', 4.90)">
							<img src="img/coquinha_gelada.png" />
							<div className="titulo">Guaraná gelado</div>
							<div className="descricao">Lata 350ml</div>
							<div className="preco">R$ 4,90</div>
							<div className="check">
								<ion-icon name="checkmark-circle"></ion-icon>
							</div>
						</div>

						<div className="opcao bebida-suco" onClick="selecionarBebida('.bebida-suco', 'Suquinho gelado', 7.90)">
							<img src="img/coquinha_gelada.png" />
							<div className="titulo">Suquinho gelado</div>
							<div className="descricao">500ml</div>
							<div className="preco">R$ 7,90</div>
							<div className="check">
								<ion-icon name="checkmark-circle"></ion-icon>
							</div>
						</div>
					</div>
				</div>

				<div className="secao">
					<div className="titulo">Por fim, sua sobremesa</div>
					<div className="opcoes sobremesas">
						<div className="opcao sobremesa-pudim" onClick="selecionarSobremesa('.sobremesa-pudim', 'Pudim', 7.90)">
							<img src="img/pudim.png" />
							<div className="titulo">Pudim</div>
							<div className="descricao">Apenas um pudim</div>
							<div className="preco">R$ 7,90</div>
							<div className="check">
								<ion-icon name="checkmark-circle"></ion-icon>
							</div>
						</div>

						<div className="opcao sobremesa-mousse" onClick="selecionarSobremesa('.sobremesa-mousse', 'Mousse', 6.90)">
							<img src="img/pudim.png" />
							<div className="titulo">Mousse</div>
							<div className="descricao">Cremoso, gostoso</div>
							<div className="preco">R$ 6,90</div>
							<div className="check">
								<ion-icon name="checkmark-circle"></ion-icon>
							</div>
						</div>

						<div className="opcao sobremesa-brownie" onClick="selecionarSobremesa('.sobremesa-brownie', 'Brownie', 4.90)">
							<img src="img/pudim.png" />
							<div className="titulo">Brownie</div>
							<div className="descricao">É um bolinho</div>
							<div className="preco">R$ 4,90</div>
							<div className="check">
								<ion-icon name="checkmark-circle"></ion-icon>
							</div>
						</div>
					</div>
				</div>
			</div>
        

			<div className="footer">
				<a href="#" className="fazer-pedido">
                Selecione os 3 itens<br/>para fechar o pedido
				</a>
			</div>
		</>
	);
}