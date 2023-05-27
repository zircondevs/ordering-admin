
import React   from "react";
import { Bold, Flex,  Span, Table,      } from "../../../components";
import {     Container1, HeaderSTyles, Main,    } from "./styles";
import { formatAMPM, formatNumber, formateDate,   } from "../../../lib";
import { GeneralCountStyles, GeneralTableStyle } from "../../../components/styles";
import {   EmptyIcon, LoaderIcon } from "../../../public/assets/svg";
import { useGetTransactions } from "../../../hooks/useTransaction";
import { GenericObjTypes, TransactionStatusType } from "../../../constants/types";
import Paginator from "../../../components/Paginator";



const Transactions = () => {
	const { transactions, loading , pageInfo, setPageInfo } = useGetTransactions();

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
 

	return (
		<Main>

			<HeaderSTyles height="auto" justifyContent="space-between">
				<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="28" size="24" colour={"Black.80"}>
					Transactions
				</Bold>
			</HeaderSTyles>

			{
				loading ?
					<Flex margin="40px 0"> <LoaderIcon height="40" width="40"/></Flex>
					:
					tableBody?.length > 0 ?


						<Container1>
							<Flex justifyContent="space-between" margin="0 0 24px" height="auto">
								<div>
									<Bold fontFamily='quicksand' weight="700" lineHeight="24" size="18" colour={ "Black.80"}>
										All Transactions
									</Bold>
									<GeneralCountStyles>
										<Bold fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={ "Black.80"}>
											{transactions?.count}
										</Bold>
									</GeneralCountStyles>
								</div>
								{/* <SearchStyles wrap="nowrap" alignItems="stretch" width="auto">
									<Search placeholder="Search by ticket ID" />
								</SearchStyles> */}
							</Flex>


				
							<GeneralTableStyle height="auto" justifyContent="flex-start">
								<Table 
									gap={"0"}
									headBgColor="common.transparent"
									bodyColor="Black.80"
									headColor="Black.60"
									tableHead={tableHead}
									tableBodys={tableBody}
								/>
							</GeneralTableStyle>

							<Paginator 
								onPageChange={(p) => setPageInfo((prev: any) => ({...prev, page: p  }))}  
								firstLast={true} 
								prevNext
								pages = {pageInfo?.pages }
								currentPage = {(+pageInfo?.page)}
							/>
						</Container1>
						: 
						<Flex margin="40px 0" height="auto" direction="column">
							<EmptyIcon />
							<Span fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={ "Black.80"}>
								There are no transaction record here yet!.
							</Span>
						</Flex>
			}
 
		
 
		</Main>
	);
};
export default Transactions;
 



 