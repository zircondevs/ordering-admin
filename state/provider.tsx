
import React, { createContext, useReducer} from "react";
import { 
	SET_ADD_TO_CARTS,
	SET_MODAL,
	SET_IS_AUTHENTICATED, SET_LOADING, 
	SET_REFRESH_TOKEN, SET_REMOVE_FROM_CARTS, SET_TOKEN, SET_USER, SET_PACK 
} from "./actions";
import { reducer } from "./reducer";
import { ContestTypes, StateType } from "./types";
import { GenericObjTypes } from "../constants/types";


export const Context = createContext({} as ContestTypes);



const initialState: StateType = {
	token: "",
	refreshToken: "",
	isAuthenticated: false,
	user: {},
	loading: true,
	carts: [],
	pack: 0,
	modal: ""
};




export function ProviderContext({ children }: any ) {
	const [state, dispatch] = useReducer(reducer, initialState);
 
	const setToken = (payload: string) => dispatch({ type: SET_TOKEN, payload }); 
	const setRefreshToken = (payload: string) => dispatch({ type: SET_REFRESH_TOKEN, payload }); 
	const setIsAuthenticated = (payload: boolean) => dispatch({ type: SET_IS_AUTHENTICATED, payload }); 
	const setUser = (payload:  {  [key: string]: any }) => dispatch({ type: SET_USER, payload }); 
	const setLoading = (payload:  boolean ) => dispatch({ type: SET_LOADING, payload }); 
	const setAddToCarts = (payload:  {pack: number, cart: GenericObjTypes} ) => dispatch({ type: SET_ADD_TO_CARTS, payload }); 
	const setRemoveFromCarts = (payload:  {pack: number, cart: GenericObjTypes}) => dispatch({ type: SET_REMOVE_FROM_CARTS, payload }); 
	const setModal = (payload:  string) => dispatch({ type: SET_MODAL, payload }); 
	const setPack = (payload:  number) => dispatch({ type: SET_PACK, payload }); 


	return (
		<Context.Provider 
			value={{
				state, 
				setToken,
				setRefreshToken,
				setIsAuthenticated,
				setUser,
				setLoading,
				setAddToCarts,
				setRemoveFromCarts,
				setModal,
				setPack
			}}
		>
			{children}
		</Context.Provider>
	);
}

export const UseContext = () => React.useContext(Context);
