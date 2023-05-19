import Axios from "axios";
import useSWR  from "swr";
import { errorHandler } from "./errorHandler";
import fetcher  from "./fetcher";


export interface ObjectLiteral {
    [key: string]: any;
}
type AxiosProps = {
    method: string;
    url: string;
    token?: string;
    clientID?: string;
    data?: ObjectLiteral;
    extra?: any;
	headers?: object,
    queryParam?: ObjectLiteral;
  };

export const axiosHandler = ({
	method = "",
	url = "",
	token = "",
	data = {},
	headers = {},
	clientID = "",
	queryParam = {}
}: AxiosProps) => {
	const methodType = method.toUpperCase();
	if (["GET", "POST", "PATCH", "PUT", "DELETE"].includes(methodType)) {
		const axiosProps: any = { method: methodType, url, data };

		if (token !== "") {
			axiosProps.headers = { Authorization: `Bearer ${token}` };
		}
		if (clientID !== "") {
			axiosProps.headers = { ...axiosProps.headers, "client-id": clientID };
		}
		if (queryParam) {
			axiosProps.params = { ...queryParam };
		}
		if (headers) {
			axiosProps.headers = { ...axiosProps.headers, ...headers };
		}
		axiosProps.headers = {
			"Cache-Control": "no-cache",
			Pragma: "no-cache",
			Expires: "0",
			Accept: "application/json",
			"Content-Type": "application/json",
			"latest-version": true,
			...axiosProps.headers
		};

		return Axios(axiosProps);
	} else {
		alert(`method ${methodType} is not accepted or data is not an object`);
	}
};




export const handleAPICall = async ({url, token, method, DATA, extra = null, queryParam = {}, headers} : any) => {
	try {
		const { data }: any = await  axiosHandler({
			method,
			url,
			token,
			headers,
			...(extra && {extra}),
			...(queryParam && {queryParam}),
			...(  DATA && {data: DATA})
		});
		return { 
			data, 
			status: data?.status, 

			success: data?.success,
			message: data?.message,

		};
	} catch( error: any ){
		return {
			error: errorHandler(error || "Something went wrong"), 
			statusCode: error?.response?.data?.statusCode
		};
	}
};




export const useGetDataWithSWR = ({url, token, requiredVariable, method, options, DATA}: any) => {
	const { data, error, mutate, isValidating } = useSWR<any>(
		() => requiredVariable ? `${url}` : null,
		() => requiredVariable ? fetcher(url, method, token, DATA ) : [],
		{ ...options }
	);

	return { data, error, mutate, isValidating };
};

 