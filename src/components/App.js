import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

import { products } from "../utils/ProductsList";

import HomePage from "../pages/HomePage";
import ReviewPage from "../pages/ReviewPage";

export default function App() {
	const [categories, setCategories] = useState(products);

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<HomePage categories={categories} setCategories={setCategories} />
				</Route>
				<Route path="/review" exact>
					<ReviewPage categories={categories} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}