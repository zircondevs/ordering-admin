/* eslint-disable max-lines */



 


import { useEffect, useState } from "react";
import { UseContext } from "../state/provider";
import {   useAxiosHandler, useGetCachedAxiosHandler } from "./useAxiosHandler";
import { SETTINGS_URL } from "../constants/urls";




 


export const useGetAdminUsers  = () => {
	const { state: { user }} = UseContext();
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 10
	});
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${SETTINGS_URL}/users/${user?.clientId}?page=${pageInfo.page}&limit=${pageInfo.limit}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0
	});
 
	return {  loading, users: data?.data , setPageInfo, pageInfo, mutate };
};
 


export const useGetStorePolicy  = () => {
	const { state: { user }} = UseContext();
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${SETTINGS_URL}/policies/${user?.clientId}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0
	});
 
	return {  loading, policy: data?.data ,  mutate };
};
 


export const useGetAdminGeneralSettings  = () => {
	const { state: { user ,}, setClient} = UseContext();
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 10
	});
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${SETTINGS_URL}/general/${user?.clientId}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0
	});

	useEffect(() => {
		data && setClient(data?.data?.data);
	}, [ data ]);
 
	return {  loading, settings: data?.data?.data , setPageInfo, pageInfo, mutate };
};
 
 
export const useGetAdminRoles = () => {
	const { state: { user }} = UseContext();
	const [pageInfo, setPageInfo] = useState({
		page: 1,
		limit: 10
	});
	const { data , loading, mutate} = useGetCachedAxiosHandler ({
		url: `${SETTINGS_URL}/roles/${user?.clientId}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0
	});
 
	return {  loading, roles: data?.data?.data , setPageInfo, pageInfo, mutate };
};
 
 

export const useUpdateAccountSettings  = () => {
	const { state: { user }} = UseContext();
	const { patchAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	
	const handleUpdateAccSettings = async (DATA: object) => {
		setLoading(true);
		const { data } = await  patchAxiosHandler ({
			url: `${SETTINGS_URL}/${user?.clientId}`,
			DATA,
			successMessage: "Settings updated"
		});
		setLoading(false);
		if(data) {
			return { data };
		}
	};
 
	return {  loading, handleUpdateAccSettings };
};


export const useSetUpStore  = () => {
	const { state: { user }} = UseContext();
	const { postAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	
	const handleSetUpStore = async (DATA: object) => {
		setLoading(true);
		const { data } = await  postAxiosHandler ({
			url: `${SETTINGS_URL}/setup/${user?.clientId}`,
			DATA,
			successMessage: "Settings updated"
		});
		setLoading(false);
		if(data) {
			return { data };
		}
	};
 
	return {  loading, handleSetUpStore };
};

export const useAddSettingsUser  = () => {
	const { state: { user }} = UseContext();
	const { postAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);

	const handleAddSettingsUser = async (DATA: object) => {
		setLoading(true);
		const { data } = await  postAxiosHandler ({
			url: `${SETTINGS_URL}/users/${user?.clientId}`,
			DATA,
			successMessage: "User add successfully"
		});
		setLoading(false);
		if(data) {
			return { data };
		}
	};
 
	return {  loading, handleAddSettingsUser };
};


 

export const useUpdateSettingsUser  = (userId: string) => {
	const { putAxiosHandler } = useAxiosHandler();
	const [loading, setLoading] = useState(false);
	
	const handleUpdateSettingsUser = async (DATA: object) => {
		setLoading(true);
		const { data } = await  putAxiosHandler ({
			url: `${SETTINGS_URL}/users/${userId}`,
			DATA,
			successMessage: "User updated successfully"
		});
		setLoading(false);
		if(data) {
			return { data };
		}
	};
 
	return {  loading, handleUpdateSettingsUser };
};


 