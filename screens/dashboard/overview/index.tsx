

import React   from "react";
import {  Main, OverviewStyles,       } from "./styles";
import AllOrders from "./AllOrders";
import WalletSection from "./WalletSection";
import SetUp from "./set-up";
import { useGetDashboardDetails } from "../../../hooks/usedashboard";
 







const Overview = () => { 
	
	const { dashboard ,  loading } = useGetDashboardDetails();




	return (
		<Main alignItems="stretch">

			<OverviewStyles>
				<SetUp {...{dashboard, loading}}  />
				<WalletSection {...{dashboard}} />
			</OverviewStyles>


			<AllOrders  />
		</Main>
	);
};
export default Overview;
 
