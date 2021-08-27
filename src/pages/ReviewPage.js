/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/common/Header";

import OrderByWhatsapp from "../utils/OrderByWhatsapp";
import CalculateOrderPrice from "../utils/CalculateOrderPrice";

export default function ReviewPage(props) {
	const { categories } = props;
	const order = [];
	const message = encodeURIComponent(OrderByWhatsapp(categories));
	const total = CalculateOrderPrice(categories);

	categories.forEach(c => {
		c.options.forEach(o => {
			if (o.quantity>0) {
				order.push(o);
			}
		});
	});
	
	return (
		<>
			<Header />
			<h3>Revise seu pedido</h3>
			<div className="container-order">
				<div className="products-column">
					{order.map(o => (
						<p key={o.key}>{o.meal} {o.quantity > 1 ? `(${o.quantity}x)` : ""}</p>
					))}
					<h4>TOTAL</h4>
				</div>
				<div className="prices-column">
					{order.map(o => (
						<p key={o.key}>{(o.price*o.quantity).toFixed(2).replace(".",",")}</p>
					))}
					<h4>R$ {total.toFixed(2).replace(".",",")}</h4>
				</div>
			</div>
			<a href={`https://wa.me/5581993562246?text=${message}`} target="_blank" rel="noreferrer">
				<button className="confirm-button">
					Tudo certo, pode pedir!
				</button>
			</a>
			<Link to="/">
				<div className="cancel">
					Cancelar
				</div>
			</Link>
		</>
	);
}