import { useEffect,   } from "react";
import Constant from "../../constants";
import { UseContext } from "../../state/provider";
import { STORAGE } from "../../applications/storage";


 

 


 




export const useCheckMutate  = ( mutate: any ) => {
 
	const { state: { token }} = UseContext();
 

	useEffect(() => {
		const cachedToken = STORAGE.GET(Constant.keys.cacheToken);
		if( !token || !cachedToken) return;


		if(token !== cachedToken){
			STORAGE.DELETE(Constant.keys.cacheToken);
			mutate();
		}
	}, [token,  ]); 
};

 