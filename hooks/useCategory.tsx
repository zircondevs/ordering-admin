




import { useState } from "react";
import { MENU_URL,   } from "../constants/urls";
import { UseContext } from "../state/provider";
import { useAxiosHandler, useGetCachedAxiosHandler } from "./useAxiosHandler";



 


export const useGetCategories  = () => {
	const { state: { user}} = UseContext();
	const { data , loading} = useGetCachedAxiosHandler ({
		url: `${MENU_URL}/categories/${user?.clientId}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0
	});
 
	return {  loading, categories: data  };
};
 

export const useCreateCategory  = () => {
	const { state: { user }} = UseContext();
	const { postAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	
	const handleCreateCategory = async (DATA: object) => {
		setLoading(true);
		const { data } = await  postAxiosHandler ({
			url: `${MENU_URL}/categories/${user?.clientId}`,
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


