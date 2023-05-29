

import React  from "react";
import {  Main,     } from "./styles";
import AllOrders from "./AllOrders";
import WalletSection from "./WalletSection";







const Overview = () => {

	
	

 

	return (
		<Main alignItems="stretch">
			<WalletSection />
			<AllOrders  />
		</Main>
	);
};
export default Overview;
 