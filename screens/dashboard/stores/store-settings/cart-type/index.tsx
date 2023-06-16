/* eslint-disable max-lines */
 


import React, { useState }   from "react";

import { Bold,  Flex,        Span,   } from "../../../../../components";
import { Spacer } from "../../../../../components/Spacer";
import {   GeneralLabel,      } from "../../../../../components/styles";
import { Main } from "./styles";
import { Checkbox } from "../../../../../components/CheckMark";



 
 
const CartType = ( ) => {
	
	const [cartType, setCartType] = useState("default");

	
	return (
		<div>


			<div>
				<Flex height="auto"   margin="0 0 40px" direction="column" alignItems="flex-start">
					<Bold fontFamily='quicksandMedium' weight="400" lineHeight="21" size="16" colour={"Grey.2"}>
						Cart Structure
					</Bold>
					<Spacer height="8px"/>
					<Span fontFamily='quicksand' weight="700" lineHeight="19" size="14" colour={"Grey.4"}>
						how do you want youe customers to add item to cart?
					</Span>
				</Flex>


			
				<Main gap="20px" columns="repeat(auto-fit, minmax(100px, 170px))">
					<Flex height="auto" width="auto"   justifyContent="flex-start" >
						<GeneralLabel>Cart by pack</GeneralLabel>
						<Checkbox checked={cartType === "pack"}  onClick={() => setCartType("pack")} type="radio"/>
					</Flex>
					<Flex height="auto" width="auto"  justifyContent="flex-start"	>
						<GeneralLabel>Cart by product</GeneralLabel>
						<Checkbox checked={cartType === "default"} onClick={() => setCartType("default")} type="radio"/>
					</Flex>
				</Main>

			</div>
		</div>
	);
};
export default CartType;