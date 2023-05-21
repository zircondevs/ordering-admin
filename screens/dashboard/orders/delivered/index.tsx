

import React    from "react";
import {  Bold, Flex,  Span, Table,   } from "../../../../components";
import {     Main, SearchSection, TableHeadStyle,   } from "./styles";
import { formatAMPM, formatNumber, formateDate,   } from "../../../../lib";
import { GenericObjTypes } from "../../../../constants/types";
import { EmptyIcon, LoaderIcon } from "../../../../public/assets/svg";
import { GeneralTableStyle } from "../../../../components/styles";
import Search from "../../../../components/Search";




const OrdersTable = ({orders, loadingOrders, title} : {orders:{data:  GenericObjTypes[]}, loadingOrders: boolean, title: string}) => {
	const tableHead = ["Date","Time", "Amount",   "Action"];
	const tableBody = orders?.data?.map((order: GenericObjTypes) => (
		{
			date: `${formateDate(new Date(order?.createdAt)).date} ${formateDate(new Date(order?.createdAt)).shortMonth}, ${formateDate(new Date(order?.createdAt)).year}` ,
			time: `${formatAMPM(new Date(order?.createdAt))}`,
			amount: "₦" + formatNumber(order?.amount),
			action: <Flex width="max-content"  margin="0">
				<Span fontFamily='quicksand' weight="400" lineHeight="19" size="12" colour={"Error.default"}>
					View
				</Span>
			</Flex>,
		}
	));
	return (
		<Main>
			<TableHeadStyle height="auto" justifyContent="flex-start">
				{
					loadingOrders ?
						<Flex><LoaderIcon height="40" width="40"/></Flex>
						:
						<>
							<SearchSection justifyContent="space-between" margin="0 0 24px" height="auto">
								<Bold fontFamily='quicksand' weight="700" lineHeight="24" size="18" colour={ "Black.80"}>
									{title}
								</Bold>

								<Search placeholder="Search by ticket Id"/>
							</SearchSection>

							{
								tableBody?.length > 0 ?
									<GeneralTableStyle>
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
									<Flex margin="50px 0" direction="column">
										<EmptyIcon />
										<Span fontFamily='quicksand' weight="700" lineHeight="14" size="12" colour={"Black.80"}>
											There is no data here at the moment!
										</Span>
									</Flex>
							}
						</>
				}
			</TableHeadStyle>
		</Main>
	);
};
 
export default OrdersTable;
  