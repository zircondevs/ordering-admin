
import React   from "react";
import { Bold,  Flex,  Tabs,      } from "../../../components";
import { HeaderSTyles, Main, TabsStyles,    } from "./styles";
import {  GeneralTabStyle,   } from "../../../components/styles";
import LoyaltyCustomers from "./loyalty-customers";
import LoayltySettings from "./loyalty-settings";
import { Spacer } from "../../../components/Spacer";
import {  SettingsIcon, UsersIcon } from "../../../public/assets/svg";
import { useGetetUserRoleModule } from "../../../hooks/handlers/useRole";



const Loyalty = () => {
 
	const {EDIT, DELETE } = useGetetUserRoleModule( "loyalty reward");

 

	const tabData = [
		{
			head:  <><Flex margin="0 10px 0 0"><UsersIcon  height="15" width="15"/> </Flex> Loyalty Customers </>,

			body: <LoyaltyCustomers   />,
			key: "Account Information"
		},
		{
			head:  <><Flex margin="0 10px 0 0"><SettingsIcon  height="15" width="15"/> </Flex> Settings </>,
			body:  <LoayltySettings />,
			key: "User Management"
		},
	];
	

	
	return (
		<Main>

			<HeaderSTyles height="auto" justifyContent="space-between">
				<Bold fontFamily='semiBold' weight="700" lineHeight="28" size="24" colour={"Grey.2"}>
					Loyalty Program
				</Bold>
			</HeaderSTyles>

 

			<TabsStyles>
				<GeneralTabStyle>
					{
						EDIT || DELETE ?
							<Tabs
								nonActiveColor="Grey.3"
								activeColor="grey.2"
								click={() => []}
								data={tabData}
							/>
							: <LoyaltyCustomers   />
					}
				</GeneralTabStyle>
			</TabsStyles>

 
			<Spacer height="40px"/>
		
 
		</Main>
	);
};
export default Loyalty;
 



 