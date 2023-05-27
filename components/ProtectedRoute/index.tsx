


import { useRouter } from "next/router";
import React, { useEffect }   from "react";
import { STORAGE } from "../../applications/storage";
import { useValidateToken } from "../../applications/validateToken";
import {   Flex, Span } from "..";
import Constant from "../../constants";
import { useLogout } from "../../hooks/handlers/useLogout";

import { isDefined } from "../../lib";
import { UseContext } from "../../state/provider";
import { Main } from "./styles";
import {  LoaderIcon, WarningIcon } from "../../public/assets/svg";
import { useGetUser } from "../../hooks/useAuth";
import { useGetAdminGeneralSettings } from "../../hooks/useSettigs";





export function ProtectedRoute({ children }: any ) {
	const { 
		state: { token, loading, user,  }, 
		setToken , setRefreshToken, setIsAuthenticated, setLoading
	} = UseContext();

 

	const { query, isReady, pathname } = useRouter();
	const {tokenIsValid } = useValidateToken();
	const { handleLogout } = useLogout();
	const { error } = useGetUser();
	useGetAdminGeneralSettings();
	
	useEffect(() => {
		const _token = query["auth-token"] as string || STORAGE.GET(Constant.keys.token);
		const _refreshToken = query["refresh-token"]as string  || STORAGE.GET(Constant.keys.refreshToken);

		if(isReady) {
			if(tokenIsValid(_token)) {
				if(_token && isDefined(_token)){
					setToken(_token);
					STORAGE.SAVE(Constant.keys.token, _token);
				}
				if(_refreshToken && isDefined(_refreshToken)){
					setRefreshToken(_refreshToken);
					STORAGE.SAVE(Constant.keys.refreshToken, _refreshToken);
				}
			}else {
				handleLogout();
			}
		}
	}, [isReady, query, pathname]);

	useEffect(() => {
		if(token && user) {
			setIsAuthenticated(true);
			setLoading(false);
		}
	}, [token, user?.accountType ]);


	if(error) return (
		<Main>
			<Flex direction="column">
				<WarningIcon height="30" width="30" colour="Error.default"/>
				<Span fontFamily='quicksand' weight="700" lineHeight="21" size="16" colour={"Grey.2"}>
					Something went wrong
				</Span>
				<Span fontFamily='quicksand' weight="700" lineHeight="19" size="14" colour={"Grey.3"}>
					Please check your network and try agaian
				</Span>
			</Flex>
		</Main>
	);


	if(loading) return (
		<Main>
			<Flex>
				<LoaderIcon width="40px" height="40px"/>
			</Flex>
		</Main>
	);

	
	return (
		<>
			{children}
		</>
	);
}

export default ProtectedRoute;
