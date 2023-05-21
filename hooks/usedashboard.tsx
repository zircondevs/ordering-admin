

 

import { DASHBOARD_URL,   } from "../constants/urls";
import { useGetCachedAxiosHandler } from "./useAxiosHandler";
import { UseContext } from "../state/provider";



  

export const useGetDashboardDetails  = () => {
	const  {state: { user }} = UseContext();
	
	const { data , loading} = useGetCachedAxiosHandler ({
		url: `${DASHBOARD_URL}/${user?.clientId}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0  
	});
 
	return {  loading, dashboard: data?.data?.data   };
};

 