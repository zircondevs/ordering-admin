

 

import { DASHBOARD_URL,   } from "../constants/urls";
import { useGetCachedAxiosHandler } from "./useAxiosHandler";
import { UseContext } from "../state/provider";







  

export const useGetDashboardDetails  = () => {
	const  {state: { user }} = UseContext();
	
	const { data , loading ,      } = useGetCachedAxiosHandler ({
		url: `${DASHBOARD_URL}/${user?.clientId}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0  
	});


	
	return {  loading, dashboard: data?.data?.data   };
};

 

export const useGetCustomerChart  = (filterString?: string) => {
	const  {state: { user }} = UseContext();
	
	const { data , loading ,  error    } = useGetCachedAxiosHandler ({
		url: `${DASHBOARD_URL}/order-chart/${user?.clientId}${filterString ? `?filter=${filterString}` : ""}`,
		notify: false,
		requiredVariable: user?.clientId?.length > 0  
	});


	
	return {  loading, customerChart: data?.data?.data , error  };
};

 