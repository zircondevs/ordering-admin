
import React   from "react";
import { Tabs,  } from "../../../../components";
import {  Main,   TabsStyles,        } from "./styles"; 
import { Spacer } from "../../../../components/Spacer";
import OpeningAndClosingHrs from "./open-and-close-hrs";
 


 


const StoreSettings = ( ) => {


	const tabData = [
		{
			head: "Opening & Closing Hours",
			body:	<OpeningAndClosingHrs />,
			key: "Account Information"
		},
		{
			head: "Store Message Content",
			body: "sdas",
			key: "User Management"
		},
		{
			head: "Social handles",
			body: "sdas",
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
		

		</Main>
	);
};
export default StoreSettings;
