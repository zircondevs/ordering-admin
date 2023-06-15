 
import React, { useEffect }   from "react";
import { Bold, Flex, Grid, Span,  } from "../../../../components";
import {   Aside, AsideStyle,    OrderIdStyles,    Orders, RecentOrders,   TotalOrders, } from "./styles";
import { Spacer } from "../../../../components/Spacer";
import CustomButton from "../../../../components/Button";
import { PRIMARY_COLOR } from "../../../../hooks/colors";
import { useSocket } from "../../../../hooks/handlers/useSocket";
import { formatAMPM, formateDate } from "../../../../lib";
import { UseContext } from "../../../../state/provider";
import { useRouter } from "next/router";
import { LoaderIcon, OrderIcon } from "../../../../public/assets/svg";




const AllOrders = () => {
	const { handleJoinRoom,  loadingOrders  } = useSocket();
	const { state: { realTimeOrders, storeId } } = UseContext();
	const router = useRouter();
	
	useEffect(() => {
		storeId && handleJoinRoom(storeId);
	}, [storeId]);

	
	return (
 
		
		<Aside >
			<AsideStyle height="auto" justifyContent="space-between">
				<Bold fontFamily='quicksand' weight="700" lineHeight="28" size="20" colour={"Grey.2"}>
					New Order Requests
				</Bold>

				<CustomButton
					size="14"
					bodColour={PRIMARY_COLOR[0]}
					type="button"
					pad="padding.smallest"
					txtColour={PRIMARY_COLOR[0]}
					text={  "See All"}
					onClick={() =>  router.push("/dashboard/orders")}
				/>
			</AsideStyle>
			
			<Orders directions="hidden auto ">
				<TotalOrders height="auto" justifyContent="flex-start" margin="40px 0 32px">
					<Bold fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={"Black.60"}>
						Latest New Orders
					</Bold>
					<div>
						<Bold fontFamily='quicksand' weight="400" lineHeight="19" size="16" colour={"Black.60"}>
							{realTimeOrders?.length}
						</Bold>
					</div>
				</TotalOrders>

				{
					loadingOrders ?
						<Flex margin="40px 0" height="auto"> <LoaderIcon height="40" width="40"/></Flex>
						:realTimeOrders?.length > 0 ?
							<Grid gap='24px' className="all-orders">
								{
									realTimeOrders?.map((order, id) => (
										<RecentOrders key={id} justifyContent="space-between" index={id}>
											<div>
												<Span fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={"Black.60"}>
													Order ID
												</Span>
												<Spacer height="8px" />
												<OrderIdStyles fontFamily='quicksand' weight="700" lineHeight="24" size="20" colour={"Black.default"}>
													{order.orderId}
												</OrderIdStyles>
											</div>
											<div>
												<Bold fontFamily='quicksand' weight="400" lineHeight="14" size="12" colour={"Black.default"}>
													{formateDate(new Date(order?.createdAt)).date}  {formateDate(new Date(order?.createdAt)).shortMonth},
													{formateDate(new Date(order?.createdAt)).year} 
												</Bold>
												<Spacer height="4px" />
												<Span fontFamily='quicksand' weight="400" lineHeight="12" size="10" colour={"Black.60"}>
													{formatAMPM(new Date(order?.createdAt))} 
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
								<Span fontFamily='quicksand' weight="400" lineHeight="19" size="14" colour={"Black.60"}>
									No New Orders
								</Span>
								<Span fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={"Black.60"}>
									You don’t have any new order requests
								</Span>
							</Flex>
				}
			</Orders>
			
		</Aside>
	);
};
export default AllOrders;
 