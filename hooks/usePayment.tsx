












import { useState } from "react";
import {   PAYMENT_URL,  } from "../constants/urls";
import {   useAxiosHandler, useGetCachedAxiosHandler } from "./useAxiosHandler";
import Notify from "../applications/notification";





 


export const useGetBanks  = () => {
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${PAYMENT_URL}/bank/name`,
		notify: false,

	});
 
 
	return {  loading, banks: data?.data,  mutate };
};






export const useVerifyAccount  = () => {
	const { putAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	
	const handleVerifyAccount = async (DATA: object) => {
		setLoading(true);
		const { data } = await  putAxiosHandler ({
			url: `${PAYMENT_URL}/verify/account`,
			DATA,
			notify: false
		});
		setLoading(false);
		if(data) {
			data?.success === false &&	Notify().error("Unable to verify bank account");
			return { data };
		}
	};
 
	return {  loading, handleVerifyAccount };
};


 