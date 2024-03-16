
import {    ActiveStore, DrawerMenu,DrawerMenuWrapper,Line,MenuStyles, ProfileCard, ProfileDropdownList,   } from "./styles";
import {     Bold, Dropdown, Flex,  Span  } from "..";
import React  from "react";
import { UseContext } from "../../state/provider";
import Image from "next/image";
import {  AvatarIcon, LeftArrowIcon, LogOutIcon, OTHAIcon, StoreIcon } from "../../public/assets/svg";
import { MakeOnlyFirstLettersCapital,   } from "../../lib";
import { useRouter } from "next/router";
import { useLogout } from "../../hooks/handlers/useLogout";
import { useGetStores } from "../../hooks/useStores";

type ActionType = "logout" | "profile"



const Menu = ({ authScreen}: { authScreen?: boolean}) => {
	const {  state: { user, client, storeId }} = UseContext();
	const { push } = useRouter();
	const { handleLogout } = useLogout();
	const { stores } = useGetStores();
	
	const actions = {
		profile: () => push("/dashboard/settings"),
		logout: () => handleLogout()
	};


	return (
		<MenuStyles >
			<Flex wrap='nowrap' justifyContent="space-between">
				
				{
					client?.companyLogo ?
						<DrawerMenuWrapper width="auto" height="auto" wrap="nowrap">
							<DrawerMenu   justifyContent='flex-start' wrap='nowrap'>
								<Image 
									src={client?.companyLogo }
									alt="Logo"
									objectFit="contain"
									layout="fill"
									objectPosition={"left"}
								/>
							</DrawerMenu>
							<Bold  weight="600" fontFamily='ubuntuMedium' lineHeight="32" size="24" colour={"Grey.1"} center>
								{MakeOnlyFirstLettersCapital(user?.clientName)}
							</Bold>
						</DrawerMenuWrapper>
						:
						<DrawerMenuWrapper width="auto" height="auto" wrap="nowrap">
							<DrawerMenu   justifyContent='flex-start' wrap='nowrap'>
								<OTHAIcon height="30" width="30" colour="Orange.default"/>
							</DrawerMenu>
							<Bold  weight="600" fontFamily='ubuntuMedium' lineHeight="32" size="24" colour={"Grey.1"} center>
								Otha
							</Bold>
						</DrawerMenuWrapper>
				}
 
				{
					stores?.data ?
						<ActiveStore width="auto" height="auto">
							<Flex width="auto" height="auto" margin="0 8px 0 0"><StoreIcon width="25" height="25" colour="Black.60" /></Flex>
							<Bold  weight="600" fontFamily='ubuntuSemiBold' lineHeight="32" size="18" colour={"Black.default"} center>
								{stores?.data?.find((store: any) => store?._id === storeId)?.name}
							</Bold>
						</ActiveStore>
						: null
				}

				{
					authScreen ? null : 
						<Flex width="auto">
							<Line>
								<Dropdown
									type='showmore'
									weight="300"
									direction="end"
									colour="Black.default"
									dropColor="Grey.2"
									dropHovColor="Black.default"
									hovBgColor="Black.20"
									searchField={false}
									handleSelect={(selected: ActionType) => actions[selected as ActionType]()}
									data={[
										{
											displayedValue: <Flex>dads</Flex>, 
											returnedValue: "logout",
											dropdownValue: (
												<ProfileDropdownList>
													<LogOutIcon colour={"Error.default"} width="20" height="20"/>
													<Span  weight="600" fontFamily='ubuntu' lineHeight="16" size="14" colour={"Black.default"} center>
														Log Out
													</Span>
												</ProfileDropdownList>)
										},
										{
											displayedValue: <Flex>Profile</Flex>, 
											returnedValue: "profile",
											dropdownValue: (
												<ProfileDropdownList >
													<AvatarIcon colour={"Grey.3"} width="20" height="20"/>
													<Span  weight="600" fontFamily='ubuntu' lineHeight="16" size="14" colour={"Black.default"} center>
														Profile
													</Span>
												</ProfileDropdownList>)
										}
									]}
									icon={
										<ProfileCard>
											<Span  weight="600" fontFamily='ubuntu' lineHeight="19" size="14" colour={"Black.default"} center>
												{MakeOnlyFirstLettersCapital(user?.email || "")}
											</Span>
											<LeftArrowIcon  height="15" width="15"/>
										</ProfileCard>
									}
								/>

								
							</Line>
						</Flex>
				}
				
			</Flex>


		</MenuStyles>
	);
};
export default Menu;
 