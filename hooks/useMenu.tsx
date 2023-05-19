


 

import { useState } from "react";
import {  MENU_URL,   } from "../constants/urls";
import {   useGetCachedAxiosHandler } from "./useAxiosHandler";



 


export const useGetMenu  = (storeId: string) => {
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 10
	});
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${MENU_URL}/all/${storeId}?page=${pageInfo.page}&limit=${pageInfo.limit}`,
		notify: false,
		requiredVariable:storeId?.length > 0
	});
 
	return {  loading, menu: data?.data , setPageInfo, pageInfo, mutate };
};
 