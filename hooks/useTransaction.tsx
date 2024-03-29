





import { useEffect, useState } from "react";
import { TRANSACTION_URL } from "../constants/urls";
import { UseContext } from "../state/provider";
import {   useGetCachedAxiosHandler } from "./useAxiosHandler";
import { useRouter } from "next/router";
import { useCACHE } from "./useCache";



 


export const useGetTransactions  = (pageInfoData?: {limit?: number}) => {
	const { state: { user }} = UseContext();
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 6,
		pages: 1,
		...pageInfoData
	});
	const { data , loading, mutate, isValidating} = useGetCachedAxiosHandler ({
		url: `${TRANSACTION_URL}/${user?.clientId}?page=${pageInfo.page}&limit=${pageInfo.limit}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0
	});

	const { CACHE ,  } =  useCACHE(data, isValidating);


	useEffect(() => {
		data && setPageInfo({...pageInfo, ...data?.data});
	}, [ data]);
 
	return {  
		loading: loading  && !(CACHE?.data?.data?.length > 0), 
		transactions: CACHE?.data , setPageInfo, pageInfo, mutate , isValidating
	};
};
 

export const useGetStoreTransactions  = () => {
	const { state: { user }} = UseContext();
	const  { query,   } = useRouter();

	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 6,
		pages: 1,
	});
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${TRANSACTION_URL}/stores/${user?.clientId}/${query?.storeId}?page=${pageInfo.page}&limit=${pageInfo.limit}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0
	});
	useEffect(() => {
		data && setPageInfo({...pageInfo, ...data?.data});
	}, [ data]);
 
	return {  loading, transactions: data?.data , setPageInfo, pageInfo, mutate };
};
 




