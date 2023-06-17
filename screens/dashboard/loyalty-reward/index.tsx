
import React   from "react";
import { Bold,  Tabs,      } from "../../../components";
import { HeaderSTyles, Main, TabsStyles,    } from "./styles";
import {  GeneralTabStyle,   } from "../../../components/styles";
import LoyaltyCustomers from "./loyalty-customers";
import LoayltySettings from "./loyalty-settings";
import { Spacer } from "../../../components/Spacer";



const Loyalty = () => {
 
 
 

	const tabData = [
		{
			head: "Loyalty Customers",
			body: <LoyaltyCustomers   />,
			key: "Account Information"
		},
		{
			head: "Loyalty Settings",
			body:  <LoayltySettings />,
			key: "User Management"
		},
	];
	
 

	return (
		<Main>

			<HeaderSTyles height="auto" justifyContent="space-between">
				<Bold fontFamily='ubuntuSemiBold' weight="700" lineHeight="28" size="24" colour={"Grey.2"}>
					Loyalty Program
				</Bold>
			</HeaderSTyles>



			<TabsStyles>
				<GeneralTabStyle>
					<Tabs
						nonActiveColor="Grey.4"
						activeColor="grey.2"
						click={() => []}
						data={tabData}
					/>
				</GeneralTabStyle>
			</TabsStyles>

 
			<Spacer height="40px"/>
		
 
		</Main>
	);
};
export default Loyalty;
 



 