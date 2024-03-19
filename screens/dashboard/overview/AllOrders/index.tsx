 
import React, { useEffect, useState }   from "react";
import { Bold, Flex, Grid,  Span,  } from "../../../../components";
import {   Aside, AsideStyle,    EditOrderButton,    OrderIdButton,    OrderIdStyles,    Orders, RecentOrders,   TotalOrders, } from "./styles";
import { Spacer } from "../../../../components/Spacer";
import CustomButton from "../../../../components/Button";
import { useSocket } from "../../../../hooks/handlers/useSocket";
import { formatAMPM, formateDate, naira } from "../../../../lib";
import { UseContext } from "../../../../state/provider";
import { useRouter } from "next/router";
import { EditIcon,   OrderIcon } from "../../../../public/assets/svg";
import ViewOrderDetails from "./view-order-details";
import { HandleScrollTypes } from "devs-react-component-library";
import { GenericObjTypes } from "../../../../constants/types";
import ChangeModalStatus from "./change-status";




const AllOrders = () => {
	const { handleJoinRoom  } = useSocket();
	const { state: { realTimeOrders, storeId } } = UseContext();
	const router = useRouter();
	

	const [modal, setModal] = useState<GenericObjTypes & {type: string}>({type: ""});
	const modalRef = React.useRef<HandleScrollTypes>(null); 



	const openModal = (obj: GenericObjTypes & { type: string}) => {
		setModal(obj);
		modalRef.current && modalRef.current.preventBodyScroll();
	};


	useEffect(() => {
		storeId && handleJoinRoom(storeId);
	}, [storeId]);

	return (

		
		<Aside >
			<AsideStyle height="auto" justifyContent="space-between">
				<Bold fontFamily='regular' weight="700" lineHeight="28" size="20" colour={"Grey.2"}>
					New Order Requests
				</Bold>

				<CustomButton
					size="14"
					activeColor={"Orange.default"}
					activeBorderColor={"Orange.default"}
					activeBgColor={"common.white"}
					type="button"
					pad="padding.smallest"
					text={  "See All"}
					onClick={() =>  router.push("/dashboard/orders")}
				/>
			</AsideStyle>
			
			<Orders directions="hidden auto ">
				<TotalOrders height="auto" justifyContent="flex-start" margin="40px 0 32px">
					<Bold fontFamily='regular' weight="400" lineHeight="16" size="14" colour={"Grey.2"}>
						Latest New Orders
					</Bold>
					<div>
						<Bold fontFamily='regular' weight="400" lineHeight="19" size="16" colour={"Grey.2"}>
							{realTimeOrders?.length}
						</Bold>
					</div>
				</TotalOrders>

				{
					// loadingOrders ? null
					// <Flex margin="40px 0" height="auto"> <LoaderIcon height="40" width="40"/></Flex>
					realTimeOrders?.length > 0 ?
						<Grid gap='24px' className="all-orders">
							{
								realTimeOrders?.map((order, id) => (
									<RecentOrders key={id} justifyContent="space-between" index={id}  >
										<div>
											<Flex height="auto" justifyContent="space-between">
												<Span fontFamily='regular' weight="400" lineHeight="16" size="14" colour={"Grey.2"}>
													Order ID
												</Span>

												<EditOrderButton className="EditOrderButton" onClick={() => openModal({type: "CHANGE_ORDER_STATUS", order})}>
													<EditIcon width="20" height="20" colour="Black.60"/>
												</EditOrderButton> 
											</Flex>
											<Spacer height="8px" />
											<OrderIdButton onClick={() => openModal({type: "VIEW_ORDER", order})}>
												<OrderIdStyles fontFamily='regular' weight="700" lineHeight="24" size="20" colour={"Black.default"}>
													{order.orderId}
												</OrderIdStyles>
											</OrderIdButton>
										</div>
										<div>
											<Bold fontFamily='regular' weight="400" lineHeight="14" size="12" colour={"Black.default"}>
												{formateDate(new Date(order?.createdAt)).date}  {formateDate(new Date(order?.createdAt)).shortMonth},
												{formateDate(new Date(order?.createdAt)).year} 	{formatAMPM(new Date(order?.createdAt))} 
											</Bold>
											<Spacer height="4px" />
											<Span fontFamily='regular' weight="400" lineHeight="12" size="10" colour={"Grey.2"}>
												{naira}	{ ((order?.productPrice))} 
											</Span>
										</div>
									</RecentOrders>
								))
							}
						</Grid>
						: 
						<Flex height="auto" direction="column" margin="70px 0">
							<OrderIcon height="40" width="40" colour="Grey.4"/>
							<Spacer height="8px" />
							<Span fontFamily='regular' weight="400" lineHeight="19" size="14" colour={"Grey.2"}>
								No New Orders
							</Span>
							<Span fontFamily='regular' weight="400" lineHeight="16" size="14" colour={"Grey.2"}>
								You don’t have any new order requests
							</Span>
						</Flex>
				}
			</Orders>

			<ViewOrderDetails  {...{ modal, setModal, modalRef }} />
			<ChangeModalStatus  {...{ modal, setModal, modalRef }} />
			
		</Aside>
	);
};
export default AllOrders;
 