import { axiosHandler } from "./axiosHandler";


 
const fetcher = async (url: string, method: string, token: string, DATA: any ) => {
	const { data }: any = await axiosHandler({ method, url, token, data: DATA });
	return { data };
};

export default fetcher;