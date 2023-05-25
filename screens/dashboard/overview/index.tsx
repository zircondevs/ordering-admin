

import React, {   useState }   from "react";
import {  Main,     } from "./styles";
import AllOrders from "./AllOrders";
import WalletSection from "./WalletSection";







const Overview = () => {
	const [storeId , setStoreId] = useState("");

	

 

	return (
		<Main alignItems="stretch">
			<WalletSection {...{storeId , setStoreId }} />
			<AllOrders  storeId={storeId}/>
		</Main>
	);
};
export default Overview;
 