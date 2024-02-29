import {  useEffect, useState } from "react";
import { AUTH_URL,   } from "../constants/urls";
import {   useGetCachedAxiosHandler } from "./useAxiosHandler";
import { UseContext } from "../state/provider";
import { useCACHE } from "./useCache";
 



 


export const usegetCustomers  = () => {
	const {state: { user }} = UseContext();
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 10,
		pages: 1,
		count: 1
	});
	const { data , loading, error, isValidating} = useGetCachedAxiosHandler ({
		url: `${AUTH_URL}/users/${user?.clientId}?page=${pageInfo.page}&limit=${pageInfo.limit}`,
		notify: false
	});
 
	const { CACHE ,  } =  useCACHE(data, isValidating);

	useEffect(() => {
		data && setPageInfo({...pageInfo, ...data?.data});
	}, [ data]);
 
	return {  	
		loading: loading  && !(CACHE?.data?.data?.length > 0), 
		error , 
		customers: CACHE?.data?.data, pageInfo, setPageInfo, isValidating };
};
