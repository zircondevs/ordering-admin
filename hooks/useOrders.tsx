import { ORDERS_URL } from "../constants/urls";
import { useGetCachedAxiosHandler } from "./useAxiosHandler";



 


export const useGetOrders  = (storeId: string) => {
	const { data , loading} = useGetCachedAxiosHandler ({
		url: `${ORDERS_URL}/${storeId}`,
		notify: false,
		requiredVariable: storeId?.length > 0
	});
 
	return {  loading, orders: data  };
};
