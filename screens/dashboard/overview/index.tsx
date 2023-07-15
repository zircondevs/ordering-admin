

import React, { useEffect }  from "react";
import {  Main, OverviewStyles,       } from "./styles";
import AllOrders from "./AllOrders";
import WalletSection from "./WalletSection";
import SetUp from "./set-up";
import { useGetDashboardDetails } from "../../../hooks/usedashboard";
import { STORAGE } from "../../../applications/storage";
import Constant from "../../../constants";







const Overview = () => { 
	
	const { dashboard ,  loading } = useGetDashboardDetails();

	useEffect(() => {
		const newUser = STORAGE.GET(Constant.keys.newUser);
		newUser && STORAGE.DELETE(Constant.keys.newUser);
	}, []);


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
 
