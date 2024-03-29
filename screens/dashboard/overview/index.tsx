

import React   from "react";
import {  Main, OverviewStyles,       } from "./styles";
import AllOrders from "./AllOrders";
import WalletSection from "./WalletSection";
import SetUp from "./set-up";
import { useGetDashboardDetails } from "../../../hooks/usedashboard";
import StoreLink from "../../../components/StoreLink";
import { Spacer } from "../../../components/Spacer";
 







const Overview = () => { 
	
	const { dashboard ,  loading } = useGetDashboardDetails();




	return (
		<Main alignItems="stretch">

			<OverviewStyles>
				<Spacer height="40px"/>
				<StoreLink />
				<SetUp {...{dashboard, loading}}  />
				<WalletSection {...{dashboard}} />
			</OverviewStyles>



			<AllOrders  />
		</Main>
	);
};
export default Overview;
 
