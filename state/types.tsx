/* eslint-disable no-unused-vars */
import { GenericObjTypes } from "../constants/types";
import { 
	SET_ADD_TO_CARTS,
	SET_MODAL,
	SET_IS_AUTHENTICATED, SET_LOADING,  SET_REFRESH_TOKEN, SET_REMOVE_FROM_CARTS, SET_TOKEN, SET_USER, SET_PACK, SET_CLIENT, SET_REAL_TIME_ORDERS, SET_STORE_ID,   
} from "./actions";



export type StateType = {
	token: string,
	refreshToken: string,
	isAuthenticated: boolean,
	user:  {  [key: string]: any },
	loading: boolean,
	carts:   GenericObjTypes[][],
	realTimeOrders:   GenericObjTypes[],
	modal: string,
	pack: number
	client: GenericObjTypes;
	storeId: string
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
	type:  typeof SET_ADD_TO_CARTS
	payload: {pack: number, cart: GenericObjTypes}
}
 
| 
{
	type:  typeof SET_REMOVE_FROM_CARTS
	payload:  {pack: number, cart: GenericObjTypes}
}
 |
{
	type:  typeof SET_MODAL
	payload:  string
}
 |
{
	type:  typeof SET_PACK
	payload:  number
}
|
{
	type:  typeof SET_CLIENT
	payload:  GenericObjTypes
}
 
|
{
	type:  typeof SET_REAL_TIME_ORDERS
	payload:  GenericObjTypes
}
|
{
	type:  typeof SET_STORE_ID
	payload:  string
}
 

export type ContestTypes =  {
	setToken: (e: string) => void;
	setRefreshToken: (e: string) => void;
	setIsAuthenticated: (e: boolean) => void;
	setUser: (e: {   [key: string]: any }) => void;
	setLoading: (e: boolean ) => void;
	setAddToCarts: (e: {pack: number, cart: GenericObjTypes} ) => void;
	setRemoveFromCarts: (e: {pack: number, cart: GenericObjTypes} ) => void;
	setModal: (e:  string ) => void;
	setClient: (e:  GenericObjTypes ) => void;
	setRealTimeOrders: (e:  GenericObjTypes ) => void;
	setStoreId: (e:  string ) => void;
	setPack: (e:  number ) => void;
	state: StateType
}