


import { useRouter } from "next/router";
import React, { useEffect }   from "react";
import { STORAGE } from "../../applications/storage";
import { useValidateToken } from "../../applications/validateToken";
import {   Bold, Flex, Span } from "..";
import Constant from "../../constants";
import { useLogout } from "../../hooks/handlers/useLogout";

import { isDefined, singleSpace } from "../../lib";
import { UseContext } from "../../state/provider";
import { Animate, Main } from "./styles";
import {   OTHAIcon, WarningIcon } from "../../public/assets/svg";
import { useGetUser } from "../../hooks/useAuth";
import { useGetAdminGeneralSettings, useGetStaffRoles } from "../../hooks/useSettigs";





export function ProtectedRoute({ children }: any ) {
	const { 
		state: { token, loading, user,  roleMangt}, 
		setToken , setRefreshToken, setIsAuthenticated, setLoading
	} = UseContext();


	
	const { query, isReady, pathname } = useRouter();
	const {tokenIsValid } = useValidateToken();
	const { handleLogout } = useLogout();
	const { error,  isValidating  } = useGetUser();
	useGetAdminGeneralSettings();
	
	useGetStaffRoles();
	
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
		if(token &&  user?.accountType && !isValidating && roleMangt.accountType?.length > 0) {
			setIsAuthenticated(true);
			setLoading(false);
		}else{
			setLoading(true);
		}
	}, [token, user?.accountType, isValidating,  roleMangt.accountType ]);


	


	
	if(loading ) return (
		<Animate>
			<Flex>
				<Flex width="auto">
					<OTHAIcon height="30" width="30" colour="Orange.default"/>
					{singleSpace()}
					<Bold  weight="600" fontFamily='quicksandMedium' lineHeight="32" size="24" colour={"Grey.1"} center>
						Otha
					</Bold>
				</Flex>
				<Flex width="auto" className="fixed">
					<OTHAIcon height="30" width="30" colour="Grey.1"/>
					{singleSpace()}
					<Bold  weight="600" fontFamily='quicksandMedium' lineHeight="32" size="24" colour={"Grey.1"} center>
						Otha
					</Bold>
				</Flex>
			</Flex>
		</Animate>
	);


	if(error) return (
		<Main>
			<Flex direction="column">
				<WarningIcon height="30" width="30" colour="Error.default"/>
				<Span fontFamily='ubuntu' weight="700" lineHeight="21" size="16" colour={"Grey.2"}>
					Something went wrong
				</Span>
				<Span fontFamily='ubuntu' weight="700" lineHeight="19" size="14" colour={"Grey.3"}>
					Please check your network and try again
				</Span>
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
