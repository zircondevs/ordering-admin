/* eslint-disable max-lines */

import React, { useState }   from "react";
import { Bold, Dropdown, Flex,  Span,   Tabs   } from "../../../components";
import {     HeaderSTyles, Main,   TabsStyles, } from "./styles";
import { GeneralCountStyles, GeneralTabStyle } from "../../../components/styles";
import { useGetStores,   } from "../../../hooks/useStores";
import { LoaderIcon } from "../../../public/assets/svg";
import  OrdersTable from "./delivered";
import { useGetOrders } from "../../../hooks/useOrders";




const Overview = () => {
	const [store, setStore] = useState("");
	const [ status, setStatus] = useState("OPENED");
	
	const { stores, loading: loadingStores } = useGetStores();
	const { orders: processingOrders , loading: loadingProceOrders} = useGetOrders(store || stores?.data[0]?._id, status);
	const { orders , loading: loadingOrders} = useGetOrders(store || stores?.data[0]?._id, status);
	const { orders: beenPreparedOrders , loading: loadingBeenPreparedOrders} = useGetOrders(store || stores?.data[0]?._id,  status);
	const { orders: canceledOrders , loading: loadingCanceled} = useGetOrders(store || stores?.data[0]?._id, status);
	const { orders: onDeliveryOrders , loading: lodaingOnDelivery} = useGetOrders(store || stores?.data[0]?._id,  status);
	const { orders: openedOrders , loading: lodaingOpenOrders} = useGetOrders(store || stores?.data[0]?._id,  status);

	// orderStatus
 
	const tabData = [
		{
			head: <TabLabel title="Opened Orders" count={openedOrders?.count} />,
			body:  <OrdersTable orders={processingOrders} loadingOrders={lodaingOpenOrders} title="Opened Orders " />,
			key: "OPENED"
		},
		{
			head: <TabLabel title="In Progress" count={processingOrders?.count} />,
			body:  <OrdersTable orders={processingOrders} loadingOrders={loadingProceOrders} title="Orders In Progress " />,
			key: "PROCESSING"
		},
		{
			head:  <TabLabel title="Delivered Orders" count={orders?.count} />,
			body: <OrdersTable   orders={orders} loadingOrders={loadingOrders} title="Delivered Orders" />,
			key: "DELIVERED"
		},
		{
			head:  <TabLabel title="Been Prepared Orders" count={beenPreparedOrders?.count} />,
			body: <OrdersTable   orders={beenPreparedOrders} loadingOrders={loadingBeenPreparedOrders} title="Been Prepared Orders" />,
			key: "BEEN PREPARED"
		},
		{
			head:  <TabLabel title="Canceled Orders" count={canceledOrders?.count} />,
			body: <OrdersTable   orders={canceledOrders} loadingOrders={loadingCanceled} title="Canceled Orders" />,
			key: "CANCELLED"
		},
		{
			head:  <TabLabel title="On Delivery Orders" count={onDeliveryOrders?.count} />,
			body: <OrdersTable   orders={onDeliveryOrders} loadingOrders={lodaingOnDelivery} title="On Delivery Orders" />,
			key: "ON DELIVERY"
		},
	];

	return (
		<Main> 
			<HeaderSTyles height="auto" justifyContent="space-between" margin='64px 0 40px'>
				<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="28" size="24" colour={"Black.80"}>
					Orders
				</Bold>

			
				{
					stores?.data?.length > 0 ?
						<Dropdown
							weight="300"
							direction="end"
							colour="Black.default"
							dropColor="Black.80"
							dropHovColor="Black.default"
							hovBgColor="Black.20"
							clearSelected
							searchField={false}
							initial={stores?.data?.[0]?.name }
							handleSelect={(selected: string) => setStore(selected)}
							data={stores?.data?.map((store: any) => (
								{
									displayedValue: store?.name, 
									returnedValue: store?._id,
									dropdownValue: store?.name
								}
							))|| ({
								displayedValue: "No data", 
								returnedValue: "No data",
								dropdownValue: "No data",
							}) }
						/>
						: null
				}
			</HeaderSTyles>

			{
				loadingStores ?
					<Flex><LoaderIcon	height="40" width="40"/></Flex>
					:
					<TabsStyles>
						<GeneralTabStyle>
							<Tabs
								nonActiveColor="Black.60"
								activeColor="Blue.base.default"
								click={(e) => setStatus(e.key)}
								data={tabData}
							/>
						</GeneralTabStyle>
					</TabsStyles>
			}
		
 
		</Main>
	);
};
export default Overview;
 


 


const TabLabel =({title, count}: { title: string, count: number}) => {
	return (
		<Flex width="auto" wrap="nowrap">
			{title}
			<GeneralCountStyles>
				<Span fontFamily='quicksand' weight="700" lineHeight="14" size="12" colour={"Black.80"}>
					{  count || 0}
				</Span>
			</GeneralCountStyles>
		</Flex>
	);
};