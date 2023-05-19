/* eslint-disable max-lines */

import React    from "react";
import { Bold,  Container,  Flex, Grid, Span, Table,  } from "../../../components";
import {     Container1,    HeaderSTyles, IconStyles, Main, SearchStyles, StoreStyles,      } from "./styles";
import { GeneralCountStyles, GeneralDivider } from "../../../components/styles";
import {  DownloadIcon , StoreIcon,   } from "../../../public/assets/svg";
import CustomButton from "../../../components/Button";
import BreadCrumb from "../../../components/Breadcrumb";
import { formatAMPM, formatNumber, formateDate } from "../../../lib";
import { Spacer } from "../../../components/Spacer";
import { GeneralTableStyle } from "../../../components/styles";
import Search from "../../../components/Search";





const Stores = () => {


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
 

	const stores = [
		{ title: "Completed  Orders",},
		{ title: "Total Amount",},
		{ title: "Pending Orders",},
		{ title: "New Orders",},
	];
	const details = [
		{
			title: "Location",
			value: "hdh h sdf hdf",
		},
		{
			title: "manager name",
			value:" Chiome Kee"
		}, 
		{
			title: "Date Created",
			value: "23 June"
		}, 
		{
			title: "Manager Email",
			value: " efhjjj eefhewhu"
		}
	];

	return (
		<Main>
			
			<HeaderSTyles height="auto" justifyContent="space-between">
				<BreadCrumb list={[{name: "Stores", link: "/dashboard/stores"}, {name: "Store: Abayi Store"}]}/>

				<Spacer height="32px"/>
				<Grid gap="24px" columns="repeat(auto-fit, minmax(200px, 250px))" >
					{
						details.map((detail, idx) => (
							<Container key={idx} justifyContent="space-between" wrap="nowrap">
								<Bold fontFamily='quicksand' weight="400" lineHeight="16" size="12" colour={ "Grey.1"}>
									{detail.title}
								</Bold>
								<Spacer height="4px" />
								<Bold fontFamily='quicksand' weight="&00" lineHeight="24" size="18" colour={ "Black.80"}>
									{detail.value}
								</Bold>
							</Container>
						))
					}
				</Grid>
			</HeaderSTyles>

		

			<Container1>
				<Grid gap="24px" columns="repeat(auto-fit, minmax(200px, 250px))" >
					{
						stores.map((store, idx) => (
							<StoreStyles key={idx} justifyContent="space-between" wrap="nowrap">
								<Flex width="auto" wrap="nowrap">
									<IconStyles height="50px" width="50px" margin="0 16px 0 0">
										<StoreIcon colour="Grey.2" height="20" width="20"/>
									</IconStyles>
									<div>
										<Bold fontFamily='quicksand' weight="400" lineHeight="16" size="12" colour={ "Grey.1"}>
											{store.title}
										</Bold>
										<Spacer height="4px" />
										<Bold fontFamily='quicksand' weight="&00" lineHeight="24" size="18" colour={ "Black.80"}>
											{formatNumber(2894832)}
										</Bold>
									</div>
								</Flex>

							</StoreStyles>
						))
					}
				</Grid>
			</Container1>
 
			<GeneralDivider />

			<Container1 margin="40px 0 0">
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
					<SearchStyles wrap="nowrap" alignItems="stretch" width="auto">
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
						<Search placeholder="Search by ticket ID" />
					</SearchStyles>
				</Flex>

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
			</Container1>

		</Main>
	);
};
export default Stores;
 
 