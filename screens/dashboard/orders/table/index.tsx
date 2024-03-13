

import React     from "react";
import {  Bold, Container, Flex,  Span, Table,   } from "../../../../components";
import {     Main, SearchSection, TableHeadStyle,   } from "./styles";
import { formatAMPM, formatNumber, formateDate,     } from "../../../../lib";
import { GenericObjTypes, StatusType } from "../../../../constants/types";
import { EditIcon, EmptyIcon, LoaderIcon, PasswordEyeIcon, WarningIcon } from "../../../../public/assets/svg";
import { GeneralCountStyles, GeneralTAnimatingContainer, GeneralTableStyle } from "../../../../components/styles";
import { HandleScrollTypes } from "devs-react-component-library";
import Paginator from "../../../../components/Paginator";
import { useGetetUserRoleModule } from "../../../../hooks/handlers/useRole";
import { useGetOrders } from "../../../../hooks/useOrders";
import Oops from "../../../../components/Oops";



interface PropTypes {
	title: string
	modalRef: React.RefObject<HandleScrollTypes>;
	setModal: React.Dispatch<React.SetStateAction< GenericObjTypes & { type: string}>>;
	status: StatusType,
}


const OrdersTable = ({ status,  title, setModal, modalRef,   }: PropTypes ) => {
	
 
	const openModal = (obj: GenericObjTypes & { type: string}) => {
		setModal(obj);
		modalRef.current && modalRef.current.preventBodyScroll();
	};

	const {EDIT } = useGetetUserRoleModule(  "orders");
	const { orders , pageInfo, setPageInfo , isValidating, loading, error, mutate } = useGetOrders( status);

	const tableHead =  [  "Product Price",  "User", "Phone", "Delivery Address", "Delivery Type", "Date", "Action" ];
		
	const tableBody = orders?.map((order: GenericObjTypes) => (
		{
			amount: "₦" + formatNumber(order?.productPrice),
			user:  order?.clientName || (order?.user),
			phone:  order?.clientPhoneNumber,
			deliveryAddress:  order?.deliveryAddress,
			deliveryType:  order?.deliveryType,
			date: `${formateDate(new Date(order?.createdAt)).date} ${formateDate(new Date(order?.createdAt)).shortMonth}, 
				${formateDate(new Date(order?.createdAt)).year}, ${formatAMPM(new Date(order?.createdAt))}` ,
			action: (
				<Flex wrap="nowrap" justifyContent="flex-start">
					{
						EDIT &&
							<button onClick={() => openModal({type: "VIEW_ORDER",  order})}>
								<PasswordEyeIcon height="20" width="20" colour="Black.60" />
							</button>
					}
					<Container as="button" width="auto" height="auto" margin="0 0 0 10px" onClick={() => openModal({type: "CHANGE_ORDER_STATUS", order})}>
						<EditIcon height="18" width="18" colour="Black.60" />
					</Container>
				</Flex>
			)
		}
	));
	return (
		<Main>
			<TableHeadStyle height="auto" justifyContent="flex-start">
				{
					loading ?
						<Flex><LoaderIcon height="40" width="40"/></Flex>
						:
						error ?
							<Oops 
								errorMessage={"Error occured"}
								icon={<WarningIcon width="25" height="25" colour="Error.default" />}
								btnText="Retry"
								click={() =>  mutate()}
								loading={isValidating}
							/>
							:
							<>
								<SearchSection justifyContent="space-between" margin="0 0 24px" height="auto">
									<Bold fontFamily='ubuntu' weight="700" lineHeight="24" size="18" colour={ "Grey.2"}>
										{title }
										<GeneralCountStyles>
											<Span fontFamily='ubuntu' weight="700" lineHeight="14" size="12" colour={"Grey.2"}>
												{  pageInfo.count || 0}
											</Span>
										</GeneralCountStyles>
									</Bold>

									{/* <Search placeholder="Search by ticket Id"/> */}
								</SearchSection>

								{
									tableBody?.length > 0 ?
										<>
											<GeneralTAnimatingContainer isValidating={isValidating}>
												<GeneralTableStyle>
													<Table
														gap={"0"}
														headBgColor="common.transparent"
														bodyColor="Grey.2"
														headColor="Grey.2"
														tableHead={tableHead}
														tableBodys={tableBody}
													/>
												</GeneralTableStyle>
											</GeneralTAnimatingContainer>
											<Paginator
												onPageChange={(p) => setPageInfo((prev: any) => ({...prev, page: p ,   }))}  
												firstLast={true} 
												prevNext
												pages = {pageInfo?.pages }
												currentPage = {(+pageInfo?.page)}
											/>
										</>
										: 
										<Flex margin="50px 0" direction="column">
											<EmptyIcon />
											<Span fontFamily='ubuntu' weight="700" lineHeight="14" size="12" colour={"Grey.2"}>
												There is no data here at the moment!
											</Span>
										</Flex>
								}
							</>
				}
			</TableHeadStyle>
		</Main>
	);
};
 
export default OrdersTable;
  