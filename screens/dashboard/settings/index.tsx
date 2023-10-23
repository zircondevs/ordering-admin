/* eslint-disable max-lines */

import React, { useEffect, useState }    from "react";
import { Bold,  Flex,   Tabs   } from "../../../components";
import {     HeaderSTyles, Main,         StoreLinkStyles,    TabsStyles, } from "./styles";
import {   GeneralTabStyle } from "../../../components/styles";
import AccountInfo from "./accountInfo";
import UserManagemnt from "./userMangt";
import Security from "./security";
import Subscription from "./subscription";
import { AvatarIcon, PadlockIcon, SettingsIcon, StoreIcon } from "../../../public/assets/svg";
import { useGetetUserRoleModule } from "../../../hooks/handlers/useRole";
import { UseContext } from "../../../state/provider";





const Settings = () => {
	const { state: { client }} = UseContext();
	const {IS_CLIENT_ADMIN  } = useGetetUserRoleModule( "settings");

	const [copied, setCopied] = useState(false);


	useEffect(() => {
		copied && setTimeout(() => setCopied(false),  2000);
	}, [ copied ]);
 
	const tabData = [
		{
			head: <><Flex margin="0 10px 0 0"><AvatarIcon  height="15" width="15" colour=""/> </Flex>  Account Information</>,
			body: <AccountInfo />,
			key: "Account Information"
		},
		IS_CLIENT_ADMIN ?
			{
				head: <><Flex margin="0 10px 0 0"><SettingsIcon  height="15" width="15" colour=""/> </Flex>  User Management</>,
				body:  <UserManagemnt   />,
				key: "User Management"
			}: {},
		// {
		// 	head: <><Flex margin="0 10px 0 0"><SettingsIcon  height="15" width="15" colour=""/> </Flex>  Position</>,
		// 	body: <Positions  />,
		// 	key: "Position"
		// },
		IS_CLIENT_ADMIN ?
			{
				head: <><Flex margin="0 10px 0 0"><PadlockIcon  height="15" width="15" colour=""/> </Flex>  Security</>,
				body: <Security />,
				key: "Security"
			}: {},
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

				{
					client?.companyName ?
						<StoreLinkStyles wrap="nowrap" copied={copied}>
							<StoreIcon height="16" width="16"  colour={"Blue.default"}/>
							<a href={`https://${client?.companyName}.otha.io`} 	rel="noopener noreferrer" target="_blank" >
								<Bold fontFamily='ubuntuMedium' weight="600" lineHeight="19" size="14" colour={"Blue.default"}>
									{`https://${client?.companyName}.otha.io`}
								</Bold>
							</a>
							<button
								onClick={() => {
									setCopied(true);
									navigator.clipboard.writeText(`https://${client?.companyName}.otha.io`);
								}}
							>
								{copied ? "Copied" : "Copy Store Link"}
							</button>
						</StoreLinkStyles>
						: null
				}
			</HeaderSTyles>

	
			<TabsStyles>
				<GeneralTabStyle>
					<Tabs
						nonActiveColor="Grey.4"
						activeColor="grey.2"
						click={() => []}
						data={tabData.filter((_) => _?.head ) as  { head: any; body: any; key: any;}[]}
					/>
				</GeneralTabStyle>
			</TabsStyles>
 
			
		</Main>
	);
};
export default Settings;
 

 