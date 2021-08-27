/* eslint-disable react/prop-types */
import React from "react";

import Option from "./Option";

export default function Categories({ categories, func }) {
	const { title, options } = categories;
    
	return (
		<>
			<h3>{title}</h3>
			<div className="options-list">
				{options.map(o => (
					<Option key={o.id} option={o} func={func}/>
				))}
			</div>
		</>
	);	
}