/* eslint-disable no-unused-vars */
import { GenericObjTypes } from "../constants/types";
import { 
	SET_IS_AUTHENTICATED, SET_LOADING,  SET_REFRESH_TOKEN,   SET_TOKEN, SET_USER, SET_CLIENT, SET_REAL_TIME_ORDERS, SET_STORE_ID, SET_REAL_TIME_ORDER, SET_ROLE_MANAGEMENT,   
} from "./actions";



export type StateType = {
	token: string,
	refreshToken: string,
	isAuthenticated: boolean,
	user:  {  [key: string]: any },
	loading: boolean,
	realTimeOrders:   GenericObjTypes[],
	client: GenericObjTypes;
	storeId: string
	roleMangt:   {accountType: "" | "STAFF" | "CLIENT_ADMIN", moduleAccessible: {name: string, method: string[]}[]}
}

export type ActionTypes =
{
	type:  typeof SET_TOKEN 
	payload: string
}
|
{
	type:  typeof SET_REFRESH_TOKEN 
	payload: string
}
|
{
	type:  typeof SET_IS_AUTHENTICATED 
	payload: boolean
}
| 
{
	type:  typeof SET_USER
	payload:    {  [key: string]: any }
}
| 
{
	type:  typeof SET_LOADING
	payload:  boolean
}
|
{
	type:  typeof SET_CLIENT
	payload:  GenericObjTypes
}
 
|
{
	type:  typeof SET_REAL_TIME_ORDERS
	payload:  GenericObjTypes[]
}
|
{
	type:  typeof SET_REAL_TIME_ORDER
	payload:  GenericObjTypes
}
|
{
	type:  typeof SET_STORE_ID
	payload:  string
}
|
{
	type:  typeof SET_ROLE_MANAGEMENT
	payload: {accountType: "" | "STAFF" | "CLIENT_ADMIN", moduleAccessible: {name: string, method: string[]}[]}
}
 

export type ContestTypes =  {
	setToken: (e: string) => void;
	setRefreshToken: (e: string) => void;
	setIsAuthenticated: (e: boolean) => void;
	setUser: (e: {   [key: string]: any }) => void;
	setLoading: (e: boolean ) => void;
	setClient: (e:  GenericObjTypes ) => void;
	setRealTimeOrder: (e:  GenericObjTypes ) => void;
	setRealTimeOrders: (e:  GenericObjTypes[] ) => void;
	setStoreId: (e:  string ) => void;
	setRoleMangt: (e:    {accountType: "" | "STAFF" | "CLIENT_ADMIN", moduleAccessible: {name: string, method: string[]}[]} ) => void;
	state: StateType
}