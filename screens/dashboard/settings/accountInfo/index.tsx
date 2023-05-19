 
import React    from "react";
import { Bold, Flex, Input, Span,   } from "../../../../components";
import {     COlorFields, FormStyles, HeaderSTyles, LogoStyles, Main,  } from "./styles";
import Image from "next/image";
import CustomButton from "../../../../components/Button";
import { Spacer } from "../../../../components/Spacer";
import { GeneralInputWrap, GeneralLabel } from "../../../../components/styles";





const AccountInfo = () => {
	

	return (
		<Main>
			<HeaderSTyles height="auto" justifyContent="space-between" margin='40px 0 40px'>
				<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="24" size="18" colour={"Black.80"}>
					Update Information
				</Bold>
			</HeaderSTyles>


			<Flex width="auto" margin="0 auto 0 0" justifyContent="flex-start">
				<LogoStyles>
					<Image
						src={"https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png"}
						alt=""
						layout="fill"
						objectFit="contain"
					/>
				</LogoStyles>
			
				<div>
					<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="21" size="16" colour={"Grey.2"}>
						Company Logo
					</Bold>
					<Spacer height="4px" />
					<Span fontFamily='quicksand' weight="700" lineHeight="16" size="12" colour={"Grey.3"}>
						NB. Approved image size is 512x512px. Image should not exceed 900KB
					</Span>
					<Spacer height="24px" />
					<CustomButton
						size="14"
						activeColor={"Grey.1"}
						type="submit"
						nonActiveBgColor="Black.20"
						borderRadius="8"
						text={ "Create Category" }
					/>
				</div>
			</Flex>
 

			<FormStyles gap="32px">
				<GeneralInputWrap margin="8px 0 0">
					<GeneralLabel>  Name</GeneralLabel>
					<Input
						value={""}
						name="name" 
						type={"text"} 
						handleChange={(e) => console.log(e)}
						borderCol={"Black.20"}
						activeBorderCol={"Blue.base.default"}
						placeholder="Enter your full name"
						borderRadius="8px"
					/>
				</GeneralInputWrap>


				<GeneralInputWrap margin="8px 0 0">
					<GeneralLabel>Choose a primary color</GeneralLabel>
					<COlorFields>
						<input type={"color"} />
					</COlorFields>
				</GeneralInputWrap>

				<GeneralInputWrap margin="8px 0 0">
					<GeneralLabel>Choose a secondary color</GeneralLabel>
					<COlorFields>
						<input type={"color"} />
					</COlorFields>
				</GeneralInputWrap>

				<CustomButton
					size="14"
					activeColor={"Grey.1"}
					type="submit"
					nonActiveBgColor="Black.20"
					fullwidth
					borderRadius="8"
					text={"Update changes Category" }
				/>
			</FormStyles>
 
		</Main>
	);
};
export default AccountInfo;
 
 