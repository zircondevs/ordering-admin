

import React  from "react";
import {  Card, Cards, Icon, Main, OverviewStyles, TabsStyles,       } from "./styles";

import { useGetDashboardDetails } from "../../../hooks/usedashboard";
import { GeneralTabStyle } from "../../../components/styles";
import { Bold, Flex, Span, Tabs } from "../../../components";
import { DataIcon, SettingsIcon, WithdrawalIcon } from "../../../public/assets/svg";
import { Spacer } from "../../../components/Spacer";
import { formatNumber, naira } from "../../../lib";
import BalanceLog from "./balanceLog";
import WidthDrawlLogs from "./widthdrawlLogs";
import Settings from "./settings";








const Overview = () => { 
	
	const { dashboard ,    } = useGetDashboardDetails();



	const tabData = [
		{
			head: <><Flex margin="0 10px 0 0"> <DataIcon height="15" width="15"  /> </Flex> Daily Balance</>,
			body:  	<BalanceLog  />,
			key: "PROCESSING"
		},
		{
			head:  <><Flex margin="0 10px 0 0"><WithdrawalIcon  height="15" width="15" colour=""/> </Flex> Withdrawals </>,
			body:  	<WidthDrawlLogs  />,
			key: "Widthdrawals"
		},
		{
			head:  <><Flex margin="0 10px 0 0"><SettingsIcon  height="15" width="15"/> </Flex> Settings </>,
			body: <Settings />,
			key: "DELIVERED"
		},
	];


	const data = [
		{
			name: "Payout Balance",
			description: "This is",
			amount: naira + formatNumber(dashboard?.wallet?.balance),
			icon: <DataIcon height="20" width="20" colour="common.white"/>
		},
		{
			name: "Total Paid Out",
			amount: naira + formatNumber(dashboard?.wallet?.balance),
			icon: <DataIcon height="20" width="20" colour="common.white"/>
		},
	];



	return (
		<Main alignItems="stretch">
			<OverviewStyles height="auto" justifyContent="space-between" margin='64px 0 40px'>
				<Bold fontFamily='ubuntuSemiBold' weight="700" lineHeight="28" size="24" colour={"Grey.2"}>
					Payment
				</Bold>
			</OverviewStyles>
			
			<Cards columns="  repeat(auto-fit, minmax(180px, 400px))" gap="24px" justifyContent="flex-start">
				{
					data.map((item, idx) => (
						<Card key={item.name} active={idx === 0}>
							<Icon className="icon" margin="0 20px 0 0">{item.icon}</Icon>
							<div>
								<Bold fontFamily='ubuntu' weight="700" lineHeight="28" size="24" colour={ "Grey.2"}>
									{(item.amount)}
								</Bold>
								<Spacer height="8px"/>
								<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="16" colour={  "Grey.2"}>
									{item.name}
								</Span>
							</div>
						</Card>
					))
				}
			</Cards>

			<Spacer height="40px"/>

			<TabsStyles>
				<GeneralTabStyle>
					<Tabs
						nonActiveColor="Grey.4"
						activeColor="Blue.base.default"
						click={(e) => console.log(e.key)}
						data={tabData}
					/>
				</GeneralTabStyle>
			</TabsStyles>

			<Spacer height="40px"/>
 

		</Main>
	);
};
export default Overview;
 
