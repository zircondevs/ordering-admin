

import React  from "react";
import {  Main, OverviewStyles,       } from "./styles";
import AllOrders from "./AllOrders";
import WalletSection from "./WalletSection";
import { Spacer } from "../../../components/Spacer";
import SetUp from "./set-up";







const Overview = () => { 
	
 

	return (
		<Main alignItems="stretch">

			<OverviewStyles>
				<Spacer height="64px"/>
				<SetUp />
				<WalletSection />
			</OverviewStyles>


			<AllOrders  />
		</Main>
	);
};
export default Overview;
 
