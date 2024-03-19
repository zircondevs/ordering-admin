
import { useRouter } from "next/router";
import Constant from "../../../constants";
import { filterRequiredRole } from "../../../lib";
import { UseContext } from "../../../state/provider";
import Drawer from "../../Drawer";
import Menu from "../../Menu";
import { Container,   LayoutStyles } from "./styles";
import React  from "react";
import { Flex, Span } from "../..";
import { WarningIcon } from "../../../public/assets/svg";



const DashboardLayout = ({  children}: any ) => {
	const { state: { roleMangt }} = UseContext();
	const {pathname } = useRouter();


	const pathIsAllowed  = 	filterRequiredRole(Constant.drawer, roleMangt.moduleAccessible)?.find((page: any) => pathname.includes(page?.href));

 

	
	return (
		<LayoutStyles >
			<Menu  />
			<Drawer />

			
			<Container  >
				{
					pathIsAllowed ? 
						children
						:
						<Flex direction="column" margin="80px 0px !important">
							<WarningIcon colour="Error.default" height="20" width="20"/>
							<Span fontFamily='regular' weight="400" lineHeight="24" size="14" colour={"Grey.1"}>
								You do not have permission to access this page
							</Span>
							<Span fontFamily='regular' weight="400" lineHeight="19" size="12" colour={"Grey.3"}>
								Please reach out to your administrator for any inquires.
							</Span>
						</Flex>
				}
			</Container>
		</LayoutStyles>
	);
};
export default DashboardLayout;