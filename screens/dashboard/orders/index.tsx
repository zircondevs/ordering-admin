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
	// const { orders: beenPreparedOrders ,  ...more3 } = useGetOrders(   "BEEN PREPARED");
	const { orders: canceledOrders ,    ...more4 } = useGetOrders( "CANCELLED");
	const { orders: onDeliveryOrders ,   ...more5 } = useGetOrders(  "ON DELIVERY");
	const { orders: openedOrders ,   ...more6 } = useGetOrders(  "OPENED");

	
 
	const tableProps = {singleOrder, setSingleOrder, modalRef,  };
	const tabData = [
		{
			head: <TabLabel title="Pending Orders" count={more1?.pageInfo?.count} />,
			body:  <OrdersTable  {...{...more1 }} {...tableProps} orders={processingOrders}  title="Pending Orders " />,
			key: "PROCESSING"
		},
		{
			head:  <TabLabel title="Delivered Orders" count={more2?.pageInfo?.count} />,
			body: <OrdersTable   {...{...more2}}  {...tableProps}  orders={orders}   title="Delivered Orders" />,
			key: "DELIVERED"
		},
		{
			head:  <TabLabel title="Canceled Orders" count={more4?.pageInfo?.count} />,
			body: <OrdersTable  {...{...more4}}   {...tableProps}  orders={canceledOrders}  title="Canceled Orders" />,
			key: "CANCELLED"
		},
		{
			head:  <TabLabel title="On Delivery Orders" count={more5?.pageInfo?.count} />,
			body: <OrdersTable  {...{...more5}}   {...tableProps}  orders={onDeliveryOrders} title="On Delivery Orders" />,
			key: "ON DELIVERY"
		},
		{
			head:  <TabLabel title="Opened Orders" count={more6?.pageInfo?.count} />,
			body: <OrdersTable  {...{...more6}}   {...tableProps}  orders={openedOrders}   title="Opened Orders" />,
			key: "OPENED"
		},
	];
 

	
	return (
		<Main> 
			<HeaderSTyles height="auto" justifyContent="space-between" margin='64px 0 40px'>
				<Bold fontFamily='ubuntuSemiBold' weight="700" lineHeight="28" size="24" colour={"Grey.2"}>
					Orders
				</Bold>
			</HeaderSTyles>

 
			<TabsStyles>
				<GeneralTabStyle>
					<Tabs
						nonActiveColor="Grey.4"
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
				<Span fontFamily='ubuntu' weight="700" lineHeight="14" size="12" colour={"Grey.2"}>
					{  count || 0}
				</Span>
			</GeneralCountStyles>
		</Flex>
	);
};