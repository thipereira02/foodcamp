/* eslint-disable react/prop-types */
import React from "react";

import Header from "../components/common/Header";
import Categories from "../components/Categories";
import ConfirmButton from "../components/ConfirmButton";

export default function HomePage({categories, setCategories}){
	function alterQuantity(option, value) {
		option.quantity = value;
		setCategories([...categories]);
	}

	return (
		<>
			<Header />
			{categories.map(c => (
				<Categories key={c.id} categories={c} func={alterQuantity}/>
			))}
			<ConfirmButton categories={categories}/>
		</>
	);
}
