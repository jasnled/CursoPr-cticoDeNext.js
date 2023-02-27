import { useEffect, useState } from "react";
import axios from 'axios';




const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);

	async function getProducts (URL) {
		const response = await axios(URL);
		console.log(response.data);
		setProducts(response.data);
	};
		
	useEffect(()=>{getProducts(API)} , []);

	return products;
};

export default useGetProducts;
