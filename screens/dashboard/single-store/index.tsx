/* eslint-disable max-lines */

import React, { useEffect }    from "react";
import { Bold,  Container,  Flex, Grid, Span, Table,  } from "../../../components";
import {     Container1,    HeaderSTyles,  Main,    } from "./styles";
import { GeneralCountStyles, GeneralDivider } from "../../../components/styles";
import {    EmptyIcon, LoaderIcon, ThreeDotsLoaderIcon ,  } from "../../../public/assets/svg";
import BreadCrumb from "../../../components/Breadcrumb";
import { formatAMPM, formatNumber, formateDate } from "../../../lib";
import { Spacer } from "../../../components/Spacer";
import { GeneralTableStyle } from "../../../components/styles";
import { useRouter } from "next/router";
import { useGetStore } from "../../../hooks/useStores";
import { useGetStoreTransactions,   } from "../../../hooks/useTransaction";
import { GenericObjTypes, TransactionStatusType } from "../../../constants/types";
import Paginator from "../../../components/Paginator";





const Stores = () => {
	const  { query, back } = useRouter();

	const { store } = useGetStore(query?.storeId as string, query?.state as string);
	const { transactions, loading , pageInfo, setPageInfo } = useGetStoreTransactions(query?.storeId as string);
	useEffect(() => {
		if(!query?.storeId || !query?.state){
			back();
		}
	}, [ query ]);

 
	const status = {
		pending:  ["Blue.dark.20", "Blue.dark" ],
		failed:  ["Error.20", "Error.default" ],
		success: ["Success.20", "Success.default" ],
	};
	const tableHead = ["Date","Time", "Amount", "Status" ];
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


 

 
	const details = [
		{
			title: "Location",
			value: store?.address || "N/A",
		},
		{
			title: "State",
			value: store?.state || "N/A"
		}, 
		{
			title: "Local Govt Area",
			value: store?.localGovernmentArea || "N/A"
		},
		{
			title: "Date Created",
			value:  store?.createdAt ? new Date(store?.createdAt).toLocaleString() : "N/A"
		}, 
		{
			title: "Customer care line",
			value: store?.customerCareLine || "N/A"
		}
		
	];

	return (
		<Main>

			<HeaderSTyles height="auto" justifyContent="space-between">
				<Bold fontFamily='quicksand' weight="700" lineHeight="28" size="24" colour={ "Grey.2"}>
					Store Name: {store?.name || <ThreeDotsLoaderIcon height="15" width="20"/>}
				</Bold>

				<Spacer height="40px"/>
	
				<BreadCrumb list={[{name: "Stores", link: "/dashboard/stores"}, {name: store?.name || "Loading..."}]}/>

				<Spacer height="32px"/>


				<Grid gap="24px" columns="repeat(auto-fit, minmax(200px, 1fr))" >
					{
						details.map((detail, idx) => (
							<Container key={idx} justifyContent="space-between" wrap="nowrap">
								<Span fontFamily='quicksand' weight="400" lineHeight="16" size="12" colour={ "Grey.3"}>
									{detail.title}
								</Span>
								<Spacer height="4px" />
								<Bold fontFamily='quicksand' weight="&00" lineHeight="24" size="18" colour={ "Grey.2"}>
									{detail.value}
								</Bold>
							</Container>
						))
					}
				</Grid>
			</HeaderSTyles>

		

 
 
			<GeneralDivider />

			<Container1 margin="40px 0 0">
				<Flex justifyContent="space-between" margin="0 0 24px" height="auto">
					<div>
						<Bold fontFamily='quicksand' weight="700" lineHeight="24" size="18" colour={ "Grey.2"}>
							All Transactions
						</Bold>
						<GeneralCountStyles>
							<Bold fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
								{transactions?.count || 0}
							</Bold>
						</GeneralCountStyles>
					</div>
					{/* <SearchStyles wrap="nowrap" alignItems="stretch" width="auto">
						<Search placeholder="Search by ticket ID" />
					</SearchStyles> */}
				</Flex>

				{
					loading ?
						<Flex margin="40px 0"> <LoaderIcon height="40" width="40"/></Flex>
						:
						tableBody?.length > 0 ?
							<GeneralTableStyle>
								<Table
									gap={"0"}
									headBgColor="common.transparent"
									bodyColor="Grey.2"
									headColor="Black.60"
									tableHead={tableHead}
									tableBodys={tableBody}
								/>
								<Paginator
									onPageChange={(p) => setPageInfo((prev: any) => ({...prev, page: p  }))}  
									firstLast={true} 
									prevNext
									pages = {pageInfo?.pages }
									currentPage = {(+pageInfo?.page)}
								/>
							</GeneralTableStyle>
							: <Flex margin="40px 0" height="auto" direction="column">
								<EmptyIcon />
								<Span fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
									There are no transaction record here yet!.
								</Span>
							</Flex>
	
				}
			</Container1>

		</Main>
	);
};
export default Stores;
 
 