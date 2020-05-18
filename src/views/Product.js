import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequests";
const Product = () => {
	const { id } = useParams();
	const url = `https://5ea3cea9270de6001645fc38.mockapi.io/api/products/${id}`;

	let product = useAxiosGet(url);
	let content = null;

	if (product.error) {
		content = <p>There was an error please refresh or try again</p>;
	}
	if (product.loading) {
		content = <Loader />;
	}

	if (product.data) {
		content = (
			<div>
				<h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
				<div>
					<img
						className="block max-h-full h-auto"
						src={product.data.image}
						alt={product.data.name}
					/>
				</div>
				<div className="font-bold text-xl mb-3">$ {product.data.price}</div>
				<div>{product.data.description}</div>
			</div>
		);
	}
	return <div className="mb-64">{content}</div>;
};

export default Product;
