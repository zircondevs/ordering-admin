


 

import { useState } from "react";
import {   PRODUCT_URL,   } from "../constants/urls";
import {   useAxiosHandler, useGetCachedAxiosHandler,   } from "./useAxiosHandler";
import { UseContext } from "../state/provider";




 
 


export const useCreateProduct  = () => {
	const { postAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	const { state: { storeId }} = UseContext();
	
	const handleCreateProduct = async (DATA: object) => {
		setLoading(true);
		const { data } = await  postAxiosHandler ({
			url: `${PRODUCT_URL}/${storeId}`,
			DATA,
			successMessage: "Product created successfully"
		});
		setLoading(false);
		if(data) {
			return { data };
		}
	};

	return {  loading, handleCreateProduct };
};
 


export const useUpdateProduct  = (productId: string) => {
	const { patchAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	
	const handleUpdateProduct = async (DATA: object) => {
		setLoading(true);
		const { data } = await  patchAxiosHandler ({
			url: `${PRODUCT_URL}/${productId}`,
			DATA,
			successMessage: "Product updated successfully"
		});
		setLoading(false);
		if(data) {
			return { data };
		}
	};

	return {  loading, handleUpdateProduct };
};


export const useGetAllProducts  = () => {
	const { state: { storeId }} = UseContext();
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 10
	});
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${PRODUCT_URL}/all/${storeId}?page=${pageInfo.page}&limit=${pageInfo.limit}`,
		notify: false,
		requiredVariable:storeId?.length > 0
	});
 
	return {  loading, menu: data?.data , setPageInfo, pageInfo, mutate };
};
 
