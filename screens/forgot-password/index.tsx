


import React, { useState }   from "react";
import { Bold, Flex,   Span,  } from "../../components";
import {  InputsFrame, Main, } from "./styles";
import { Spacer } from "../../components/Spacer";
import {  GeneralModalHeader, ModalSpacer } from "../../components/styles";
import CustomButton from "../../components/Button";
import { TERTIARY_COLOR, WHITE_COLOR } from "../../hooks/colors";
import { LongArrowicon } from "../../public/assets/svg";
import { useRouter } from "next/router";
import Constant from "../../constants";
import OTPInput from "../../components/OTP";
import { useForgotPassword } from "../../hooks/useAuth";
 





const ForgotPassword = () => {

	const { push , query, back} = useRouter();
	const [OTP, setOTP] = useState("");
	const { handleForgotPassword, loading} = useForgotPassword();
	if(!query?.phoneNumber) back();

	
	return (
		<Main >
			<div>

				<GeneralModalHeader>
					<button onClick={() =>  push("/forgot-password")}>
						<Flex height="auto" justifyContent="flex-start">
							<LongArrowicon width="20" height="20"/>
							<Span fontFamily='quicksand' weight="700" lineHeight="16" size="14" colour={"Black.default"}>
								Go Back
							</Span>
						</Flex>
					</button>
				</GeneralModalHeader>
				<ModalSpacer direction="column" wrap="nowrap" alignItems='stretch'  margin="0 0" height="auto">


					<Flex height="auto"   margin="0 0 24px" direction="column" alignItems="flex-start">
						<Bold fontFamily='quicksandMedium' weight="400" lineHeight="40" size="36" colour={"Black.default"}>
							Reset Your Phone Number
						</Bold>
						<Spacer height="16px"/>
						<Span fontFamily='quicksand' weight="700" lineHeight="19" size="16" colour={"Black.60"}>
							Enter the  code   sent to {query?.phoneNumber}
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
							onClick={() => push(`/?${Constant.modal.modal}=${Constant.modal.login}`) }
						/>
					</Flex>

 
					<InputsFrame gap='12px' id='InputsFrame'>
						<OTPInput
							autoFocus
							isNumberInput
							length={5}
							className="otpContainer"
							inputClassName="otpInput"
							onChangeOTP={(otp) => setOTP(otp)}
						/>
					</InputsFrame>
 



					<Flex margin="70px 0 0">
						<CustomButton
							size="14"
							bgColour={TERTIARY_COLOR[2]}
							bodColour={TERTIARY_COLOR[2]}
							txtColour={WHITE_COLOR}
							fullwidth
							type="button"
							nonActiveBgColor="Black.20"
							disabled={OTP.length !== 5}
							text={ "Reset" }
							isLoading={loading}
							onClick={ async () =>  {
								const res = await  handleForgotPassword("" +OTP);
								res?.data && push("/");
							} }
						/>
					</Flex>

				</ModalSpacer> 
			</div>
		</Main>
	);
};
export default ForgotPassword;
 