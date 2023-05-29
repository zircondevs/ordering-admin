


 

import { useState } from "react";
import {  FOOD_URL,   } from "../constants/urls";
import {   useAxiosHandler, useGetCachedAxiosHandler,   } from "./useAxiosHandler";
import { UseContext } from "../state/provider";




 
 


export const useCreateFood  = () => {
	const { postAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	const { state: { storeId }} = UseContext();
	
	const handleCreateFood = async (DATA: object) => {
		setLoading(true);
		const { data } = await  postAxiosHandler ({
			url: `${FOOD_URL}/${storeId}`,
			DATA,
			successMessage: "Food created successfully"
		});
		setLoading(false);
		if(data) {
			return { data };
		}
	};

	return {  loading, handleCreateFood };
};
 


export const useUpdateFood  = (foodId: string) => {
	const { patchAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	
	const handleUpdateFood = async (DATA: object) => {
		setLoading(true);
		const { data } = await  patchAxiosHandler ({
			url: `${FOOD_URL}/${foodId}`,
			DATA,
			successMessage: "Food updated successfully"
		});
		setLoading(false);
		if(data) {
			return { data };
		}
	};

	return {  loading, handleUpdateFood };
};


export const useGetAllFood  = () => {
	const { state: { storeId }} = UseContext();
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 10
	});
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${FOOD_URL}/all/${storeId}?page=${pageInfo.page}&limit=${pageInfo.limit}`,
		notify: false,
		requiredVariable:storeId?.length > 0
	});
 
	return {  loading, menu: data?.data , setPageInfo, pageInfo, mutate };
};
 
