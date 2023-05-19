/* eslint-disable max-lines */

import React    from "react";
import { Bold,  Flex,  Span, Table,  Tabs   } from "../../../components";
import {     HeaderSTyles, Main,    TableStyle, TabsStyles, } from "./styles";
import { formatAMPM, formatNumber, formateDate,   } from "../../../lib";
import {   GeneralTabStyle } from "../../../components/styles";
import Search from "../../../components/Search";




const Settings = () => {
 


	const status = {
		pending:  ["Blue.dark.20", "Blue.dark" ],
		failed:  ["Error.20", "Error.default" ],
		success: ["Success.20", "Success.default" ],
	};
	const tableHead = ["Date","Time", "Amount", "Status", "Action"];
	const tableBody = [
		{
			date: `${formateDate(new Date()).date} ${formateDate(new Date()).shortMonth}, ${formateDate(new Date()).year}` ,
			time: `${formatAMPM(new Date())}`,
			amount: "₦" + formatNumber(3212),
			status: <Flex bgColor={status["failed"][0]} width="max-content" pad="3px 8px" margin="0">
				<Span fontFamily='quicksand' weight="400" lineHeight="19" size="12" colour={status["pending"][1]}>
					failed
				</Span>
			</Flex>,
			action: <Flex width="max-content"  margin="0">
				<Span fontFamily='quicksand' weight="400" lineHeight="19" size="12" colour={"Error.default"}>
					View
				</Span>
			</Flex>,
		},
	];
 
	const tabData = [
		{
			head: "Account Information",
			body: <Tab1   {...{tableBody, tableHead}}/>,
			key: "Account Information"
		},
		{
			head: "User Management",
			body:  <Tab1   {...{tableBody, tableHead}}/>,
			key: "User Management"
		},
		{
			head: "Position",
			body: <Tab1   {...{tableBody, tableHead}}/>,
			key: "Position"
		},
		{
			head: "Security",
			body: <Tab1   {...{tableBody, tableHead}}/>,
			key: "Security"
		},
		{
			head: "Subscriptions",
			body: <Tab1   {...{tableBody, tableHead}}/>,
			key: "Subscriptions"
		},
	];

	

	return (
		<Main>

		
			<HeaderSTyles height="auto" justifyContent="space-between" margin='64px 0 40px'>
				<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="28" size="24" colour={"Black.80"}>
					Settings
				</Bold>
			</HeaderSTyles>

	
			<TabsStyles>
				<GeneralTabStyle>
					<Tabs
						nonActiveColor="Grey.4"
						activeColor="grey.2"
						click={() => []}
						data={tabData}
					/>
				</GeneralTabStyle>
			</TabsStyles>
 
 
		</Main>
	);
};
export default Settings;
 



const Tab1 = ({tableHead, tableBody}: any) => {

	return (
		<TableStyle height="auto" justifyContent="flex-start">
			<Flex justifyContent="space-between" margin="0 0 24px" height="auto">
				<Bold fontFamily='quicksand' weight="700" lineHeight="24" size="18" colour={ "Black.80"}>
					All New Orders 
				</Bold>

				<Search />
			</Flex>

			<Table 
				gap={"0"}
				headBgColor="common.transparent"
				bodyColor="Black.80"
				headColor="Black.60"
				tableHead={tableHead}
				tableBodys={tableBody}
			/>
		</TableStyle>
	);
};

 