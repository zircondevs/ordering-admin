

import { useEffect } from "react";
import { timeDiffInSecs } from "../lib";
import JWT_DECODE from "jwt-decode";
import { UseContext } from "../state/provider";
import { useLogout } from "../hooks/handlers/useLogout";


export const useValidateToken = () => {
	const {  state: {  token}} = UseContext();
	const { handleLogout } = useLogout();
	const validateToken = (token: string) => {
		if(!token) return;

		try{
			const decoded = JWT_DECODE(token) as any;
			const secs = timeDiffInSecs(+decoded?.exp * 1000, new Date());//the time the token takes before it expires
		
		
			if(secs > 0) {
				if(secs < 5000) {
					// handle get new token here. Refreash token api
				} else {
					return;
				}
			} else {
				handleLogout();
				return false;
			}
		} catch (err: any) {
			if( err?.message === "Invalid token specified: undefined") {
				handleLogout();
				return false;
			}
		}
	};

	const tokenIsValid = (_token: string | null) => {
		if(!_token) return false;
		const decoded = JWT_DECODE(_token) as any;
		const secs = timeDiffInSecs(+decoded?.exp * 1000, new Date());
		return secs > 0;
	};

	useEffect(() => {
		validateToken(token);
	}, [token]);
	return { tokenIsValid };
};