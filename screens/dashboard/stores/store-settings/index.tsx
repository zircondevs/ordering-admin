
import React   from "react";
import {  Tabs,  } from "../../../../components";
import {  Main,   TabsStyles,        } from "./styles"; 
import { Spacer } from "../../../../components/Spacer";
import OpeningAndClosingHrs from "./open-and-close-hrs";
import Welcome from "./welcome";
import SocialHandles from "./social-handles";
import CartType from "./cart-type";
import {  useGetStoreWorkingDaysAndSocialHandles } from "../../../../hooks/useSettigs";






 


const StoreSettings = ( ) => {

	
 
	const { workingDays, mutate: mutateSettings, socialHandles } = useGetStoreWorkingDaysAndSocialHandles();
 
	const tabData = [
		{
			head: "Opening & Closing Hours",
			body:	<OpeningAndClosingHrs  	{...{workingDays, onDone: mutateSettings}}/>,
			key: "Account Information"
		},
		{
			head: "Store Welcome Content",
			body: <Welcome  />,
			key: "User Management"
		},
		{
			head: "Social handles",
			body: <SocialHandles  {...{ socialHandles, onDone: mutateSettings}} />,
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
					nonActiveColor="Grey.3"
					activeColor="grey.1"
					click={() => []}
					data={tabData}
				/>
			</TabsStyles>
			<Spacer height="40px"/>

		</Main>
	);
};
export default StoreSettings;
