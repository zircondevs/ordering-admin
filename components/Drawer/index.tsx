
import { DrawerItem,  MenuStyles,   } from "./styles";
import {  Grid, Span  } from "..";
import React  from "react";
import Constant from "../../constants";
import { Spacer } from "../Spacer";
import { useRouter } from "next/router";



const Drawer = () => {
	const { pathname, push } = useRouter();
	
	const activePage = (href: string) => pathname.split("/")[2] === href.split("/")[2];

	
	return (
		<MenuStyles >
			<Spacer height="64px"/>
			<Grid>
				{
					Constant.drawer.map((drawerItem => (
						<DrawerItem key={drawerItem.name}
							active={activePage(drawerItem?.href)}
							onClick={() => push(drawerItem.href)}
						>
							{drawerItem.icon}
							<Span fontFamily='quicksand' weight="700" lineHeight="19" size="16" colour={"Black.default"}>
								{drawerItem.name}
							</Span>
						</DrawerItem>
					)))
				}
 
		
 
			</Grid>


		</MenuStyles>
	);
};
export default Drawer;
 