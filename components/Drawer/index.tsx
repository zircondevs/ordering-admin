
import { DrawerItem,  Layout,  MenuStyles, MenuiconStyles, Overlay,   } from "./styles";
import {  Grid, Span  } from "..";
import React, { useState }  from "react";
import Constant from "../../constants";
import { Spacer } from "../Spacer";
import { useRouter } from "next/router";
import { DrawerIcon,   } from "../../public/assets/svg";



const Drawer = () => {
	const { pathname, push } = useRouter();
	const [openDrawer, setOpenDrawer] = useState(false);
	const activePage = (href: string) => pathname.split("/")[2] === href.split("/")[2];

	
	return (
		<Layout>
			<MenuiconStyles onClick={() => setOpenDrawer(!openDrawer)}>
				<DrawerIcon height="30" width="30" colour="Grey.2"/>
			</MenuiconStyles>

			{
				openDrawer ? <Overlay onClick={() => setOpenDrawer(false)}/> : null
			}
			<MenuStyles openDrawer={openDrawer}>
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
		</Layout>
	);
};
export default Drawer;
 