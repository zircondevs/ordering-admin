import {
	SET_ADD_TO_CARTS,
	SET_MODAL,
	SET_IS_AUTHENTICATED,
	SET_LOADING,  SET_REFRESH_TOKEN, SET_REMOVE_FROM_CARTS, SET_TOKEN, SET_USER, SET_PACK, SET_CLIENT, SET_REAL_TIME_ORDERS, SET_STORE_ID, SET_REAL_TIME_ORDER,  
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

	case SET_ADD_TO_CARTS: {
		const cartCopy = [...state.carts];
		cartCopy[action.payload.pack] = state.carts[action.payload.pack] ? [...state.carts[action.payload.pack],  action.payload.cart]: [ action.payload.cart];
		return { ...state, carts: [...cartCopy], };
	}
	case SET_MODAL:
		return { ...state, modal:  action.payload, };

	case SET_PACK:
		return { ...state, pack:  action.payload, };

	case SET_REMOVE_FROM_CARTS:{
		const cartCopy = [...state.carts];

		cartCopy[action.payload.pack] = state.carts[action.payload.pack ].filter(food => food.id !== action.payload.cart.id);
		if(cartCopy?.[action.payload.pack]?.length === 0 ){
			cartCopy.splice(action.payload.pack , 1);
		}
		return { ...state, carts: [...cartCopy,]
			
		};

	}
		
 

		
	default:
		return state;
	}
};
  