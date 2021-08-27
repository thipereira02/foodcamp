/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/common/Header";

export default function ReviewPage(props) {
	const { categories } = props;
	console.log(categories);

	return (
		<>
			<Header />
			<h3>Revise seu pedido</h3>
			<div className="container-order">

			</div>
			<button className="confirm-button">
				Tudo certo, pode pedir!
			</button>
			<Link to="/">
				<div className="cancel">
					Cancelar
				</div>
			</Link>
		</>
	);
}