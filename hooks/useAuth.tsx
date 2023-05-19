import { useEffect, useState } from "react";
import { AUTH_URL } from "../constants/urls";
import { useAxiosHandler, useGetCachedAxiosHandler } from "./useAxiosHandler";
import { UseContext } from "../state/provider";
import { STORAGE } from "../applications/storage";
import Constant from "../constants";




 


export const useLogin  = () => {
	const { postAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	const { setToken, setRefreshToken} = UseContext();

	
	const handleLogin = async (DATA: object) => {
		setLoading(true);
		const { data } = await postAxiosHandler ({
			url: `${AUTH_URL}/admin-login`,
			DATA,
			successMessage: "Login successfully",
		});
		setLoading(false);
		if(data)   { 
			setToken("");
			setRefreshToken("");
			STORAGE.SAVE(Constant.keys.token, data?.data?.access_token);
			STORAGE.SAVE(Constant.keys.refreshToken, data?.data?.refresh_token);
			return { data};
		}
	};
	return { handleLogin, loading  };
};



 


export const useForgotPassword  = () => {
	const { postAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	
	const handleForgotPassword = async (DATA: string) => {
		setLoading(true);
		const { data } = await postAxiosHandler ({
			url: `${AUTH_URL}/forgot-password`,
			DATA: DATA,
			successMessage: "Password reset successfully",
		});
		setLoading(false);
		if(data)   { 
			return { data};
		}
	};
	return { handleForgotPassword, loading  };
};



export const useGetUser  = () => {
	const {setUser} = UseContext();
 
	const { data , loading, error} = useGetCachedAxiosHandler ({
		url: `${AUTH_URL}/me`,
		notify: false
	});
	useEffect(() => {
		setUser(data?.data?.data);
	}, [ data ]);
	return {  loading , error };
};
