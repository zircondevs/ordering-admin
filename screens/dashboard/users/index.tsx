
import React   from "react";
import { Bold, Flex,   Table,      } from "../../../components";
import { Container1, HeaderSTyles, Main,    } from "./styles";
import {     formateDate,   } from "../../../lib";
import { GeneralCountStyles, GeneralTableStyle } from "../../../components/styles";
import { useGetUsers } from "../../../hooks/useAuth";
import { GenericObjTypes } from "../../../constants/types";
import { LoaderIcon } from "../../../public/assets/svg";
 





const Transactions = () => {
	const { users, loading } = useGetUsers();
	const tableHead = ["Customer Name", "Date Created","Email", "Phone Number",   "Address"];
	const tableBody = users?.data?.map((user: GenericObjTypes) =>  (
		{
			name: user?.fullName,
			date: `${formateDate(new Date(user?.createdAt)).date} ${formateDate(new Date(user?.createdAt)).shortMonth}, ${formateDate(new Date(user?.createdAt)).year}` ,
			email: user?.email,
			amount: user?.phoneNumber,
			address: user?.address || "N/A"
		}
	));
 

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
						<GeneralCountStyles>
							<Bold fontFamily='ubuntu' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
								{users?.count}
							</Bold>
						</GeneralCountStyles>
					</div>
				</Flex>

				{
					loading ?
						<Flex><LoaderIcon height="40" width="40"/></Flex>
						:
						<GeneralTableStyle height="auto" justifyContent="flex-start">
							<Table 
								gap={"0"}
								headBgColor="common.transparent"
								bodyColor="Grey.2"
								headColor="Grey.2"
								tableHead={tableHead}
								tableBodys={tableBody}
							/>
						</GeneralTableStyle>
				}
			</Container1>
 
		
 
		</Main>
	);
};
export default Transactions;
 



 