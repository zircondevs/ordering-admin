import { useEffect, useState } from "react";
import { ORDERS_URL } from "../constants/urls";
import { useGetCachedAxiosHandler } from "./useAxiosHandler";
import { UseContext } from "../state/provider";
import { useCACHE,   } from "./useCache";



 


export const useGetOrders  = ( status: "PROCESSING" | "DELIVERED" | "CANCELLED" | "ON DELIVERY" | "OPENED") => {
	const {state : { storeId}} = UseContext();
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 5,
		count: 1,
	});
 

	const { data , loading, mutate , isValidating } = useGetCachedAxiosHandler ({
		url:  `${ORDERS_URL}/${storeId}?page=${pageInfo.page}&limit=${pageInfo.limit}&status=${status}`,
		notify: false,
		requiredVariable: storeId?.length > 0 && status?.length > 0
	});

	const { CACHE ,  } =  useCACHE(data,   isValidating,  );

	useEffect(() => {
		data && setPageInfo({...pageInfo, ...data?.data});
	}, [data ]);
  

	return {    orders: CACHE?.data?.data , setPageInfo, pageInfo, mutate, isValidating, loading: loading && !(CACHE?.data?.data?.length  > 0),  status };
};
 


export const useGetOrder  = ( orderId:  string) => {
 
	const { data , loading} = useGetCachedAxiosHandler ({
		url: `${ORDERS_URL}/one/${orderId}`,
		notify: false,
		requiredVariable: orderId?.length > 0  
	});
 
	return {  loading, order: data?.data?.data   };
};
