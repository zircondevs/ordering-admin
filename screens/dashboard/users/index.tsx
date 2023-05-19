
import React   from "react";
import { Bold, Flex,  Span, Table,      } from "../../../components";
import {     Container1, HeaderSTyles, Main,    TableStyle,  } from "./styles";
import { formatAMPM, formatNumber, formateDate,   } from "../../../lib";
import { GeneralCountStyles } from "../../../components/styles";
 





const Transactions = () => {

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
 

	return (
		<Main>

			<HeaderSTyles height="auto" justifyContent="space-between">
				<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="28" size="24" colour={"Black.80"}>
					Users
				</Bold>
			</HeaderSTyles>

			<Container1>
				<Flex justifyContent="space-between" margin="0 0 24px" height="auto">
					<div>
						<Bold fontFamily='quicksand' weight="700" lineHeight="24" size="18" colour={ "Black.80"}>
							All Transactions
						</Bold>
						<GeneralCountStyles>
							<Bold fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={ "Black.80"}>
								23
							</Bold>
						</GeneralCountStyles>
					</div>
					{/* <SearchStyles wrap="nowrap" alignItems="stretch" width="auto">
						<CustomButton
							size="14"
							type="button"
							pad="padding.smaller"
							text={  "Download"}
							activeBorderColor="Grey.3"
							activeColor="Grey.3"
							onClick={() =>  [] }
							icon={<DownloadIcon colour="Grey.3" height="15px" width="15px"/>}
						/>
					</SearchStyles> */}
				</Flex>

				<TableStyle height="auto" justifyContent="flex-start">
					<Table 
						gap={"0"}
						headBgColor="common.transparent"
						bodyColor="Black.80"
						headColor="Black.60"
						tableHead={tableHead}
						tableBodys={tableBody}
					/>
				</TableStyle>
			</Container1>
 
		
 
		</Main>
	);
};
export default Transactions;
 



 