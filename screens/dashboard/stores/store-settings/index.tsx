
import React   from "react";
import { Tabs,  } from "../../../../components";
import {  Main,   TabsStyles,        } from "./styles"; 
import { Spacer } from "../../../../components/Spacer";
import OpeningAndClosingHrs from "./open-and-close-hrs";
import Welcome from "./welcome";
import SocialHandles from "./social-handles";
 


 


const StoreSettings = ( ) => {


	const tabData = [
		{
			head: "Opening & Closing Hours",
			body:	<OpeningAndClosingHrs />,
			key: "Account Information"
		},
		{
			head: "Store Welcome Content",
			body: <Welcome />,
			key: "User Management"
		},
		{
			head: "Social handles",
			body: <SocialHandles />,
			key: "User"
		},
	];
 
	return (
		<Main>
			<Spacer height="40px"/>
			<TabsStyles>
				<Tabs
					nonActiveColor="Grey.4"
					activeColor="grey.2"
					click={() => []}
					data={tabData}
				/>
			</TabsStyles>
			<Spacer height="40px"/>

		</Main>
	);
};
export default StoreSettings;
