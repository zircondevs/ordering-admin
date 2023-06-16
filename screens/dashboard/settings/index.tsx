/* eslint-disable max-lines */

import React    from "react";
import { Bold,  Tabs   } from "../../../components";
import {     HeaderSTyles, Main,    TabsStyles, } from "./styles";
import {   GeneralTabStyle } from "../../../components/styles";
import AccountInfo from "./accountInfo";
import UserManagemnt from "./userMangt";
import Security from "./security";
import Positions from "./positions";




const Settings = () => {
 

 
	const tabData = [
		{
			head: "Account Information",
			body: <AccountInfo />,
			key: "Account Information"
		},
		{
			head: "User Management",
			body:  <UserManagemnt   />,
			key: "User Management"
		},
		{
			head: "Position",
			body: <Positions  />,
			key: "Position"
		},
		{
			head: "Security",
			body: <Security />,
			key: "Security"
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
 

 