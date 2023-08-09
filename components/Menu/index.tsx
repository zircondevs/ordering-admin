
import {    DrawerMenu,DrawerMenuWrapper,Line,MenuStyles, ProfileCard, ProfileDropdownList,   } from "./styles";
import {     Bold, Dropdown, Flex,  Span  } from "..";
import React  from "react";
import { UseContext } from "../../state/provider";
import Image from "next/image";
import { AvatarIcon, LeftArrowIcon, LogOutIcon, OTHAIcon } from "../../public/assets/svg";
import { MakeOnlyFirstLettersCapital, singleSpace } from "../../lib";
import { useRouter } from "next/router";
import { useLogout } from "../../hooks/handlers/useLogout";

type ActionType = "logout" | "profile"



const Menu = ({ authScreen}: { authScreen?: boolean}) => {
	const {  state: { user, client}} = UseContext();
	const { push } = useRouter();
	const { handleLogout } = useLogout();
	
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
							<Bold  weight="600" fontFamily='quicksandMedium' lineHeight="32" size="24" colour={"Grey.1"} center>
								{user?.clientName}
							</Bold>
						</DrawerMenuWrapper>
						:
						<Flex width="auto" height="auto" wrap="nowrap">
							<OTHAIcon height="30" width="30" colour="Orange.default"/>
							{singleSpace()}
							<Bold  weight="600" fontFamily='quicksandMedium' lineHeight="32" size="24" colour={"Grey.1"} center>
								Otha
							</Bold>
						</Flex>
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
 