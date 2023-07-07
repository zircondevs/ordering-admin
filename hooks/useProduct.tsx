


 

import { useEffect, useState } from "react";
import {   PRODUCT_URL,   } from "../constants/urls";
import {   useAxiosHandler, useGetCachedAxiosHandler,   } from "./useAxiosHandler";
import { UseContext } from "../state/provider";
import { extractQueryString, removeEmptyValuesFromObj } from "../lib";
import { useCACHE } from "./useCache";




 
 


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


export const useDeleteProduct  = () => {
	const { deleteAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	
	const handleDeleteProduct = async (productId: string) => {
		setLoading(true);
		const { data } = await  deleteAxiosHandler ({
			url: `${PRODUCT_URL}/${productId}`,
			successMessage: "Product deleted successfully"
		});
		setLoading(false);
		if(data) {
			return { data };
		}
	};

	return {  loading, handleDeleteProduct };
};



export const useGetAllProduct  = ( filterObj: object) => {
	const { state: { storeId }} = UseContext();
	
	const [pageInfo, setPageinfo] = useState({
		page: 1,
		limit: 20,
		count: 0,
		pages: 1
	});
	const filterString = extractQueryString(removeEmptyValuesFromObj(filterObj));

	const { data, loading, error, isValidating , mutate} = useGetCachedAxiosHandler ({
		url: `${PRODUCT_URL}/all/${storeId}?page=${pageInfo.page}&limit=${pageInfo.limit}${filterString ? `&${filterString}` : ""}`,
		notify: false,
		requiredVariable: storeId?.length > 0,
		noToken: true
	});
	const {CACHE} = useCACHE(data, isValidating);
	
	useEffect(() => {
		data && setPageinfo({...pageInfo, ...data?.data});
	}, [ data ]);
 
	
	return { product: CACHE?.data, loading: loading && !CACHE?.data , error, setPageinfo , pageInfo, isValidating , mutate};
};



 

export const useGetProductMetrics  = (  ) => {
	const { state: { user }} = UseContext();
	
	
	const { data, loading, error, isValidating , mutate} = useGetCachedAxiosHandler ({
		url: `${PRODUCT_URL}/performing/${user?.clientId}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0,
		noToken: true
	});
 
 
	
	return { productMetrics:  data?.data?.data, loading  , error,  isValidating , mutate};
};



 