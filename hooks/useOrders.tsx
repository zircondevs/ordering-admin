import { useState } from "react";
import { ORDERS_URL } from "../constants/urls";
import { useGetCachedAxiosHandler } from "./useAxiosHandler";



 


export const useGetOrders  = (storeId: string, status: string) => {
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 10
	});
	
	const { data , loading} = useGetCachedAxiosHandler ({
		url: `${ORDERS_URL}/${storeId}?page=${pageInfo.page}&limit=${pageInfo.limit}&status=${status}`,
		notify: false,
		requiredVariable: storeId?.length > 0 && status?.length > 0
	});
 
	return {  loading, orders: data?.data , setPageInfo, pageInfo };
};
