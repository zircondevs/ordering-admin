 
import React, { useState }   from "react";
import { Bold,    Tabs   } from "../../../components";
import {     HeaderSTyles, Main,   TabsStyles, } from "./styles";
import {   GeneralTabStyle } from "../../../components/styles";
import  OrdersTable from "./table";
import { GenericObjTypes } from "../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import ViewOrderDetails from "./view-order-details";
import ChangeModalStatus from "./change-status";





const Overview = () => {
	
	const [modal, setModal] = useState<GenericObjTypes & {type: string}>({type: ""});
	const modalRef = React.useRef<HandleScrollTypes>(null); 

	

 
	
 
	const tableProps = { modal, setModal, modalRef,  };
	const tabData = [
		{
			head: "Pending Orders",
			body:  <OrdersTable status={"PROCESSING"} {...tableProps}   title="Pending Orders " />,
			key: "PROCESSING"
		},
		{
			head:  "Delivered Orders",
			body: <OrdersTable  status={"DELIVERED"}  {...tableProps}     title="Delivered Orders" />,
			key: "DELIVERED"
		},
		{
			head:  "Canceled Orders",
			body: <OrdersTable  status={"CANCELLED"}  {...tableProps}    title="Canceled Orders" />,
			key: "CANCELLED"
		},
		{
			head:  "On Delivery Orders",
			body: <OrdersTable  status={"ON DELIVERY"}  {...tableProps}   title="On Delivery Orders" />,
			key: "ON DELIVERY"
		},
		{
			head:  "Opened Orders"  ,
			body: <OrdersTable  status={"OPENED"}  {...tableProps}    title="Opened Orders" />,
			key: "OPENED"
		},
	];
 

	
	return (
		<Main> 
			<HeaderSTyles height="auto" justifyContent="space-between" margin='64px 0 40px'>
				<Bold fontFamily='semiBold' weight="700" lineHeight="28" size="24" colour={"Grey.2"}>
					Orders
				</Bold>
			</HeaderSTyles>

 
			<TabsStyles>
				<GeneralTabStyle>
					<Tabs
						nonActiveColor="Grey.3"
						activeColor="Blue.base.default"
						click={(e) => console.log(e.key)}
						data={tabData}
					/>
				</GeneralTabStyle>
			</TabsStyles>

		
			<ViewOrderDetails  {...{ modal, setModal, modalRef }} />
			<ChangeModalStatus  {...{ modal, setModal, modalRef }} />
	
		</Main>
	);
};
export default Overview;
 
 