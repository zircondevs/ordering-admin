
import React, { useState }   from "react";
import { Bold, Flex,  Span, Table,   } from "../../../../components";
import {     Container1,   Main,      } from "./styles";
import {  formatNumber,   } from "../../../../lib";
import { GeneralCountStyles,   GeneralTableStyle } from "../../../../components/styles";
import {   LoaderIcon, LoyaltyIcon, TrashIcon } from "../../../../public/assets/svg";
import { GenericObjTypes,   } from "../../../../constants/types";
import Paginator from "../../../../components/Paginator";
import { useGetLoyaltyCustomers, useRemoveLoyaltyCustomer } from "../../../../hooks/useLoyalty";
import { Spacer } from "../../../../components/Spacer";



const LoyaltyCustomers = () => {
	const [activeCustomer, setActiveCustomer] = useState("");
	const { loyaltyCustomers, loading , pageInfo, setPageInfo, mutate } = useGetLoyaltyCustomers();
	const { handleRemoveLoyaltyCustomer,loading: loadingDelete } = useRemoveLoyaltyCustomer();

 
	const tableHead = [ "Customer", "Email","Phone Number", "Purchases", "Action" ];
	const tableBody = loyaltyCustomers?.data?.map((loyalty: GenericObjTypes) => (
		{
			customer:    (loyalty?.fullName),
			email:    (loyalty?.email),
			phone:    (loyalty?.phone),
			Purchases:   formatNumber(loyalty?.numberOfTimesPurchased),
			action: (
				<Flex width="max-content" margin="0"  justifyContent="flex-start"
					onClick={ async() => {
						if(activeCustomer === loyalty?._id && loadingDelete) return;
						setActiveCustomer(loyalty?._id);
						const res = await	handleRemoveLoyaltyCustomer(loyalty?._id);
						res?.data && mutate();
					}}
				>
					{
						activeCustomer === loyalty?._id && loadingDelete ?
							<LoaderIcon height="20" width="20"/>
							:
							<>
								<Flex width="auto" height="auto" as="button"   margin="0 8px 0 0" >
									<TrashIcon colour="Error.default" height="20" width="20"/>
								</Flex>
								<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="12"  colour="Error.default" >
									Remove
								</Span>
							</>
					}
				</Flex>
			),
		}
	));

 
 

	return (
		<Main>


			{
				loading ?
					<Flex margin="40px 0" height="auto"> <LoaderIcon height="40" width="40"/></Flex>
					:
					loyaltyCustomers?.data?.length > 0 ?

						<Container1>
							<Flex justifyContent="space-between" margin="0 0 24px" height="auto">
								<div>
									<Bold fontFamily='ubuntu' weight="700" lineHeight="24" size="18" colour={ "Grey.2"}>
										All Loyal Customers
									</Bold>
									<GeneralCountStyles>
										<Bold fontFamily='ubuntu' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
											{loyaltyCustomers?.count}
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
									bodyColor="Grey.2"
									headColor="Grey.2"
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
							<LoyaltyIcon colour="Grey.4"/>
							<Spacer height="8px"/>
							<Bold fontFamily='ubuntu' weight="400" lineHeight="21" size="16" colour={ "Grey.2"}>
								No Loyal Customers
							</Bold>
							<Spacer height="4px"/>
							<Span fontFamily='ubuntu' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
								There are no loyalty customer record here yet!.
							</Span>
						</Flex>
			}
 
		
 
		</Main>
	);
};
export default LoyaltyCustomers;
 



 