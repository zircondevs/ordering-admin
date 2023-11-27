

import React, { useEffect }   from "react";
import { Bold, Flex,   Span,  } from "../../../components";
import {  IconStyle, Main, ModalSpacer, } from "./styles";
import { Spacer } from "../../../components/Spacer";
import IMG from "../../../public/assets/animation_500_lh0e9zlp.gif";
import Image from "next/image";
import { useRouter } from "next/router";
import { MaskString } from "../../../lib";


 


const CheckMail = () => {
 
	
	const {  query,  back} = useRouter();

	useEffect(() => {
		if(!query?.email) back();
	}, [ query?.email ]);


	return (
		<Main >
			<div>

				<ModalSpacer direction="column" wrap="nowrap" alignItems='stretch'>
					<IconStyle>
						<Image src={IMG} alt="" />
					</IconStyle>

					<Flex height="auto"   margin="30px 0 24px" direction="column"  >
						<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="32" size="28" colour={"Black.default"}  center>
						You’ve Got Mail
						</Bold>
						<Spacer height="16px"/>
						<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="16" colour={"Grey.2"} center>
							We sent a mail to <b>{MaskString(query?.email as string)}</b> Kindly open your mail app to continue.
						</Span>
					</Flex>

				</ModalSpacer>
			</div>
		</Main>
	);
};
export default CheckMail;
 