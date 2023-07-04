

import React  from "react";
import {  Main, OverviewStyles, TabsStyles,       } from "./styles";

import WalletSection from "./WalletSection";
import { useGetDashboardDetails } from "../../../hooks/usedashboard";
import { GeneralTabStyle } from "../../../components/styles";
import { Bold, Tabs } from "../../../components";
import { SettingsIcon } from "../../../public/assets/svg";







const Overview = () => { 
	
	const { dashboard ,    } = useGetDashboardDetails();

	const tabData = [
		{
			head: "Overview",
			body:  	<WalletSection {...{dashboard}} />,
			key: "PROCESSING"
		},
		{
			head:  <>Settings <SettingsIcon  height="15" width="15"/></>,
			body: "ds",
			key: "DELIVERED"
		},
	];

	return (
		<Main alignItems="stretch">
			<OverviewStyles height="auto" justifyContent="space-between" margin='64px 0 40px'>
				<Bold fontFamily='ubuntuSemiBold' weight="700" lineHeight="28" size="24" colour={"Grey.2"}>
					Payment
				</Bold>
			</OverviewStyles>

			<TabsStyles>
				<GeneralTabStyle>
					<Tabs
						nonActiveColor="Grey.2"
						activeColor="Blue.base.default"
						click={(e) => console.log(e.key)}
						data={tabData}
					/>
				</GeneralTabStyle>
			</TabsStyles>


 

		</Main>
	);
};
export default Overview;
 
