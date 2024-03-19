


import React, { useEffect  }   from "react";
import { Bold, Flex,   Span,  } from "../../../components";
import {  ImageStyles, Main, } from "./styles";
import { Spacer } from "../../../components/Spacer";
import {   ModalSpacer } from "../../../components/styles";
import { useRouter } from "next/router";
import emailGIF from "../../../public//assets/animation_500_lh0e9zlp.gif";
import Image from "next/image";





const ForgotPassword = () => {

	const {  query,  back} = useRouter();
 
	
	useEffect(() => {
		if(!query?.email) back();
	}, [ query?.phoneNumber ]);

	
	return (
		<Main >
			<div>

				<Spacer height="24px"/>
				<ModalSpacer direction="column" wrap="nowrap" alignItems='stretch'  margin="0 0" height="auto">





					<Flex height="auto"   margin="0 0 24px" direction="column" alignItems="flex-start">
						<Bold fontFamily='medium' weight="400" lineHeight="40" size="36" colour={"Grey.1"}>
							Recovery Email Sent
						</Bold>
						<Spacer height="16px"/>
						<ImageStyles>
							<Image
								src={emailGIF}
								alt=""
								layout="fill"
								objectFit="contain"
							/>
						</ImageStyles>
						<Spacer height="16px"/>
						<Span fontFamily='regular' weight="700" lineHeight="19" size="16" colour={"Grey.2"} center>
							Please click on the link  sent to {query?.email}
						</Span>
					</Flex>

  

				</ModalSpacer> 
			</div>
		</Main>
	);
};
export default ForgotPassword;
 