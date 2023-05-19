

import {  CartStyles,  } from "./styles";
import React, {  useState }  from "react";
import {  NotificationIcon, } from "../../../public/assets/svg";




const Cart = ( ) => {
	const [openCart, setOpenCart ] = useState(false);

	
 

	
	return (
		<CartStyles width="47px" height="47px" cartLent={2}>
			<button onClick={() => setOpenCart(!openCart)}>
				<NotificationIcon colour="Grey.2" width="20" height="20"/>
			</button>

		</CartStyles>
	);
};
export default Cart;
