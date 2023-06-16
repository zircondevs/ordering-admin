/* eslint-disable max-lines */
 


import React, { useState }   from "react";

import { Bold,  Flex,        Span,   } from "../../../../../components";
import { Spacer } from "../../../../../components/Spacer";
import {   GeneralLabel,      } from "../../../../../components/styles";
import { Main } from "./styles";
import { Checkbox } from "../../../../../components/CheckMark";
import CustomButton from "../../../../../components/Button";
import { useGetStorePolicy } from "../../../../../hooks/useSettigs";



 
 
const CartType = ( ) => {
	const {policy}  = useGetStorePolicy();

	console.log(policy);
	const [cartType, setCartType] = useState("default");

	
	return (
		<div>


			<div>
				<Flex height="auto"   margin="0 0 40px" direction="column" alignItems="flex-start">
					<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="21" size="16" colour={"Grey.2"}>
						Cart Structure
					</Bold>
					<Spacer height="8px"/>
					<Span fontFamily='ubuntu' weight="700" lineHeight="19" size="14" colour={"Grey.4"}>
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

				<Spacer height="40px"/>
				<CustomButton
					size="14"
					activeBgColor={"Orange.default"}
					activeBorderColor={"Orange.default"}
					activeColor={"common.white"}
					type="submit"
					pad="padding.smaller"
					// isLoading={loading}
					// disabled={loadingImage}
					nonActiveBgColor="Black.20"
					text={  "Save Changes" }
				/> 

			</div>
		</div>
	);
};
export default CartType;