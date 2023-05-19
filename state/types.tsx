/* eslint-disable no-unused-vars */
import { GenericObjTypes } from "../constants/types";
import { 
	SET_ADD_TO_CARTS,
	SET_MODAL,
	SET_IS_AUTHENTICATED, SET_LOADING,  SET_REFRESH_TOKEN, SET_REMOVE_FROM_CARTS, SET_TOKEN, SET_USER, SET_PACK,   
} from "./actions";



export type StateType = {
	token: string,
	refreshToken: string,
	isAuthenticated: boolean,
	user:  {  [key: string]: any },
	loading: boolean,
	carts:   GenericObjTypes[][],
	modal: string,
	pack: number
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
 
 

export type ContestTypes =  {
	setToken: (e: string) => void;
	setRefreshToken: (e: string) => void;
	setIsAuthenticated: (e: boolean) => void;
	setUser: (e: {   [key: string]: any }) => void;
	setLoading: (e: boolean ) => void;
	setAddToCarts: (e: {pack: number, cart: GenericObjTypes} ) => void;
	setRemoveFromCarts: (e: {pack: number, cart: GenericObjTypes} ) => void;
	setModal: (e:  string ) => void;
	setPack: (e:  number ) => void;
	state: StateType
}