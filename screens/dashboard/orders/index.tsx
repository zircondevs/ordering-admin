/* eslint-disable max-lines */

import React, { useState }   from "react";
import { Bold, Dropdown, Flex,  Span, Table,  Tabs   } from "../../../components";
import {     HeaderSTyles, Main,    TableStyle, TabsStyles, } from "./styles";
import { formatAMPM, formatNumber, formateDate,   } from "../../../lib";
import { GeneralCountStyles, GeneralTabStyle } from "../../../components/styles";
import Search from "../../../components/Search";
import { useGetOrders } from "../../../hooks/useOrders";
import { useGetStores,   } from "../../../hooks/useStores";
import { LoaderIcon } from "../../../public/assets/svg";




const Overview = () => {
	const [store, setStore] = useState("");
	
	const { stores, loading: loadingStores } = useGetStores();
	const { orders , loading: loadingOrders} = useGetOrders(store || stores?.data[0]?._id);
	console.log(orders);


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
		{
			date: `${formateDate(new Date()).date} ${formateDate(new Date()).shortMonth}, ${formateDate(new Date()).year}` ,
			time: `${formatAMPM(new Date())}`,
			amount: "₦" + formatNumber(3212),
			status: <Flex bgColor={status["success"][0]} width="max-content" pad="3px 8px" margin="0">
				<Span fontFamily='quicksand' weight="400" lineHeight="19" size="12" colour={status["success"][1]}>
					Success
				</Span>
			</Flex>,
			action: <Flex width="max-content"   margin="0">
				<Span fontFamily='quicksand' weight="400" lineHeight="19" size="12" colour={"Error.default"}>
					View
				</Span>
			</Flex>,
		}
	];
 
	const tabData = [
		{
			head:  <TabLabel title="New Orders" count={23} />,
			body: <Tab1   {...{tableBody, tableHead}}/>,
			key: "New orders"
		},
		{
			head: <TabLabel title="In Progress" count={23} />,
			body:  <Tab1   {...{tableBody, tableHead}}/>,
			key: "In progress"
		},
		{
			head: <TabLabel title="Delivered" count={23} />,
			body: <Tab1   {...{tableBody, tableHead}}/>,
			key: "Delivered"
		},
	];

	

	return (
		<Main>


		
			<HeaderSTyles height="auto" justifyContent="space-between" margin='64px 0 40px'>
				<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="28" size="24" colour={"Black.80"}>
					Orders
				</Bold>

			
				{
					stores?.data?.length > 0 ?
						<Dropdown
							weight="300"
							direction="end"
							colour="Black.default"
							dropColor="Black.80"
							dropHovColor="Black.default"
							hovBgColor="Black.20"
							searchField={false}
							initial={stores?.data?.[0]?.name }
							handleSelect={(selected: string) => setStore(selected)}
							data={stores?.data?.map((store: any) => (
								{
									displayedValue: store?.name, 
									returnedValue: store?._id,
									dropdownValue: store?.name
								}
							))|| ({
								displayedValue: "No data", 
								returnedValue: "No data",
								dropdownValue: "No data",
							}) }
						/>
						: null
				}
			</HeaderSTyles>

			{
				loadingOrders || loadingStores ?
					<Flex><LoaderIcon	height="40" width="40"/></Flex>
					:
					<TabsStyles>
						<GeneralTabStyle>
							<Tabs
								nonActiveColor="Black.60"
								activeColor="Blue.base.default"
								click={() => []}
								data={tabData}
							/>
						</GeneralTabStyle>
					</TabsStyles>
			}
		
 
		</Main>
	);
};
export default Overview;
 



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



const TabLabel =({title, count}: { title: string, count: number}) => {
	return (
		<Flex width="auto">
			{title}
			<GeneralCountStyles>
				<Span fontFamily='quicksand' weight="700" lineHeight="14" size="12" colour={"Black.80"}>
					{count}
				</Span>
			</GeneralCountStyles>
		</Flex>
	);
};