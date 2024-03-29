import { useEffect, useState } from "react";
import { AUTH_URL, CLIENT_URL } from "../constants/urls";
import { useAxiosHandler, useGetCachedAxiosHandler } from "./useAxiosHandler";
import { UseContext } from "../state/provider";
import { STORAGE } from "../applications/storage";
import Constant from "../constants";
import { useLogout } from "./handlers/useLogout";
import Notify from "../applications/notification";





export const useLogin  = () => {
	const { postAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	const { setToken, setRefreshToken} = UseContext();

	
	const handleLogin = async (DATA: object) => {
		setLoading(true);
		const { data , error} = await postAxiosHandler ({
			url: `${AUTH_URL}/admin-login`,
			DATA,
			notify: false
		});
		setLoading(false);
		if(data?.data?.access_token)   { 
			setToken("");
			setRefreshToken("");
			STORAGE.SAVE(Constant.keys.token, data?.data?.access_token);
			STORAGE.SAVE(Constant.keys.refreshToken, data?.data?.refresh_token);
			Notify().success("Login successfully");
			return { data};
		}
		error && Notify().error(error);
	};
	return { handleLogin, loading  };
};



export const useCreateAccount  = () => {
	const { postAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);

	
	const handleCreateAccount = async (DATA: object) => {
		setLoading(true);
		const { data } = await postAxiosHandler ({
			url: `${CLIENT_URL}`,
			DATA,
			// notify: false
		});
		setLoading(false);
		if(data)   { 
			return { data};
		}
	};
	return { handleCreateAccount, loading  };
};

 


export const useForgotPassword  = () => {
	const { postAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	
	const handleForgotPassword = async (DATA: object) => {
		setLoading(true);
		const { data } = await postAxiosHandler ({
			url: `${AUTH_URL}/forgot-password`,
			DATA: DATA,
			notify: false
		});
		setLoading(false);
		if(data)   { 
			return { data};
		}
	};
	return { handleForgotPassword, loading  };
};




export const useResetPassword  = () => {
	const { postAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	
	const handleResetPassword = async (DATA: object) => {
		setLoading(true);
		const { data } = await postAxiosHandler ({
			url: `${AUTH_URL}/reset-password`,
			DATA: DATA,
			successMessage: "Password reset successfully",
		});
		setLoading(false);
		if(data)   { 
			return { data};
		}
	};
	return { handleResetPassword, loading  };
};



export const useGetUser  = () => {
	const {setUser} = UseContext();
	const { handleLogout } = useLogout();
 
	const { data , loading, error, isValidating,  } = useGetCachedAxiosHandler ({
		url: `${AUTH_URL}/me`,
		notify: false,
	});
	useEffect(() => {
		if(data?.data?.data ) {
			setUser(data?.data?.data);
			if( (data?.data?.data?.accountType !== "CLIENT_ADMIN" && data?.data?.data?.accountType !== "STAFF")) {
				Notify().warning("You are not an admin");
				handleLogout();
			}
		}else if(data?.data?.statusCode  === 401)handleLogout();
	}, [ data ]); 
	useEffect(() => {
		if(error?.response?.data?.statusCode === 401){
			handleLogout();
		}
	}, [error]);
	return {  loading , error, isValidating };
};



 