
import { DrawerItem,  Layout,  MenuStyles, MenuiconStyles, Overlay, SelectStores,   } from "./styles";
import {  Dropdown, Grid, Span  } from "..";
import React, { useEffect, useState }  from "react";
import Constant from "../../constants";
import { Spacer } from "../Spacer";
import { useRouter } from "next/router";
import { DrawerIcon,   } from "../../public/assets/svg";
import { useGetStores } from "../../hooks/useStores";
import { UseContext } from "../../state/provider";



const Drawer = () => {
	const { pathname, push } = useRouter();
	const [openDrawer, setOpenDrawer] = useState(false);
	const activePage = (href: string) => pathname.split("/")[2] === href.split("/")[2];
	const { setStoreId, } = UseContext();


	const { stores, } = useGetStores();


	useEffect(() => {
		stores?.data?.[0]?._id && setStoreId(stores?.data?.[0]?._id );
	}, [stores?.data?.[0]?._id ]);
	
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
				

				{
					stores?.data?.length > 0 ?
						<SelectStores>
							<Dropdown
								weight="300"
								direction="end"
								colour="Black.default"
								dropColor="Black.80"
								dropHovColor="Black.default"
								hovBgColor="Black.20"
								searchField={false}
								clearSelected
								initial={stores?.data?.[0]?.name }
								handleSelect={(selected: string) => setStoreId(selected)}
								data={stores?.data?.map((store: any) => (
									{
										displayedValue: store?.name, 
										returnedValue: store?._id,
										dropdownValue: store?.name
									}
								))|| ({
									displayedValue: "No data", 
									returnedValue: "No data",
									dropdownValue: "No data",
								}) }
							/>
						</SelectStores>
						: null
				}


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
 