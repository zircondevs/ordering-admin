
import React, { createContext, useReducer} from "react";
import { 
 
	SET_IS_AUTHENTICATED, SET_LOADING, 
	SET_REFRESH_TOKEN,   SET_TOKEN, SET_USER, SET_CLIENT, SET_REAL_TIME_ORDERS, SET_STORE_ID, SET_REAL_TIME_ORDER, SET_ROLE_MANAGEMENT 
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
	client: {},
	realTimeOrders: [],
	storeId: "",
	roleMangt: {
		accountType: "",
		moduleAccessible: []
	}
};




export function ProviderContext({ children }: any ) {
	const [state, dispatch] = useReducer(reducer, initialState);
 
	const setToken = (payload: string) => dispatch({ type: SET_TOKEN, payload }); 
	const setRefreshToken = (payload: string) => dispatch({ type: SET_REFRESH_TOKEN, payload }); 
	const setIsAuthenticated = (payload: boolean) => dispatch({ type: SET_IS_AUTHENTICATED, payload }); 
	const setUser = (payload:  {  [key: string]: any }) => dispatch({ type: SET_USER, payload }); 
	const setLoading = (payload:  boolean ) => dispatch({ type: SET_LOADING, payload }); 
	const setClient = (payload:  GenericObjTypes) => dispatch({ type: SET_CLIENT, payload }); 
	const setRealTimeOrder = (payload:  GenericObjTypes) => dispatch({ type: SET_REAL_TIME_ORDER, payload }); 
	const setRealTimeOrders = (payload:  GenericObjTypes[]) => dispatch({ type: SET_REAL_TIME_ORDERS, payload }); 
	const setStoreId = (payload:  string) => dispatch({ type: SET_STORE_ID, payload }); 
	const setRoleMangt = (payload:  {accountType: "" | "STAFF" | "CLIENT_ADMIN", moduleAccessible: {name: string, method: string[]}[]} ) => dispatch({ type: SET_ROLE_MANAGEMENT, payload }); 


	return (
		<Context.Provider 
			value={{
				state, 
				setToken,
				setRefreshToken,
				setIsAuthenticated,
				setUser,
				setLoading,
				setClient,
				setRealTimeOrder,
				setStoreId,
				setRealTimeOrders,
				setRoleMangt
			}}
		>
			{children}
		</Context.Provider>
	);
}

export const UseContext = () => React.useContext(Context);
