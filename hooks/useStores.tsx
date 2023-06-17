import { useState } from "react";
import {  SETTINGS_URL, STORE_URL } from "../constants/urls";
import { UseContext } from "../state/provider";
import { useAxiosHandler, useGetCachedAxiosHandler } from "./useAxiosHandler";



 


export const useGetStores  = () => {
	const { state: { user }} = UseContext();
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 10
	});
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${STORE_URL}/${user?.clientId}?page=${pageInfo.page}&limit=${pageInfo.limit}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0
	});
 
	return {  loading, stores: data?.data , setPageInfo, pageInfo, mutate };
};




export const useGetStore  = (storeId: string, state: string) => {
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${STORE_URL}/one/${storeId}?state=${state}`,
		notify: false,
		requiredVariable: storeId?.length > 0 && state?.length > 0
	});
 
	return {  loading, store: data?.data?.data ,   mutate };
};
 


export const useCreateStore  = () => {
	const { state: { user }} = UseContext();
	const { postAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	
	const handleCreateStore = async (DATA: object) => {
		setLoading(true);
		const { data } = await  postAxiosHandler ({
			url: `${STORE_URL}/${user?.clientId}`,
			DATA,
			successMessage: "Store created"
		});
		setLoading(false);
		if(data) {
			return { data };
		}
	};
 
	return {  loading, handleCreateStore };
};




export const useDeleteStore  = () => {
	const { deleteAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);

	const handleDeleteStore = async ( storeId: string) => {
		setLoading(true);
		const { data } = await  deleteAxiosHandler ({
			url: `${STORE_URL}/${storeId}`,
			successMessage: "Store deleted"
		});
		setLoading(false);
		if(data) {
			return { data };
		}
	};
 
	return {  loading, handleDeleteStore };
};




export const useEditStore  = (storeId: string) => {
	const { patchAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);

	const handleEditStore = async ( DATA: object) => {
		setLoading(true);
		const { data } = await  patchAxiosHandler ({
			url: `${STORE_URL}/${storeId}`,
			successMessage: "Store updated successfully",
			DATA
		});
		setLoading(false);
		if(data) {
			return { data };
		}
	};
 
	return {  loading, handleEditStore };
};

export const useUpdateCartPolicy  = () => {
	const { putAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	const { state: { user }} = UseContext();

	const handleUpdatecartPolicy = async ( DATA: object) => {
		setLoading(true);
		const { data } = await  putAxiosHandler ({
			url: `${SETTINGS_URL}/policies/${user?.clientId}`,
			successMessage: "Update is successful",
			DATA: { clientId: user?.clientId, "policyName": "cart", ...DATA}
		});
		setLoading(false);
		if(data) {
			return { data };
		}
	};
 
	return {  loading, handleUpdatecartPolicy };
};
