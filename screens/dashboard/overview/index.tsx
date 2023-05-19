
import React   from "react";
import { Bold, Flex,   Span, Table,  } from "../../../components";
import {     Card,  Cards,  Icon, Main,        OverviewStyles,    } from "./styles";
import { Spacer } from "../../../components/Spacer";
import { DataIcon, RiderIcon, StoreIcon } from "../../../public/assets/svg";
import { formatAMPM, formatNumber, formateDate, naira } from "../../../lib";
import CustomButton from "../../../components/Button";
import { PRIMARY_COLOR } from "../../../hooks/colors";
import AllOrders from "./AllOrders";
import { GeneralTableStyle } from "../../../components/styles";







const Overview = () => {

	const data = [
		{
			name: "Total Amount",
			amount: 10000,
			icon: <DataIcon height="20" width="20"/>
		},
		{
			name: "Total Orders",
			amount: 1000,
			icon: <RiderIcon height="20" width="20"/>
		},
		{
			name: "Total Stores",
			amount: 1000,
			icon: <StoreIcon height="20" width="20"/>
		},
	];

	const status = {
		pending:  ["Blue.dark.20", "Blue.dark" ],
		failed:  ["Error.20", "Error.default" ],
		success: ["Success.20", "Success.default" ],
	};

	const tableHead = ["Date","Time", "Amount", "Status"];
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
		}
	];
 

	return (
		<Main alignItems="stretch">
			<OverviewStyles>
				<Spacer height="64px"/>
				<Bold fontFamily='quicksand' weight="700" lineHeight="28" size="24" colour={"Black.80"}>
					Overview
				</Bold>
				<Spacer height="64px"/>
				<Cards columns="250px repeat(auto-fit, minmax(180px, 1fr))" gap="24px" justifyContent="flex-start">
					{
						data.map((item, idx) => (
							<Card key={item.name} active={idx === 0}>
								<Icon active={idx === 0}>{item.icon}</Icon>
								<div>
									<Bold fontFamily='quicksand' weight="700" lineHeight="28" size="24" colour={idx === 0 ? "common.white" : "Black.80"}>
										{naira}{formatNumber(item.amount)}
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
							onClick={() =>  [] }
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
			</OverviewStyles>

 
			<AllOrders />
 
		</Main>
	);
};
export default Overview;
 