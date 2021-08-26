/* eslint-disable react/prop-types */
import React from "react";

export default function Option(props) {
	const { option, func } = props;
	const { description, image, meal, price, quantity } = option;

	return (
		<div className={quantity>0 ? "option selected" : "option"} onClick={() => quantity===0 && func(option, 1)}>
			<img src={image} />
			<div className="title">{meal}</div>
			<p className="description">{description}</p>
			<div className="container-price">
				<p className="price"> R$ {price.toFixed(2).replace(".",",")}</p>
				<div className="container-price">
					<button className="btn-less" onClick={() => func(option, quantity-1)}>
                        -
					</button>
					<span>{quantity}</span>
					<button className="btn-plus" onClick={() => func(option, quantity+1)}>
                        +
					</button>
				</div>
			</div>
		</div>
	);
}
