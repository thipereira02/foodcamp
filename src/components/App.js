import React, { useState } from "react";

import { products } from "./ProductsList";

import Header from "./Header";
import Categories from "./Categories";
import ConfirmButton from "./ConfirmButton";

export default function App(){
	const [categories, setCategories] = useState(products);

	return (
		<>
			<Header />
			{categories.map(c => (
				<Categories key={c.id} categories={c} setCategories={setCategories}/>
			))}
			<ConfirmButton />
		</>
	);
}
