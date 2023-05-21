


import React, { useState }   from "react";
import { Bold, Flex,  Input, Span,  } from "../../components";
import {  Main, } from "./styles";
import { Spacer } from "../../components/Spacer";
import { GeneralInputWrap, GeneralLabel,  ModalSpacer } from "../../components/styles";
import CustomButton from "../../components/Button";
import { TERTIARY_COLOR, WHITE_COLOR } from "../../hooks/colors";
import { useRouter } from "next/router";
import { useForgotPassword } from "../../hooks/useAuth";







const ForgotPassword = () => {
	const { handleForgotPassword, loading } = useForgotPassword();
	const { push } = useRouter();
	const [email, setEmail] = useState("");
 
	return (
		<Main >
			<div>

				<ModalSpacer direction="column" wrap="nowrap" alignItems='stretch'  margin="24px 0" height="auto">


					<Flex height="auto"   margin="0 0 24px" direction="column" alignItems="flex-start">
						<Bold fontFamily='quicksandMedium' weight="400" lineHeight="40" size="36" colour={"Black.default"}>
						Forgot Password
						</Bold>
						<Spacer height="16px"/>
						<Span fontFamily='quicksand' weight="700" lineHeight="19" size="16" colour={"Black.60"}>
							Can’t remember your password, we got you covered
						</Span>
					</Flex>


					<Flex height="auto" justifyContent="flex-start" margin="32px 0 64px">
						<Span fontFamily='quicksand' weight="700" lineHeight="19" size="12" colour={"Black.default"}>
							REMEMBERED YOUR PASSWORD?
						</Span>
						<CustomButton
							size="14"
							txtColour={TERTIARY_COLOR[2]}
							bodColour="transparent"
							type="button"
							pad="padding.smallest"
							borderRadius="0"
							text={  "LOGIN"  }
							onClick={() => push("/login") }
						/>
					</Flex>

 
 
					<GeneralInputWrap margin="8px 0 0">
						<GeneralLabel>Enter your email</GeneralLabel>
						<Input
							value={email}
							name="email" 
							type={"text"} 
							handleChange={(e) => setEmail((e.target as HTMLInputElement).value)}
							borderCol={"Black.20"}
							activeBorderCol={"Blue.base.default"}
							placeholder="Enter your email"
							borderRadius="8px"
						/>
					</GeneralInputWrap>



					<Flex margin="70px 0 0">
						<CustomButton
							size="14"
							bgColour={TERTIARY_COLOR[2]}
							bodColour={TERTIARY_COLOR[2]}
							txtColour={WHITE_COLOR}
							fullwidth
							type="button"
							nonActiveBgColor="Black.20"
							text={  "Continue"  }
							disabled={!email}
							isLoading={loading}
							onClick={  async () => {
								const res = await  handleForgotPassword({email});
								if(res?.data) {
									push(
										{ pathname:  "/sent-recovery-email", query: {email },},
										"sent-recovery-email",  
									);
								}
							} }
						/>
					</Flex>

				</ModalSpacer> 
			</div>
		</Main>
	);
};
export default ForgotPassword;
 