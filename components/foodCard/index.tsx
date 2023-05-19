


import React  from "react";
import {    Bold,    Small } from "..";
import {  CradStyles, Footer, ImageStyles, SubContainer } from "./styles";
import CustomButton from "../Button";
import { SUCCESS_COLOR, TERTIARY_COLOR } from "../../hooks/colors";
// import { PlateIcon } from "../../public/assets/svg";
import { formatNumber } from "../../lib";
import {useCart} from "../../hooks/handlers/useCart";
import Image from "next/image";
import { UseContext } from "../../state/provider";







const MenuCard = ({food}: any) => {

	const { handleRemoveFrom, handleAddToCart,  isInCart } = useCart();
	const { state: { pack}} = UseContext();
	
	return (
		<CradStyles alignItems="stretch">

			<ImageStyles>
				{/* <Flex bgColor="Black.10"><PlateIcon height="100" width="100" color="#bcbfc37c"/></Flex> */}
				<Image
					src={food.img}
					alt=""
					layout="fill"
					objectFit="cover"
				/>
			</ImageStyles>
			
			<SubContainer pad="24px" height="auto" >
				<Bold fontFamily='quicksandMedium' weight="700" lineHeight="21" size="18" colour={"Black.default"}>
					{food.name}
				</Bold>

				<Footer height="auto" width="auto" wrap="nowrap" margin="30px 0 0" justifyContent="space-between">
					<div>
						<Small fontFamily='quicksand' weight="400" lineHeight="14" size="10" colour={"Black.default"}>
							Per plate
						</Small>
						<br />
						<Bold fontFamily='quicksandMedium' weight="400" lineHeight="19" size="16" colour={"Black.default"}>
							₦{formatNumber(food.price)}
						</Bold>
					</div>

					<CustomButton 
						text={  isInCart(pack, food)   ? "Remove from cart" : "Add to cart"}
						bgColour={  isInCart(pack, food)  ? SUCCESS_COLOR[1] : TERTIARY_COLOR[1]}
						txtColour={ isInCart(pack, food)  ? SUCCESS_COLOR[2] :  TERTIARY_COLOR[2]}
						bodColour="white"
						pad="padding.smaller"
						onClick={() => isInCart(pack, food) ? handleRemoveFrom(pack, food) : handleAddToCart(pack, food)}
					/>
				</Footer>
			</SubContainer>

		</CradStyles>
	);
};
export default MenuCard;