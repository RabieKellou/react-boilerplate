import React from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

const Home = () => {
	const url = `https://5ea3cea9270de6001645fc38.mockapi.io/api/products?page=1&limit=10`;

	let products = useAxiosGet(url);
	let content = null;

	if (products.error) {
		content = <p>There was an error please refresh or try again</p>;
	}
	if (products.loading) {
		content = <Loader />;
	}
	if (products.data) {
		content = products.data.map((product) => (
			<ProductCard key={product.id} product={product} />
		));
	}
	return (
		<div>
			<h1 className="font-bold text-2xl">Best Sellers</h1>
			{content}
		</div>
	);
};

export default Home;
