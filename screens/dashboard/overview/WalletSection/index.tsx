/* eslint-disable max-lines */

import React  from "react";
import { Bold,   Flex,   Span, Table,  } from "../../../../components";
import {     Card,  Cards,  Icon, TbaleContainer,          } from "./styles";
import { Spacer } from "../../../../components/Spacer";
import { DataIcon, EmptyIcon, LoaderIcon, RiderIcon, StoreIcon } from "../../../../public/assets/svg";
import { formatAMPM, formatNumber, formateDate, naira } from "../../../../lib";
import CustomButton from "../../../../components/Button";
import { GeneralTableStyle } from "../../../../components/styles";
import { useGetTransactions } from "../../../../hooks/useTransaction";
import { useRouter } from "next/router";
import { GenericObjTypes,   } from "../../../../constants/types";
import Status from "../../../../components/Status";








const WalletSection = ( {dashboard}: {dashboard: any}) => {
	const router = useRouter();

	
	const { transactions, loading  } = useGetTransactions({limit: 5});

	
 

	
	const data = [
		{
			name: "Total Amount Today",
			amount: naira + formatNumber(dashboard?.wallet?.balance),
			icon: <DataIcon height="20" width="20" colour="common.white"/>
		},
		{
			name: "Total Orders",
			amount: formatNumber(dashboard?.totalOrders),
			icon: <RiderIcon height="20" width="20" colour="common.white"/>
		},
		{
			name: "Total Stores",
			amount:  formatNumber(dashboard?.store),
			icon: <StoreIcon height="20" width="20" colour="common.white"/>
		},
	];

 

	const tableHead = [ "Name","Date","Time", "Amount", "Status"];
	const tableBody = transactions?.data?.map((transaction: GenericObjTypes) => (
		{
			name: transaction?.customerDetails?.name,
			date: `${formateDate(new Date(transaction?.createdAt)).date} ${formateDate(new Date(transaction?.createdAt)).shortMonth}, ${formateDate(new Date(transaction?.createdAt)).year}` ,
			time: `${formatAMPM(new Date(transaction?.createdAt))}`,
			amount: "₦" + formatNumber(transaction?.productCharge),
			status: <Status status={transaction?.status}/>
		}
	));
 

	return (

		<>
			<Spacer height="64px"/>
			<Flex height="auto" justifyContent="space-between">
				<Bold fontFamily='regular' weight="700" lineHeight="28" size="24" colour={"Grey.2"}>
					Overview
				</Bold>

		
			</Flex>
			<Spacer height="24px"/>
			<Cards columns="250px repeat(auto-fit, minmax(180px, 1fr))" gap="24px" justifyContent="flex-start">
				{
					data.map((item, idx) => (
						<Card key={item.name} active={idx === 0}>
							<Icon className="icon">{item.icon}</Icon>
							<div>
								<Bold fontFamily='regular' weight="700" lineHeight="28" size="24" colour={ "Grey.2"}>
									{(item.amount)}
								</Bold>
								<Spacer height="16px"/>
								<Span fontFamily='regular' weight="400" lineHeight="19" size="16" colour={  "Grey.2"}>
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


						<TbaleContainer height="auto">
							<GeneralTableStyle height="auto" justifyContent="flex-start">
								<Flex justifyContent="space-between" margin="0 0 24px" height="auto">
									<Bold fontFamily='regular' weight="700" lineHeight="28" size="24" colour={ "Grey.2"}>
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
									headColor="common.white"
									tableHead={tableHead}
									tableBodys={tableBody}
								/>
							</GeneralTableStyle>
						</TbaleContainer>
						:	
						<Flex margin="40px 0" height="auto" direction="column">
							<EmptyIcon />
							<Span fontFamily='regular' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
								There are no transaction record here yet!.
							</Span>
						</Flex>
			}
		</>


	);
};
export default WalletSection;
 