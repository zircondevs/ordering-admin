/* eslint-disable max-lines */

import React  from "react";
import { Bold,   Flex,   Span, Table,  } from "../../../../components";
import {     Card,  Cards,  Icon,        OverviewStyles,    } from "./styles";
import { Spacer } from "../../../../components/Spacer";
import { DataIcon, EmptyIcon, LoaderIcon, RiderIcon, StoreIcon } from "../../../../public/assets/svg";
import { formatAMPM, formatNumber, formateDate, naira } from "../../../../lib";
import CustomButton from "../../../../components/Button";
import { PRIMARY_COLOR } from "../../../../hooks/colors";
import { GeneralTableStyle } from "../../../../components/styles";
import { useGetDashboardDetails,   } from "../../../../hooks/usedashboard";
import { useGetTransactions } from "../../../../hooks/useTransaction";
import { useRouter } from "next/router";
import { GenericObjTypes, TransactionStatusType } from "../../../../constants/types";








const WalletSection = ( ) => {
	const router = useRouter();

	const { dashboard ,   } = useGetDashboardDetails();
	const { transactions, loading  } = useGetTransactions({limit: 5});

	
 


	const data = [
		{
			name: "Total Amount",
			amount: naira + formatNumber(dashboard?.wallet?.balance),
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
			date: `${formateDate(new Date(transaction?.createdAt)).date} ${formateDate(new Date(transaction?.createdAt)).shortMonth}, ${formateDate(new Date(transaction?.createdAt)).year}` ,
			time: `${formatAMPM(new Date(transaction?.createdAt))}`,
			amount: "₦" + formatNumber(transaction?.foodCharge),
			status: <Flex bgColor={status[transaction?.status as TransactionStatusType][0]} width="max-content" pad="3px 8px" margin="0">
				<Span fontFamily='quicksand' weight="400" lineHeight="19" size="12" colour={status[transaction?.status as TransactionStatusType][1]}>
					{transaction?.status}
				</Span>
			</Flex>,
		}
	));
 

	return (

		<OverviewStyles>
			<Spacer height="64px"/>
			<Flex height="auto" justifyContent="space-between">
				<Bold fontFamily='quicksand' weight="700" lineHeight="28" size="24" colour={"Black.80"}>
					Overview
				</Bold>

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
				loading  ?
					<Flex margin="40px 0"> <LoaderIcon height="40" width="40"/></Flex>
					:
					tableBody?.length > 0 ?

						<GeneralTableStyle height="auto" justifyContent="flex-start">
							<Flex justifyContent="space-between" margin="0 0 24px" height="auto">
								<Bold fontFamily='quicksand' weight="700" lineHeight="28" size="24" colour={ "Black.80"}>
									Recent {tableBody?.length} Transactions
								</Bold>

								<CustomButton
									size="14"
									bodColour={PRIMARY_COLOR[0]}
									type="button"
									pad="padding.smallest"
									txtColour={PRIMARY_COLOR[0]}
									text={  "See All"}
									onClick={() =>  router.push("/dashboard/transactions") }
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


	);
};
export default WalletSection;
 