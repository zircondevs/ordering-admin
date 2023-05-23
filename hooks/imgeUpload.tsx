


 


import { useState } from "react";
import {   useAxiosHandler,   } from "./useAxiosHandler";
import { SETTINGS_URL } from "../constants/urls";


 
 
 
export const useUploadImage  = () => {
	const { postAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	
	const handleImageUpload = async (DATA: object) => {
		setLoading(true);
		const { data } = await  postAxiosHandler ({
			url: `${SETTINGS_URL}/upload`,
			DATA,
			successMessage: "Image uploaded",
			headers: {"content-type": "multipart/form-data"}
		});
		setLoading(false);
		if(data) {
			return { data: data?.data };
		}
	};
 
	return {  loading, handleImageUpload };
};

