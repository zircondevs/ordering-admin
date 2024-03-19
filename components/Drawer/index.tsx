
import { DrawerItem,  Layout,  MenuStyles, MenuiconStyles, Overlay, SelectStores, SingleStore,   } from "./styles";
import {  Dropdown, Grid, Span  } from "..";
import React, { useEffect, useState }  from "react";
import Constant from "../../constants";
import { Spacer } from "../Spacer";
import { useRouter } from "next/router";
import { DrawerIcon,   } from "../../public/assets/svg";
import { useGetStores } from "../../hooks/useStores";
import { UseContext } from "../../state/provider";
import { STORAGE } from "../../applications/storage";
import { filterRequiredRole } from "../../lib";
import { OverFlowScrollBar } from "../OverflowContainer/styles";



const Drawer = () => {
	const { pathname, push } = useRouter();
	const [openDrawer, setOpenDrawer] = useState(false);
	const activePage = (href: string) => pathname.split("/")[2] === href.split("/")[2];
	const { state: {storeId, roleMangt , token}, setStoreId, } = UseContext();


	const { stores, } = useGetStores();


	
	useEffect(() => {
		stores?.data?.[0]?._id && setStoreId(stores?.data?.[0]?._id );
	}, [stores?.data?.[0]?._id , token]);


	useEffect(() => {
		STORAGE.SAVE(Constant.keys.storeId, storeId);
		const storeIdInStorage = STORAGE.GET(Constant.keys.storeId);
		storeIdInStorage && setStoreId(storeIdInStorage);
	}, [ storeId ]);
	
	return (
		<Layout>
			<MenuiconStyles onClick={() => setOpenDrawer(!openDrawer)}>
				<DrawerIcon height="30" width="30" colour="Grey.2"/>
			</MenuiconStyles>

			{
				openDrawer ? <Overlay onClick={() => setOpenDrawer(false)}/> : null
			}

	
			<MenuStyles openDrawer={openDrawer}>
				<OverFlowScrollBar directions="hidden auto ">
					<Spacer height="64px"/>
				

					{
						stores?.data?.length > 0 ?
							<SelectStores>
								{
									(stores?.data?.length === 1 )?
										<SingleStore>{stores?.data?.[0]?.name}</SingleStore>
										:
										<Dropdown
											weight="300"
											direction="end"
											colour="Black.default"
											dropColor="Grey.2"
											dropHovColor="Black.default"
											hovBgColor="Black.20"
											searchField={false}
											clearSelected
											initial={stores?.data?.find((store: any) => store?._id === storeId)?.name }
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
								}
							</SelectStores>
							: null
					}


				
					<Grid>
						{
							(roleMangt?.accountType === "CLIENT_ADMIN" ? Constant.drawer : filterRequiredRole(Constant.drawer, roleMangt.moduleAccessible) )
								?.map((drawerItem => (
									<DrawerItem key={drawerItem.name}
										active={activePage(drawerItem?.href)}
										onClick={() => push(drawerItem.href)}
									>
										{drawerItem.icon}
										<Span fontFamily='regular' weight="700" lineHeight="19" size="14" colour={"Black.default"}>
											{drawerItem.name}
										</Span>
									</DrawerItem>
								)))
						}
					</Grid>

				</OverFlowScrollBar>
			</MenuStyles>
		</Layout>
	);
};
export default Drawer;
 