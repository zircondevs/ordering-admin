import {
	SET_IS_AUTHENTICATED,
	SET_LOADING,  SET_REFRESH_TOKEN,   SET_TOKEN, SET_USER, SET_CLIENT, SET_REAL_TIME_ORDERS, SET_STORE_ID, SET_REAL_TIME_ORDER, SET_ROLE_MANAGEMENT, SET_PATH_IS_ACCESSIBLE,  
} from "./actions";
import { ActionTypes, StateType } from "./types";
  


 

  
export const reducer = (state: StateType, action: ActionTypes) => {
	switch (action.type) {
	case SET_TOKEN:
		return { ...state, token: action.payload,};

	case SET_REFRESH_TOKEN:
		return { ...state, refreshToken: action.payload,};

	case SET_IS_AUTHENTICATED:
		return { ...state, isAuthenticated: action.payload,};

	case SET_CLIENT:
		return { ...state, client: action.payload, };

	case SET_USER:
		return { ...state, user: action.payload, };

	case SET_REAL_TIME_ORDERS:
		return { ...state, realTimeOrders:   [...action.payload ], };

	case SET_REAL_TIME_ORDER:
		return { ...state, realTimeOrder: [ action.payload, ...state.realTimeOrders ], };

	case SET_LOADING:
		return { ...state, loading: action.payload, };

	case SET_STORE_ID:
		return { ...state, storeId: action.payload, };

	case SET_ROLE_MANAGEMENT:
		return { ...state, roleMangt: action.payload, };
		
	case SET_PATH_IS_ACCESSIBLE:
		return { ...state, pathIsAccessible: action.payload, };

  
		
	default:
		return state;
	}
};
  