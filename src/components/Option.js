/* eslint-disable react/prop-types */
import React from "react";

export default function Option(props) {
	const { option } = props;
	const { description, image, meal, price, quantity } = option;

	function selectedOption() {
		console.log("hahaha");
	}

	return (
		<div className={quantity>0 ? "option selected" : "option"} onClick={selectedOption}>
			<img src={image} />
			<div className="title">{meal}</div>
			<p className="description">{description}</p>
			<div className="container-price">
				<p className="price"> R$ {price.toFixed(2).replace(".",",")}</p>
				<div className="container-price">
					<button className="btn-less">
                        -
					</button>
					<span>{quantity}</span>
					<button className="btn-plus">
                        +
					</button>
				</div>
			</div>
		</div>
	);
}
