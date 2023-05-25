 
import React, { useEffect }   from "react";
import { Bold, Grid, Span,  } from "../../../../components";
import {   Aside, AsideStyle,    Orders, RecentOrders,   TotalOrders, } from "./styles";
import { Spacer } from "../../../../components/Spacer";
import CustomButton from "../../../../components/Button";
import { PRIMARY_COLOR } from "../../../../hooks/colors";
import { useSocket } from "../../../../hooks/handlers/useSocket";
import { formatAMPM, formateDate } from "../../../../lib";




const AllOrders = ({storeId}: {storeId: string}) => {
	const { handleJoinRoom, newOrders  } = useSocket();
	console.log("remounting", newOrders);

	useEffect(() => {
		storeId && handleJoinRoom(storeId);
	}, [storeId]);

	
	return (
		< >
			{
				newOrders?.length > 0 ?
					<Aside >
						<AsideStyle height="auto" justifyContent="space-between">
							<Bold fontFamily='quicksand' weight="700" lineHeight="28" size="20" colour={"Black.80"}>
								New Order Requests
							</Bold>

							<CustomButton
								size="14"
								bodColour={PRIMARY_COLOR[0]}
								type="button"
								pad="padding.smallest"
								txtColour={PRIMARY_COLOR[0]}
								text={  "See All"}
								onClick={() =>  [] }
							/>
						</AsideStyle>
						
						<Orders directions="hidden auto ">
							<TotalOrders height="auto" justifyContent="flex-start" margin="40px 0 32px">
								<Bold fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={"Black.60"}>
									Total New Orders
								</Bold>
								<div>
									<Bold fontFamily='quicksand' weight="400" lineHeight="19" size="16" colour={"Black.60"}>
										10
									</Bold>
								</div>
							</TotalOrders>

							<Grid gap='24px' className="all-orders">
								{
									newOrders?.map((order, id) => (
										<RecentOrders key={id} justifyContent="space-between">
											<div>
												<Span fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={"Black.60"}>
													Order ID
												</Span>
												<Spacer height="8px" />
												<Bold fontFamily='quicksand' weight="700" lineHeight="24" size="20" colour={"Black.default"}>
													{order._id}
												</Bold>
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
						</Orders>
						
					</Aside>
					: null
			}
		</>
	);
};
export default AllOrders;
 