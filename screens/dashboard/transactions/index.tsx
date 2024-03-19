
import React   from "react";
import { Bold, Flex,  Span, Table,      } from "../../../components";
import {     Container1, HeaderSTyles, Main,    } from "./styles";
import { formatAMPM, formatNumber, formateDate,   } from "../../../lib";
import { GeneralCountStyles, GeneralTAnimatingContainer, GeneralTableStyle } from "../../../components/styles";
import {   EmptyIcon, LoaderIcon } from "../../../public/assets/svg";
import { useGetTransactions } from "../../../hooks/useTransaction";
import { GenericObjTypes,   } from "../../../constants/types";
import Paginator from "../../../components/Paginator";
import Status from "../../../components/Status";



const Transactions = () => {
	const { transactions, loading , pageInfo, setPageInfo, isValidating } = useGetTransactions();

 
	const tableHead = ["Date","Time", "Amount", "Mode Of Trans", "Status" ];
	const tableBody = transactions?.data?.map((transaction: GenericObjTypes) => (
		{
			date: `${formateDate(new Date(transaction?.createdAt)).date} ${formateDate(new Date(transaction?.createdAt)).shortMonth}, ${formateDate(new Date(transaction?.createdAt)).year}` ,
			time: `${formatAMPM(new Date(transaction?.createdAt))}`,
			amount: "₦" + formatNumber(transaction?.productCharge),
			modeOfTransaction:  transaction?.modeOfTransaction,
			status: <Status status={transaction?.status} />
		}
	));
 

	return (
		<Main>

			<HeaderSTyles height="auto" justifyContent="space-between">
				<Bold fontFamily='semiBold' weight="700" lineHeight="28" size="24" colour={"Grey.2"}>
					Transactions
				</Bold>
			</HeaderSTyles>

			{
				loading ?
					<Flex margin="40px 0" height="auto"> <LoaderIcon height="40" width="40"/></Flex>
					:
					tableBody?.length > 0 ?


						<Container1>
							<Flex justifyContent="space-between" margin="0 0 24px" height="auto">
								<div>
									<Bold fontFamily='regular' weight="700" lineHeight="24" size="18" colour={ "Grey.2"}>
										All Transactions
									</Bold>
									<GeneralCountStyles>
										<Bold fontFamily='regular' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
											{transactions?.count}
										</Bold>
									</GeneralCountStyles>
								</div>
								{/* <SearchStyles wrap="nowrap" alignItems="stretch" width="auto">
									<Search placeholder="Search by ticket ID" />
								</SearchStyles> */}
							</Flex>


				
							<GeneralTAnimatingContainer isValidating={isValidating}>
								<GeneralTableStyle height="auto" justifyContent="flex-start">
									<Table 
										gap={"0"}
										headBgColor="common.transparent"
										bodyColor="Grey.2"
										headColor="common.white"
										tableHead={tableHead}
										tableBodys={tableBody}
									/>
								</GeneralTableStyle>
							</GeneralTAnimatingContainer>

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
							<Span fontFamily='regular' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
								There are no transaction record here yet!.
							</Span>
						</Flex>
			}
 
		
 
		</Main>
	);
};
export default Transactions;
 



 