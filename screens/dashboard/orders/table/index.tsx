

import React     from "react";
import {  Bold, Flex,  Span, Table,   } from "../../../../components";
import {     Main, SearchSection, TableHeadStyle,   } from "./styles";
import { formatAMPM, formatNumber, formateDate,     } from "../../../../lib";
import { GenericObjTypes } from "../../../../constants/types";
import { EmptyIcon, LoaderIcon } from "../../../../public/assets/svg";
import { GeneralTAnimatingContainer, GeneralTableStyle } from "../../../../components/styles";
// import Search from "../../../../components/Search";
import { HandleScrollTypes } from "devs-react-component-library";
import Paginator from "../../../../components/Paginator";
import { useGetetUserRoleModule } from "../../../../hooks/handlers/useRole";



interface PropTypes {
	orders:  GenericObjTypes[], 
	loading: boolean, 
	isValidating: boolean, 
	title: string
	modalRef: React.RefObject<HandleScrollTypes>;
	setSingleOrder: React.Dispatch<React.SetStateAction<GenericObjTypes>>
	setPageInfo: any;
	pageInfo: any,
}


const OrdersTable = ({orders, loading, title, setSingleOrder, modalRef, pageInfo, setPageInfo , isValidating,   }: PropTypes ) => {
	
 
	const openModal = (obj: object) => {
		setSingleOrder(obj);
		modalRef.current && modalRef.current.preventBodyScroll();
	};

	const {EDIT} = useGetetUserRoleModule(  "orders");
	

	const tableHead = EDIT ?  
		[  "Product Price",  "User", "Phone", "Delivery Address", "Delivery Type", "Date", "Action" ]
		:[  "Product Price",  "User", "Phone", "Delivery Address", "Delivery Type", "Date",  ];
		
	const tableBody = orders?.map((order: GenericObjTypes) => (
		{
			amount: "₦" + formatNumber(order?.productPrice),
			user:  order?.clientName || (order?.user),
			phone:  order?.clientPhoneNumber,
			deliveryAddress:  order?.deliveryAddress,
			deliveryType:  order?.deliveryType,
			date: `${formateDate(new Date(order?.createdAt)).date} ${formateDate(new Date(order?.createdAt)).shortMonth}, 
				${formateDate(new Date(order?.createdAt)).year}, ${formatAMPM(new Date(order?.createdAt))}` ,
			...(
				EDIT ? 
					{
						action: <button onClick={() => openModal(order)}>
							<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="12" colour={"Error.default"}>
								View
							</Span>
						</button>
					}
					: {}
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
						<>
							<SearchSection justifyContent="space-between" margin="0 0 24px" height="auto">
								<Bold fontFamily='ubuntu' weight="700" lineHeight="24" size="18" colour={ "Grey.2"}>
									{title}
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
  