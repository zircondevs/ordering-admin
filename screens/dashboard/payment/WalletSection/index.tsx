/* eslint-disable max-lines */

import React  from "react";
import { Bold,   Flex,   Span, Table,  } from "../../../../components";
import {     Card,  Cards,  Icon,          } from "./styles";
import { Spacer } from "../../../../components/Spacer";
import { DataIcon, EmptyIcon, LoaderIcon } from "../../../../public/assets/svg";
import { formatAMPM, formatNumber, formateDate, naira } from "../../../../lib";
import CustomButton from "../../../../components/Button";
import { GeneralTableStyle } from "../../../../components/styles";
import { useRouter } from "next/router";
import { GenericObjTypes, TransactionStatusType } from "../../../../constants/types";
import { useGetPaymentLogs } from "../../../../hooks/usePayment";








const WalletSection = ( {dashboard}: {dashboard: any}) => {
	const router = useRouter();

	
	const { logs, loading  } = useGetPaymentLogs({limit: 5});

	
 

	
	const data = [
		{
			name: "Payout Balance",
			amount: naira + formatNumber(dashboard?.wallet?.balance),
			icon: <DataIcon height="20" width="20" colour="common.white"/>
		},
		{
			name: "Total Paid Out",
			amount: naira + formatNumber(dashboard?.wallet?.balance),
			icon: <DataIcon height="20" width="20" colour="common.white"/>
		},
	];

	const status = {
		pending:  ["Blue.dark.20", "Blue.dark" ],
		failed:  ["Error.20", "Error.default" ],
		success: ["Success.20", "Success.default" ],
	};

	const tableHead = [ "Name","Date","Time", "Amount", "Status"];
	const tableBody = logs?.map((transaction: GenericObjTypes) => (
		{
			name: transaction?.customerDetails?.name,
			date: `${formateDate(new Date(transaction?.createdAt)).date} ${formateDate(new Date(transaction?.createdAt)).shortMonth}, ${formateDate(new Date(transaction?.createdAt)).year}` ,
			time: `${formatAMPM(new Date(transaction?.createdAt))}`,
			amount: "₦" + formatNumber(transaction?.productCharge),
			status: <Flex bgColor={status[transaction?.status as TransactionStatusType][0]} width="max-content" pad="3px 8px" margin="0">
				<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="12" colour={status[transaction?.status as TransactionStatusType][1]}>
					{transaction?.status}
				</Span>
			</Flex>,
		}
	));
 

	return (

		<>
			<Spacer height="40px"/>
			<Cards columns="  repeat(auto-fit, minmax(180px, 400px))" gap="24px" justifyContent="flex-start">
				{
					data.map((item, idx) => (
						<Card key={item.name} active={idx === 0}>
							<Icon className="icon">{item.icon}</Icon>
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


			{
				loading  ?
					<Flex margin="40px 0" height="auto"> <LoaderIcon height="40" width="40"/></Flex>
					:
					tableBody?.length > 0 ?

						<GeneralTableStyle height="auto" justifyContent="flex-start">
							<Flex justifyContent="space-between" margin="0 0 24px" height="auto">
								<Bold fontFamily='ubuntu' weight="700" lineHeight="28" size="24" colour={ "Grey.2"}>
									Recent {tableBody?.length} Transactions
								</Bold>

								<CustomButton
									size="14"
									type="button"
									pad="padding.smallest"
									activeColor={"Orange.default"}
									activeBorderColor={"Orange.default"}
									activeBgColor={"common.white"}
									text={  "See All"}
									onClick={() =>  router.push("/dashboard/transactions") }
								/>
							</Flex>

							<Table 
								gap={"0"}
								headBgColor="common.transparent"
								bodyColor="Grey.2"
								headColor="Grey.2"
								tableHead={tableHead}
								tableBodys={tableBody}
							/>
						</GeneralTableStyle>
						:	
						<Flex margin="40px 0" height="auto" direction="column">
							<EmptyIcon />
							<Span fontFamily='ubuntu' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
								There are no balance logs here yet!.
							</Span>
						</Flex>
			}
		</>


	);
};
export default WalletSection;
 