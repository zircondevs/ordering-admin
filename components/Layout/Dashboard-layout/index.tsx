
import Drawer from "../../Drawer";
import Menu from "../../Menu";
import { Container, LayoutStyles } from "./styles";
import React   from "react";


const DashboardLayout = ({  children}: any ) => {

	

	return (
		<LayoutStyles >
			<Menu  />
			<Drawer />

			
			<Container  >
				{children}
			</Container>
		</LayoutStyles>
	);
};
export default DashboardLayout;