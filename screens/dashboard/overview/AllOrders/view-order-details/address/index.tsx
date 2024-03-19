



import React   from "react";
import {   Container1,  DeliveryTypeStyle,  } from "./styles";
import { Bold,   Flex, Span,      } from "../../../../../../components";
import {     AddressIcon, AvatarIcon, RiderIcon,     } from "../../../../../../public/assets/svg";
import { Spacer } from "../../../../../../components/Spacer";
import { GeneralDivider } from "../../../../../../components/styles";




 

 
const Address = ({ order}: any ) =>  {
		

 
 
	return (
		<DeliveryTypeStyle height="autp" justifyContent="space-between" PRIMARY_COLOR={"red"}>
			<Container1 height="auto" justifyContent="space-between" wrap="nowrap">
				<Flex width="auto" height="auto" wrap="nowrap">
					<AddressIcon height="20" width="25"  colour="Orange.default" /> 
					<Bold fontFamily='regular' weight="400" lineHeight="16" size="14" colour={"Grey.3"}>
						Address
					</Bold>
				</Flex>
 
			</Container1>
			<Spacer height="16px"/>
			<Span fontFamily='regular' weight="600" lineHeight="21" size="16" colour={"Grey.2"}>
				{order?.deliveryAddress || "N/A"}
			</Span>

			<Spacer height="20px"/>
			<GeneralDivider />
			<Spacer height="20px"/>


			<Container1 height="auto" justifyContent="space-between" wrap="nowrap">
				<Flex width="auto" height="auto" wrap="nowrap" direction="column" alignItems="flex-start">
					<Flex width="auto" height="auto" wrap="nowrap">
						<AvatarIcon height="20" width="25"  colour="Orange.default" /> 
						<Span fontFamily='regular' weight="400" lineHeight="16" size="14" colour={"Grey.3"}>
							Customer Name
						</Span>
					</Flex>
					<Spacer height="8px"/>
					<Bold fontFamily='regular' weight="600" lineHeight="21" size="16" colour={"Grey.2"}>
						{order?.clientName || "N/A"}
					</Bold>
				</Flex>

				<Flex width="auto" height="auto" wrap="nowrap" direction="column" alignItems="flex-end">
					<Span fontFamily='regular' weight="400" lineHeight="16" size="14" colour={"Grey.3"} textAlign="end">
						Customer phone number
					</Span>
					<Spacer height="8px"/>
					<Bold fontFamily='regular' weight="600" lineHeight="21" size="16" colour={"Grey.2"} textAlign="end">
						{order?.clientPhoneNumber || "N/A" }
					</Bold>
				</Flex>
			</Container1>

			<Spacer height="20px"/>
			<GeneralDivider />
			<Spacer height="20px"/>

			<Container1 height="auto" justifyContent="space-between" wrap="nowrap">
				<Flex width="auto" height="auto" wrap="nowrap">
					<RiderIcon height="20" width="30" colour="Orange.default"/> 
					<Bold fontFamily='regular' weight="600" lineHeight="16" size="14" colour={"Grey.3"}>
						Delivery Type
					</Bold>
				</Flex>
 
				<Span fontFamily='regular' weight="400" lineHeight="16" size="16" colour={"Grey.2"}>
					{order?.deliveryType || "N/A" }
				</Span>
			</Container1>
 
	
		</DeliveryTypeStyle>
	);
};

export default Address;
 