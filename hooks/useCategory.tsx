




import { useState } from "react";
import {   PRODUCT_URL,   } from "../constants/urls";
import { UseContext } from "../state/provider";
import { useAxiosHandler, useGetCachedAxiosHandler } from "./useAxiosHandler";



 


export const useGetCategories  = () => {
	const { state: { user}} = UseContext();
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 10
	});
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${PRODUCT_URL}/categories/${user?.clientId}?page=${pageInfo.page}&limit=${pageInfo.limit}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0
	});
 
	return {  loading, categories: data?.data?.data , pageInfo, setPageInfo , mutate};
};
 

export const useCreateCategory  = () => {
	const { state: { user }} = UseContext();
	const { postAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	
	const handleCreateCategory = async (DATA: object) => {
		setLoading(true);
		const { data } = await  postAxiosHandler ({
			url: `${PRODUCT_URL}/categories/${user?.clientId}`,
			DATA,
			successMessage: "Category created"
		});
		setLoading(false);
		if(data) {
			return { data };
		}
	};
 
	return {  loading, handleCreateCategory };
};


