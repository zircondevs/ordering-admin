





import { useEffect, useState } from "react";
import { DASHBOARD_URL,  } from "../constants/urls";
import { UseContext } from "../state/provider";
import {   useGetCachedAxiosHandler } from "./useAxiosHandler";




 


export const useGetPaymentLogs  = (pageInfoData?: {limit?: number}) => {
	const { state: { user }} = UseContext();
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 6,
		pages: 1,
		...pageInfoData
	});
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${DASHBOARD_URL}/${user?.clientId}?page=${pageInfo.page}&limit=${pageInfo.limit}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0
	});
	useEffect(() => {
		data && setPageInfo({...pageInfo, ...data?.data});
	}, [ data]);
 
	return {  loading, logs: [], setPageInfo, pageInfo, mutate };
};
 
 