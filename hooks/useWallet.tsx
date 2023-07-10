












import { useEffect, useState } from "react";
import {   WALLET_URL,  } from "../constants/urls";
import { UseContext } from "../state/provider";
import {   useGetCachedAxiosHandler } from "./useAxiosHandler";
import { extractQueryString } from "../lib";




 


export const useGetBalanceLog  = (pageInfoData?: {day?: number, month?: number, year?: number}) => {
	const { state: { user }} = UseContext();
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 6,
		pages: 1,
		count: 0
	});
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${WALLET_URL}/daily-wallet?clientId=${user?.clientId}&page=${pageInfo.page}&limit=${pageInfo.limit}${pageInfoData ? `&${extractQueryString(pageInfoData)}` : ""}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0
	});
	useEffect(() => {
		data && setPageInfo({...pageInfo, ...data?.data?.data});
	}, [ data]);
 
	return {  loading, logs: data?.data?.data?.data, setPageInfo, pageInfo, mutate };
};
 
 


export const useGetWidthdrawlLog  = (pageInfoData?: {day?: number, month?: number, year?: number}) => {
	const { state: { user }} = UseContext();
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 6,
		pages: 1,
		count: 0
	});


	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${WALLET_URL}/withdrawal?clientId=${user?.clientId}&page=${pageInfo.page}&limit=${pageInfo.limit}${pageInfoData ? `&${extractQueryString(pageInfoData)}` : ""}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0
	});
	useEffect(() => {
		data && setPageInfo({...pageInfo, ...data?.data?.data});
	}, [ data]);
 
	return {  loading, widthDrawlLogs: data?.data?.data?.data, setPageInfo, pageInfo, mutate };
};
 
 