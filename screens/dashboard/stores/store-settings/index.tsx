
import React   from "react";
import {  Tabs,  } from "../../../../components";
import {  Main,   TabsStyles,        } from "./styles"; 
import { Spacer } from "../../../../components/Spacer";
import OpeningAndClosingHrs from "./open-and-close-hrs";
import Welcome from "./welcome";
import SocialHandles from "./social-handles";
import CartType from "./cart-type";
import { useGetAdminGeneralSettings } from "../../../../hooks/useSettigs";






 


const StoreSettings = ( ) => {

	const { settings,   mutate } = useGetAdminGeneralSettings();

 
	const tabData = [
		{
			head: "Opening & Closing Hours",
			body:	<OpeningAndClosingHrs {...{settings, onDone: mutate}} />,
			key: "Account Information"
		},
		{
			head: "Store Welcome Content",
			body: <Welcome  {...{settings, onDone: mutate}} />,
			key: "User Management"
		},
		{
			head: "Social handles",
			body: <SocialHandles  {...{settings, onDone: mutate}} />,
			key: "User"
		},
		{
			head:  <> Cart Options </>,
			body: <CartType  />,
			key: "cart polocy"
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
