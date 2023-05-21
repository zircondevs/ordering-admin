/* eslint-disable max-lines */

import React, { useState }   from "react";
import { Bold, Dropdown, Flex,   Span, Table,  } from "../../../components";
import {     Card,  Cards,  Icon, Main,        OverviewStyles,    } from "./styles";
import { Spacer } from "../../../components/Spacer";
import { DataIcon, EmptyIcon, LoaderIcon, RiderIcon, StoreIcon } from "../../../public/assets/svg";
import { formatAMPM, formatNumber, formateDate, naira } from "../../../lib";
import CustomButton from "../../../components/Button";
import { PRIMARY_COLOR } from "../../../hooks/colors";
import AllOrders from "./AllOrders";
import { GeneralTableStyle } from "../../../components/styles";
import { useGetStores } from "../../../hooks/useStores";
import { useGetDashboardDetails,   } from "../../../hooks/usedashboard";
import { useGetTransactions } from "../../../hooks/useTransaction";
import { useRouter } from "next/router";
import { GenericObjTypes } from "../../../constants/types";







const Overview = () => {
	const [ , setStoreId] = useState("");
	const router = useRouter();
	const { stores, loading: loadingStores } = useGetStores();
	const { dashboard ,   } = useGetDashboardDetails();
	const { transactions, loading  } = useGetTransactions();
  
	const data = [
		{
			name: "Total Amount",
			amount: naira + formatNumber(dashboard?.wallet?.wallet),
			icon: <DataIcon height="20" width="20"/>
		},
		{
			name: "Total Orders",
			amount: formatNumber(dashboard?.totalOrders),
			icon: <RiderIcon height="20" width="20"/>
		},
		{
			name: "Total Stores",
			amount:  formatNumber(dashboard?.store),
			icon: <StoreIcon height="20" width="20"/>
		},
	];

	const status = {
		pending:  ["Blue.dark.20", "Blue.dark" ],
		failed:  ["Error.20", "Error.default" ],
		success: ["Success.20", "Success.default" ],
	};

	const tableHead = ["Date","Time", "Amount", "Status"];
	const tableBody = transactions?.data?.map((transaction: GenericObjTypes) => (
		{
			date: `${formateDate(new Date()).date} ${formateDate(new Date()).shortMonth}, ${formateDate(new Date()).year}` ,
			time: `${formatAMPM(new Date())}`,
			amount: "₦" + formatNumber(3212),
			status: <Flex bgColor={status["failed"][0]} width="max-content" pad="3px 8px" margin="0">
				<Span fontFamily='quicksand' weight="400" lineHeight="19" size="12" colour={status["pending"][1]}>
					{transaction?.status}
				</Span>
			</Flex>,
			action: <Flex width="max-content"  margin="0">
				<Span fontFamily='quicksand' weight="400" lineHeight="19" size="12" colour={"Error.default"}>
					View
				</Span>
			</Flex>,
		}
	));
 

	return (
		<Main alignItems="stretch">
			<OverviewStyles>
				<Spacer height="64px"/>
				<Flex height="auto" justifyContent="space-between">
					<Bold fontFamily='quicksand' weight="700" lineHeight="28" size="24" colour={"Black.80"}>
						Overview
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
								clearSelected
								initial={stores?.data?.[0]?.name }
								handleSelect={(selected: string) => setStoreId(selected)}
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
				</Flex>
				<Spacer height="64px"/>
				<Cards columns="250px repeat(auto-fit, minmax(180px, 1fr))" gap="24px" justifyContent="flex-start">
					{
						data.map((item, idx) => (
							<Card key={item.name} active={idx === 0}>
								<Icon active={idx === 0}>{item.icon}</Icon>
								<div>
									<Bold fontFamily='quicksand' weight="700" lineHeight="28" size="24" colour={idx === 0 ? "common.white" : "Black.80"}>
										{(item.amount)}
									</Bold>
									<Spacer height="16px"/>
									<Span fontFamily='quicksand' weight="400" lineHeight="19" size="16" colour={ idx === 0 ? "common.white" : "Black.80"}>
										{item.name}
									</Span>
								</div>
							</Card>
						))
					}
				</Cards>

				<Spacer height="24px"/>


				{
					loading || loadingStores ?
						<Flex margin="40px 0"> <LoaderIcon height="40" width="40"/></Flex>
						:
						tableBody?.lenght > 0 ?

							<GeneralTableStyle height="auto" justifyContent="flex-start">
								<Flex justifyContent="space-between" margin="0 0 24px" height="auto">
									<Bold fontFamily='quicksand' weight="700" lineHeight="28" size="24" colour={ "Black.80"}>
										Transactions
									</Bold>

									<CustomButton
										size="14"
										bodColour={PRIMARY_COLOR[0]}
										type="button"
										pad="padding.smallest"
										txtColour={PRIMARY_COLOR[0]}
										text={  "See All"}
										onClick={() =>  router.push("/dasboard/transactions") }
									/>
								</Flex>

								<Table 
									gap={"0"}
									headBgColor="common.transparent"
									bodyColor="Black.80"
									headColor="Black.60"
									tableHead={tableHead}
									tableBodys={tableBody}
								/>
							</GeneralTableStyle>
							:	
							<Flex margin="40px 0" height="auto" direction="column">
								<EmptyIcon />
								<Span fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={ "Black.80"}>
									There are no transaction record here yet!.
								</Span>
							</Flex>
				}
			</OverviewStyles>

 
			<AllOrders />
 
		</Main>
	);
};
export default Overview;
 