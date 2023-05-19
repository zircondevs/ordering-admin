
import Menu from "../../Menu";
import { Container, LayoutStyles } from "./styles";
import React   from "react";


const AuthLayout = ({  children}: any ) => {

	

	return (
		<LayoutStyles >
			<Menu authScreen />

			<Container  >
				{children}
			</Container>
		</LayoutStyles>
	);
};
export default AuthLayout;