import { useEffect, useState } from "react";
import { ORDERS_URL } from "../constants/urls";
import { useGetCachedAxiosHandler } from "./useAxiosHandler";
import { UseContext } from "../state/provider";



 


export const useGetOrders  = ( status: string) => {
	const {state : { storeId}} = UseContext();
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 5
	});
	
	const { data , loading} = useGetCachedAxiosHandler ({
		url: `${ORDERS_URL}/${storeId}?page=${pageInfo.page}&limit=${pageInfo.limit}&status=${status}`,
		notify: false,
		requiredVariable: storeId?.length > 0 && status?.length > 0
	});

	useEffect(() => {
		data && setPageInfo({...pageInfo, ...data?.data});
	}, [data ]);
 
	return {  loading, orders: data?.data , setPageInfo, pageInfo };
};
 


export const useGetOrder  = ( orderId:  string) => {
 
	const { data , loading} = useGetCachedAxiosHandler ({
		url: `${ORDERS_URL}/one/${orderId}`,
		notify: false,
		requiredVariable: orderId?.length > 0  
	});
 
	return {  loading, order: data?.data?.data   };
};
