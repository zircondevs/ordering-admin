
import { handleAPICall, useGetDataWithSWR } from "../lib/axiosHandler";
import { errorHandler, messageHandler} from "../lib/errorHandler";
import { useCallback } from "react";
import  {  useSWRConfig } from "swr";
import { UseContext } from "../state/provider";
import Notify from "../applications/notification";
import { AxiosCallTypes, CacheAxiosTypes } from "../constants/types";



export const useAxiosHandler = () => {
	const { state: { token: Token } } = UseContext();

	// Axios get  cached calls
	const getAxiosHandler =  useCallback(async (
		{url, token = Token, notify = true,   DATA,  queryParam }: AxiosCallTypes
	) => {
		const { data, error } = await handleAPICall({url, token, method: "get", notify, DATA,  queryParam});
		return { data, error };
	}, [  Token ]);

	// Axios post calls
	const postAxiosHandler =  async (
		{url, token = Token, notify = true, DATA, successMessage, errorMessage, headers }: 
		AxiosCallTypes & {headers?: any}
	) => {
		const { data, status, error, success , message , statusCode } = await handleAPICall({ url, token, method: "post", DATA, headers });
 
		notify  && data && Notify().success(  successMessage || messageHandler(message) );
		notify  && error && Notify().error( errorMessage || errorHandler( error )  );
		return { data, status, error, success , message, statusCode };
	};

	// Axios post calls
	const patchAxiosHandler =  async (
		{url, token = Token, notify = true, DATA, successMessage, errorMessage, headers }: 
		AxiosCallTypes & {headers?: any}
	) => {
		const { data, status, error, success , message , statusCode } =  await handleAPICall({ url, token, method: "patch", DATA, headers });
		notify  && data && Notify().success(  successMessage || messageHandler(message) );
		notify  && error && Notify().error( errorMessage || errorHandler( error )  );
		return { data, status, error, success , message, statusCode };
	};

	// Axios put calls
	const putAxiosHandler =  async ({url, token = Token, notify = true, DATA, successMessage }: AxiosCallTypes) => {
		const { data, status, error, success , message} = await handleAPICall({ url, token, method: "put", DATA });
		notify  && data && Notify().success(  successMessage || messageHandler(message) );
		notify  && error && Notify().error( errorHandler( error ) );
		return { data, status, error, success , message };
	};

	// Axios put calls
	const deleteAxiosHandler =  async ({url, token = Token, notify = true, DATA, successMessage }: AxiosCallTypes) => {
		const { data, status, error, success , message } = await handleAPICall({ url, token, method: "delete", DATA });
		notify  && data && Notify().success(  successMessage || messageHandler(message)  );
		notify  && error && Notify().error(  errorHandler( error ));
		return { data, status, error, success , message };
	};

	return { 
		getAxiosHandler, 
		putAxiosHandler, 
		postAxiosHandler,
		deleteAxiosHandler,
		patchAxiosHandler
	};
};





// get request
export const useGetCachedAxiosHandler = ( 
	{url, notify = true, requiredVariable  = true, options = {}, DATA,  errMessage = "", token}: CacheAxiosTypes
) => {
	const { state: { token: Token } } = UseContext();
	
	const { data, error, mutate, isValidating } = useGetDataWithSWR({
		url, 
		token: token || Token, 
		requiredVariable: Token && requiredVariable, 
		method: "get", 
		...(DATA && {DATA}),
		options: { 
			refreshInterval:  0, 
			revalidateIfStale: false, 
			shouldRetryOnError: false, 
			revalidateOnFocus: false, 
			...options
		}, 
	});
	error && notify && Notify().error( errMessage  ? errMessage :  (errorHandler(error) || "Somethng went wrong") );
	return {
		data:  data,
		loading: requiredVariable  ? !error && !data : false,
		error,
		mutate,
		isValidating
	};
};
// post request
export const usePostCachedAxiosHandler = ( 
	{url, notify = true, requiredVariable  = true, options = {}, DATA, errMessage = "" }: CacheAxiosTypes ) => {
	const { state: { token: Token } } = UseContext();

	const { data, error,mutate, isValidating } = useGetDataWithSWR({
		url, 
		token: Token, 
		requiredVariable:   requiredVariable, 
		method: "post", 
		...(DATA && {DATA}),
		options: { 
			refreshInterval:  0, 
			revalidateIfStale: false, 
			shouldRetryOnError: false, 
			revalidateOnFocus: false, 
			...options
		}, 
	});
	error && notify && Notify().error(  errMessage  ? errMessage :  (errorHandler(error) || "Somethng went wrong") );
	return {
		data:  data?.data,
		loading: requiredVariable  ? !error && !data : false,
		error,
		mutate,
		isValidating
	};
};
 
export const useMutate = () => {
	const { mutate } = useSWRConfig();
	return { mutate };
};