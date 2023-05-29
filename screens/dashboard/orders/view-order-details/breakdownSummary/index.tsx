/* eslint-disable max-lines */



import React  from "react";
import {   OrderId, Time, Total,   } from "./styles";
import { Bold,       Container,       Flex,  Grid,  Span,   } from "../../../../../components";
import {   MakeOnlyFirstLettersCapital, formatNumber, formateDate, naira } from "../../../../../lib";
import { Spacer } from "../../../../../components/Spacer";
import { GeneralDivider } from "../../../../../components/styles";


 

const BreakdownSummary = ({  order}:any) => {

	const total = {
		"SUB TOTAL": formatNumber(order?.packs?.reduce((prev: any, current: any) =>  current.reduce((prev: any, current: any) =>  (current?.food?.amount * current?.quantity)+ prev, 0) + prev, 0)),
		"DELIVERY FEE": order?.deliveryCharge,
	};

 


	
	return (
		<div>
			<Total height="auto">
				<Container >
					<Flex justifyContent="space-between" wrap="nowrap" alignItems="flex-start">
						<Span  fontFamily='quicksandLight' weight="700" lineHeight="16" size="14" colour={"Grey.3"}>
							Order ID
						</Span>
						<Time  fontFamily='quicksandLight' weight="400" lineHeight="19" size="14" colour={"Grey.1"} textAlign="end">
							{formateDate(new Date(order?.createdAt)).date}  {formateDate(new Date(order?.createdAt)).shortMonth},
							{formateDate(new Date(order?.createdAt)).year}  
						</Time>
					</Flex>
					<Spacer height="8px"/>
					<OrderId  fontFamily='quicksand' weight="700" lineHeight="28" size="24" colour={"Grey.1"}>
						{(order?.orderId)}
					</OrderId>
				</Container>

				<Spacer height="20px"/>
				<GeneralDivider />
				<Spacer height="20px"/>

				<Grid gap="16px">
					{order?.packs?.map((item: any, idx: number) => (
						<Flex key={idx} justifyContent="space-between" height="auto"  width="auto">
							<Flex justifyContent="space-between" height="auto">
								<Bold  fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={"Grey.4"}>
									Pack {idx + 1} {" "}
								</Bold>
								<Bold  fontFamily='quicksand' weight="400" lineHeight="16" size="12" colour={"Grey.4"}>
									Quantity
								</Bold>
							</Flex>
							<Spacer height="10px"/>
							<Grid gap="10px">
								{item?.map((food: any, idx: number) => (
									<Flex key={idx} justifyContent="space-between" height="auto"  width="auto">
										<div>
											<Span  fontFamily='quicksand' weight="700" lineHeight="21" size="16" colour={"Grey.2"}>
												{MakeOnlyFirstLettersCapital(food?.food?.name)}  
											</Span>
										</div>
										<Span  fontFamily='quicksand' weight="400" lineHeight="21" size="16" colour={"Grey.2"}>
											{food?.quantity}   
										</Span>
									</Flex>
								))}
							</Grid>
						</Flex>
					))}
				</Grid>
			</Total>




			<Total height="auto">
		
				<Grid gap="10px">
					{order?.packs?.map((item: any, idx: number) => (
						<Flex key={idx} justifyContent="space-between" height="auto"  width="auto">
							<div>
								<Bold  fontFamily='quicksand' weight="700" lineHeight="16" size="12" colour={"Black.default"}>
									Pack {idx + 1} {" "}
									<Span  fontFamily='quicksand' weight="400" lineHeight="14" size="12" colour={"Grey.3"}>
										({item?.length} items)
									</Span>
								</Bold>
							
							</div>
							<Bold  fontFamily='quicksand' weight="700" lineHeight="16" size="12" colour={"Grey.2"}>
								{naira} 
								{formatNumber(item.reduce((prev: any, current: any) => (current?.food?.amount * current?.quantity)+ prev,0))}
							</Bold>
						</Flex>
					))}
				</Grid>
				<Spacer height="40px"/>
				<Grid gap="16px">
					{Object.values(total).map((item, idx) => (
						<Flex key={idx} justifyContent="space-between" height="auto" >
							<div>
								<Bold  fontFamily='quicksand' weight="700" lineHeight="16" size="14" colour={"Black.default"}>
									{Object.keys(total)[idx]}
								</Bold>
							</div>
							<Bold  fontFamily='quicksand' weight="700" lineHeight="16" size="14" colour={"Black.default"}>
								{naira}{item}
							</Bold>
						</Flex>
					))}
				</Grid>
			</Total>
			<Flex  justifyContent="flex-end" height="auto"  margin="0 0 70px">
				<Container margin="0 16px 0 0" width="auto">
					<Bold  fontFamily='quicksand' weight="700" lineHeight="16" size="16" colour={"Black.default"}>
						Total:
					</Bold>
				</Container>
				<Bold  fontFamily='quicksandBold' weight="700" lineHeight="16" size="18" colour={"Black.default"}>
					{naira}{formatNumber(order?.foodPrice)}
				</Bold>
			</Flex>
		</div>
	);
};

export default BreakdownSummary;
 