












import { useState } from "react";
import {   PAYMENT_URL,   WALLET_URL,  } from "../constants/urls";
import {   useAxiosHandler, useGetCachedAxiosHandler } from "./useAxiosHandler";
import Notify from "../applications/notification";
import { UseContext } from "../state/provider";





 


export const useGetBanks  = () => {
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${PAYMENT_URL}/bank/name`,
		notify: false,

	}); 
 
	return {  loading, banks: data?.data,  mutate };
};


export const useGetTotalPaidOut  = () => {
	const {state: { client }} =  UseContext();
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${WALLET_URL}/get-total-withdrawal/${client?.clientId}`,
		notify: false,

	}); 
	return {  loading, totalPaidOut: data?.data,  mutate };
};






export const useVerifyAccount  = () => {
	const { putAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	
	const handleVerifyAccount = async (DATA: object) => {
		setLoading(true);
		const { data , error} = await  putAxiosHandler ({
			url: `${PAYMENT_URL}/verify/account`,
			DATA,
			notify: false
		});
		setLoading(false);
		if(data) {
			data?.success === false &&	Notify().error("Unable to verify bank account");
			return { data : data?.data?.data };
		}
		if(error){
			Notify().error("Unable to verify bank account");
		}
	};
 
	return {  loading, handleVerifyAccount };
};




 