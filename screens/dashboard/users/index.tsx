
import React   from "react";
import { Bold, Flex,   Span,   Table,      } from "../../../components";
import { Container1, HeaderSTyles, Main,    } from "./styles";
import {     formateDate,   } from "../../../lib";
import { GeneralCountStyles, GeneralTableStyle } from "../../../components/styles";
import { useGetUsers } from "../../../hooks/useAuth";
import { GenericObjTypes } from "../../../constants/types";
import {  EmptyIcon, LoaderIcon } from "../../../public/assets/svg";
import Paginator from "../../../components/Paginator";
 





const Transactions = () => {
	const { users, loading , error, pageInfo, setPageInfo } = useGetUsers();
	const tableHead = ["Customer Name", "Date Created","Email", "Phone Number",   "Address"];
	const tableBody = users?.data?.length > 0 ? users?.data?.map((user: GenericObjTypes) =>  (
		{
			name: user?.fullName,
			date: `${formateDate(new Date(user?.createdAt)).date} ${formateDate(new Date(user?.createdAt)).shortMonth}, ${formateDate(new Date(user?.createdAt)).year}` ,
			email: user?.email,
			amount: user?.phoneNumber,
			address: user?.address || "N/A"
		}
	)) : [];


	
	return (
		<Main>

			<HeaderSTyles height="auto" justifyContent="space-between">
				<Bold fontFamily='ubuntuSemiBold' weight="700" lineHeight="28" size="24" colour={"Grey.2"}>
					Customers
				</Bold>
			</HeaderSTyles>

			<Container1>
				<Flex justifyContent="space-between" margin="0 0 24px" height="auto">
					<div>
						<Bold fontFamily='ubuntu' weight="700" lineHeight="24" size="18" colour={ "Grey.2"}>
							All customers
						</Bold>
						{
							users?.count ?
								<GeneralCountStyles>
									<Bold fontFamily='ubuntu' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
										{users?.count}
									</Bold>
								</GeneralCountStyles>
								: null
						}
					</div>
				</Flex>

				{
					loading ?
						<Flex><LoaderIcon height="40" width="40"/></Flex>
						:
						error?
							<Flex>
								<Bold fontFamily='ubuntu' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
									We are having trouble fetching all users
								</Bold>
							</Flex>
							: users?.data?.length > 0 ?
								<GeneralTableStyle height="auto" justifyContent="flex-start">
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
								:	
								<Flex margin="40px 0" height="auto" direction="column">
									<EmptyIcon />
									<Span fontFamily='ubuntu' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
										You do not have any customers yet
									</Span>
								</Flex>
				}
			</Container1>
 
		
 
		</Main>
	);
};
export default Transactions;
 



 