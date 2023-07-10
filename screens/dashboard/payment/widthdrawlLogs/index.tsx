/* eslint-disable max-lines */

import React, { useState }  from "react";
import { Bold,   Flex,   Span, Table,  } from "../../../../components";
import { Spacer } from "../../../../components/Spacer";
import {   EmptyIcon, LoaderIcon } from "../../../../public/assets/svg";
import { Truncate, formatAMPM, formatNumber, formateDate,   } from "../../../../lib";
import { GeneralCountStyles, GeneralTableStyle } from "../../../../components/styles";
import { GenericObjTypes,     } from "../../../../constants/types";
import {   useGetWidthdrawlLog } from "../../../../hooks/useWallet";
import Filter from "../../../../components/filter";
import Status from "../../../../components/Status";
import Paginator from "../../../../components/Paginator";








const WidthDrawlLogs = ( ) => {
	const [ date, setDate ]= useState<string>("");
	
	const { widthDrawlLogs, loading, mutate , pageInfo, setPageInfo } = useGetWidthdrawlLog( date ? {
		day:( new Date(date)).getUTCDate(),
		month:( new Date(date)).getUTCMonth() + 1,
		year:( new Date(date)).getUTCFullYear(),
	} : undefined);
 
 

	
 
 

	const tableHead = ["Narration","Account Number", "Date","Time", "Amount" , "Status"];
	const tableBody = widthDrawlLogs?.map((log: GenericObjTypes) => (
		{
			narration:  Truncate(log?.narration, 40) ,
			narraaccount_numbertion:  log?.account_number ,
			date: `${formateDate(new Date(log?.createdAt)).date} ${formateDate(new Date(log?.createdAt)).shortMonth}, ${formateDate(new Date(log?.createdAt)).year}` ,
			time: `${formatAMPM(new Date(log?.createdAt))}`,
			amount: "₦" + formatNumber(log?.amount),
			status: <Status status={log.status} />
		}
	));
 

	return (

		<>
			
			<Spacer height="40px"/>


					

			<GeneralTableStyle height="auto" justifyContent="flex-start">
				<Flex justifyContent="space-between" margin="0 0 24px" height="auto">
					<div>
						<Bold fontFamily='ubuntu' weight="700" lineHeight="21" size="18" colour={ "Grey.2"}>
							Your Withdrawals  
						</Bold>
						<GeneralCountStyles>
							<Bold fontFamily='ubuntu' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
								{pageInfo?.count || 0}
							</Bold>
						</GeneralCountStyles>
					</div>

					<Filter  {...{date, setDate, mutate}}/>
				</Flex>
				{
					loading  ?
						<Flex margin="40px 0" height="auto"> <LoaderIcon height="40" width="40"/></Flex>
						:
						tableBody?.length > 0 ?
							<>
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
							</>
							:	
							<Flex margin="40px 0" height="auto" direction="column">
								<EmptyIcon />
								<Span fontFamily='ubuntu' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
									There are no balance logs here yet!.
								</Span>
							</Flex>
				}
			</GeneralTableStyle>
		</>


	);
};
export default WidthDrawlLogs;
 