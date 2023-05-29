/* eslint-disable max-lines */

import React, { useState }   from "react";
import { Bold,  Flex,  Span,   Tabs   } from "../../../components";
import {     HeaderSTyles, Main,   TabsStyles, } from "./styles";
import { GeneralCountStyles, GeneralTabStyle } from "../../../components/styles";
import  OrdersTable from "./table";
import { useGetOrders } from "../../../hooks/useOrders";
import { GenericObjTypes } from "../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import ViewOrderDetails from "./view-order-details";





const Overview = () => {
	

	const [singleOrder, setSingleOrder] = useState<GenericObjTypes>({});
	const modalRef = React.useRef<HandleScrollTypes>(null); 

	

	const { orders: processingOrders ,   ...more1 } = useGetOrders( "PROCESSING");
	const { orders ,  ...more2 } = useGetOrders( "DELIVERED");
	const { orders: beenPreparedOrders ,  ...more3 } = useGetOrders(   "BEEN PREPARED");
	const { orders: canceledOrders ,    ...more4 } = useGetOrders( "CANCELLED");
	const { orders: onDeliveryOrders ,   ...more5 } = useGetOrders(  "ON DELIVERY");

	

	
	const tableProps = {singleOrder, setSingleOrder, modalRef };
	const tabData = [
		{
			head: <TabLabel title="In Progress" count={processingOrders?.count} />,
			body:  <OrdersTable  {...{...more1}} {...tableProps}orders={processingOrders}  title="Orders In Progress " />,
			key: "PROCESSING"
		},
		{
			head:  <TabLabel title="Delivered Orders" count={orders?.count} />,
			body: <OrdersTable   {...{...more2}}  {...tableProps}  orders={orders}   title="Delivered Orders" />,
			key: "DELIVERED"
		},
		{
			head:  <TabLabel title="Been Prepared Orders" count={beenPreparedOrders?.count} />,
			body: <OrdersTable  {...{...more3}}   {...tableProps}  orders={beenPreparedOrders}  title="Been Prepared Orders" />,
			key: "BEEN PREPARED"
		},
		{
			head:  <TabLabel title="Canceled Orders" count={canceledOrders?.count} />,
			body: <OrdersTable  {...{...more4}}   {...tableProps}  orders={canceledOrders}  title="Canceled Orders" />,
			key: "CANCELLED"
		},
		{
			head:  <TabLabel title="On Delivery Orders" count={onDeliveryOrders?.count} />,
			body: <OrdersTable  {...{...more5}}   {...tableProps}  orders={onDeliveryOrders} title="On Delivery Orders" />,
			key: "ON DELIVERY"
		},
	];

	return (
		<Main> 
			<HeaderSTyles height="auto" justifyContent="space-between" margin='64px 0 40px'>
				<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="28" size="24" colour={"Black.80"}>
					Orders
				</Bold>
			</HeaderSTyles>

 
			<TabsStyles>
				<GeneralTabStyle>
					<Tabs
						nonActiveColor="Black.60"
						activeColor="Blue.base.default"
						click={(e) => console.log(e.key)}
						data={tabData}
					/>
				</GeneralTabStyle>
			</TabsStyles>

		
			<ViewOrderDetails  {...{singleOrder, setSingleOrder, modalRef }} />
	
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