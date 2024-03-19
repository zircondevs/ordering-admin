/* eslint-disable max-lines */

import React, { useEffect }    from "react";
import { Bold,  Container,  Flex, Grid, Span, Table,  } from "../../../components";
import {     Container1,    HeaderSTyles,  Main, NavStyles,    } from "./styles";
import { GeneralCountStyles, GeneralDivider } from "../../../components/styles";
import {    EmptyIcon, LoaderIcon, LocationIcon,   WarningIcon ,  } from "../../../public/assets/svg";
import BreadCrumb from "../../../components/Breadcrumb";
import { formatAMPM, formatNumber, formateDate, singleSpace } from "../../../lib";
import { Spacer } from "../../../components/Spacer";
import { GeneralTableStyle } from "../../../components/styles";
import { useRouter } from "next/router";
import { useGetStore } from "../../../hooks/useStores";
import { useGetStoreTransactions,   } from "../../../hooks/useTransaction";
import { GenericObjTypes,   } from "../../../constants/types";
import Paginator from "../../../components/Paginator";
import Tooltip from "../../../components/Tooltip";





const Stores = () => {
	const  { query, back } = useRouter();

	const { store,  error , loading: loadingStoreDetails} = useGetStore(query?.storeId as string, query?.s as string);
	const { transactions, loading , pageInfo, setPageInfo } = useGetStoreTransactions( );
	useEffect(() => {
		if(!query?.storeId || !query?.s){
			back();
		}
	}, [ query ]);

 
 
 
	const tableHead = ["Date","Time", "Amount", "Status" ];
	const tableBody = transactions?.data?.map((transaction: GenericObjTypes) => (
		{
			date: `${formateDate(new Date(transaction?.createdAt)).date} ${formateDate(new Date(transaction?.createdAt)).shortMonth}, ${formateDate(new Date(transaction?.createdAt)).year}` ,
			time: `${formatAMPM(new Date(transaction?.createdAt))}`,
			amount: "₦" + formatNumber(transaction?.productCharge),
		}
	));



	
 
	const details = [
		{
			title: "Location",
			value: store?.address || "N/A",
			icon: <Flex width="15px" margin="0 4px 0 0" height="15px"><LocationIcon colour="Error.default" height="15" width="15"/></Flex>
		},
		{
			title: "State",
			value: store?.state || "N/A"
		}, 
		{
			title: "Date Created",
			value:  store?.createdAt ? new Date(store?.createdAt).toLocaleString()?.split(",")[0] : "N/A"
		}, 
		{
			title: "Customer care line",
			value: store?.customerCareLine || "N/A"
		}
		
	];


	return (
		<Main>
			<HeaderSTyles height="auto" justifyContent="space-between">
				{
					loadingStoreDetails? null :
					
						error ?
							<Flex justifyContent="flex-start" height="auto" alignItems="flex-start">
								<Span fontFamily='regular' weight="400" lineHeight="21" size="16" colour={ "Grey.1"}>
									Store
								</Span>
								{singleSpace()}
								<Tooltip message={"Error occured while loading this store details."} top="-20px">
									<WarningIcon colour="Yellow.default" height="20" width="20"/>
								</Tooltip>
							</Flex>
							:
							<>
								<Bold fontFamily='regular' weight="700" lineHeight="28" size="24" colour={ "Grey.2"}>
									{store?.name || ""}
								</Bold>

								<Spacer height="40px"/>

								<NavStyles>
									<BreadCrumb list={[{name: "Stores", link: "/dashboard/stores"}, {name: store?.name || "Loading..."}]}/>
								</NavStyles>

								<Spacer height="32px"/>


								<Grid gap="24px" columns="repeat(auto-fit, minmax(200px, 1fr))" >
									{ 
										details.map((detail, idx) => (
											<Container key={idx} justifyContent="space-between" wrap="nowrap">
												<Flex height="auto" width="auto" justifyContent="flex-start">
													{detail.icon}
													<Span fontFamily='regular' weight="400" lineHeight="16" size="12" colour={ "Grey.3"}>
														{detail.title}
													</Span>
												</Flex>
												<Spacer height="4px" />
												<Bold fontFamily='regular' weight="&00" lineHeight="24" size="18" colour={ "Grey.2"}>
													{detail.value}
												</Bold>
											</Container>
										))
									}
								</Grid>
							</>
				}
			</HeaderSTyles>

		

 
 
			<GeneralDivider />

			<Container1 margin="40px 0 0">
				<Flex justifyContent="space-between" margin="0 0 24px" height="auto">
					<div>
						<Bold fontFamily='regular' weight="700" lineHeight="24" size="18" colour={ "Grey.2"}>
							Store Activities
						</Bold>
						<GeneralCountStyles>
							<Bold fontFamily='regular' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
								{transactions?.count || 0}
							</Bold>
						</GeneralCountStyles>
					</div>
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
									headColor="Grey.2"
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
								<Span fontFamily='regular' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
									There are no transaction record here yet!.
								</Span>
							</Flex>
	
				}
			</Container1>

		</Main>
	);
};
export default Stores;
 
 