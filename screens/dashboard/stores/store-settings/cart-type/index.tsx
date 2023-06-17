/* eslint-disable max-lines */
 


import React, { useEffect, useState }   from "react";

import { Bold,  Flex,        Span,   } from "../../../../../components";
import { Spacer } from "../../../../../components/Spacer";
import {   GeneralLabel,      } from "../../../../../components/styles";
import { Main } from "./styles";
import { Checkbox } from "../../../../../components/CheckMark";
import CustomButton from "../../../../../components/Button";
import { useGetStorePolicy } from "../../../../../hooks/useSettigs";
import { useUpdateCartPolicy } from "../../../../../hooks/useStores";
import { LoaderIcon } from "../../../../../public/assets/svg";



 
 
const CartType = ( ) => {
	const {policy, mutate, loading: loadingPolicy}  = useGetStorePolicy();
	const { loading, handleUpdatecartPolicy} = useUpdateCartPolicy();

	const [cartType, setCartType] = useState("default");






	useEffect(() => {
		const packPlan = policy?.policyActions?.find((plan: {actionPlan:  string}) => plan?.actionPlan === "pack");
		if(packPlan?.isActive ){
			setCartType("pack");
		}else {
			setCartType("default");
		}
	}, [JSON.stringify(policy?.policyActions)]);

	
	return (
		<div>


			<div>
				<Flex height="auto"   margin="0 0 40px" direction="column" alignItems="flex-start">
					<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="21" size="16" colour={"Grey.2"}>
						Cart Structure
					</Bold>
					<Spacer height="8px"/>
					<Span fontFamily='ubuntu' weight="700" lineHeight="19" size="14" colour={"Grey.4"}>
						How do you want your customers to add items to cart?
					</Span>
				</Flex>


				{
					loadingPolicy?
						<Flex height="auto"><LoaderIcon height="40" width="40" colour="Orange.default"/></Flex>
						:
						<Main gap="20px" columns="repeat(auto-fit, minmax(100px, 170px))">
							<Flex height="auto" width="auto"   justifyContent="flex-start">
								<GeneralLabel>Cart by pack</GeneralLabel>
								<Checkbox checked={cartType === "pack"}  onClick={() => setCartType("pack")} type="radio"/>
							</Flex>
							<Flex height="auto" width="auto"  justifyContent="flex-start">
								<GeneralLabel>Cart by product</GeneralLabel>
								<Checkbox checked={cartType === "default"} onClick={() => setCartType("default")} type="radio"/>
							</Flex>
						</Main>
				}

				<Spacer height="40px"/>
				<CustomButton
					size="14"
					activeBgColor={"common.white"}
					activeBorderColor={"Orange.default"}
					activeColor={"Orange.default"}
					loaderSize={30}
					type="submit"
					pad="padding.smaller"
					isLoading={loading}
					text={  "Save Changes" }
					onClick={async (  ) => {
						const res = await handleUpdatecartPolicy( { "action": cartType});
						res?.data && mutate();
					}}
				/> 

			</div>
		</div>
	);
};
export default CartType;