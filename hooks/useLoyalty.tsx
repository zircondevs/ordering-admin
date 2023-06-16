








import { useEffect, useState } from "react";
import { LOYALTY_URL,   } from "../constants/urls";
import { UseContext } from "../state/provider";
import {   useAxiosHandler, useGetCachedAxiosHandler } from "./useAxiosHandler";



 


export const useGetLoyaltyCustomers  = (pageInfoData?: {limit?: number}) => {
	const { state: { user }} = UseContext();
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 6,
		pages: 1,
		...pageInfoData
	});
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${LOYALTY_URL}/users/${user?.clientId}?page=${pageInfo.page}&limit=${pageInfo.limit}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0
	});
	useEffect(() => {
		data && setPageInfo({...pageInfo, ...data?.data});
	}, [ data]);
 
	return {  loading, loyaltyCustomers: data?.data , setPageInfo, pageInfo, mutate };
};



export const useGetLoyaltySettings  = () => {
	const { state: { user }} = UseContext();
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${LOYALTY_URL}/${user?.clientId}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0
	});
 
	return {  loading, settings: data?.data?.data ,  mutate };
};



export const useRemoveLoyaltyCustomer  = () => {
	const { deleteAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);

	
	const handleRemoveLoyaltyCustomer = async (id: string) => {
		setLoading(true);
		const { data } = await  deleteAxiosHandler ({
			url: `${LOYALTY_URL}/${id}`,
			successMessage: "Customer removed"
		});
		setLoading(false);
		if(data) {
			return { data };
		}
	};

	return {  loading, handleRemoveLoyaltyCustomer };
};



export const useUpdateLoyaltSettings = () => {
	const { postAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	const { state: { user }} = UseContext();

	const handleSetLoyaltySettings = async (DATA: object) => {
		setLoading(true);
		const { data } = await  postAxiosHandler ({
			url: `${LOYALTY_URL}/${user?.clientId}`,
			DATA,
			successMessage: "Settings updated"
		});
		setLoading(false);
		if(data) {
			return { data };
		}
	};

	return {  loading, handleSetLoyaltySettings };
};