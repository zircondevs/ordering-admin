/* eslint-disable max-lines */

import React    from "react";
import { Bold,  Flex,  Tabs   } from "../../../components";
import {     HeaderSTyles, Main,    TabsStyles, } from "./styles";
import {   GeneralTabStyle } from "../../../components/styles";
import AccountInfo from "./accountInfo";
import UserManagemnt from "./userMangt";
import Security from "./security";
import Subscription from "./subscription";
import { AvatarIcon, PadlockIcon, SettingsIcon } from "../../../public/assets/svg";




const Settings = () => {
 

 
	const tabData = [
		{
			head: <><Flex margin="0 10px 0 0"><AvatarIcon  height="15" width="15" colour=""/> </Flex>  Account Information</>,
			body: <AccountInfo />,
			key: "Account Information"
		},
		{
			head: <><Flex margin="0 10px 0 0"><SettingsIcon  height="15" width="15" colour=""/> </Flex>  User Management</>,

			body:  <UserManagemnt   />,
			key: "User Management"
		},
		// {
		// 	head: <><Flex margin="0 10px 0 0"><SettingsIcon  height="15" width="15" colour=""/> </Flex>  Position</>,
		// 	body: <Positions  />,
		// 	key: "Position"
		// },
		{
			head: <><Flex margin="0 10px 0 0"><PadlockIcon  height="15" width="15" colour=""/> </Flex>  Security</>,
			body: <Security />,
			key: "Security"
		},
		{
			head: "Subscription",
			body: <Subscription />,
			key: "Subscription"
		},
	];

	

	return (
		<Main>

		
			<HeaderSTyles height="auto" justifyContent="space-between" margin='64px 0 40px'>
				<Bold fontFamily='ubuntuSemiBold' weight="700" lineHeight="28" size="24" colour={"Grey.2"}>
					Settings
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
 
			
		</Main>
	);
};
export default Settings;
 

 