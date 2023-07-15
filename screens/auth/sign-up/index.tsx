/* eslint-disable max-lines */



import React   from "react";
import { Bold, Dropdown, Flex,  Grid,  Input, Span,  } from "../../../components";
import {  Main, ModalSpacer, } from "./styles";
import { Spacer } from "../../../components/Spacer";
import { GeneralErrorContainer, GeneralInputWrap, GeneralLabel,     } from "../../../components/styles";
import CustomButton from "../../../components/Button";
import { TERTIARY_COLOR, WHITE_COLOR } from "../../../hooks/colors";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useCreateAccount,   } from "../../../hooks/useAuth";
import * as Yup from "yup";
import Codes from "../../../constants/phoneNumberCode.json";
import { singleSpace } from "../../../lib";
import { STORAGE } from "../../../applications/storage";
import Constant from "../../../constants";



export const LoginSchema = Yup.object().shape({
	businessName: Yup.string().required("Business name is required"), 
	email: Yup.string().required("email is required"), 
	password: Yup.string().required("password is required"), 
	phoneNumber: Yup.string().required("Phone number is required"), 
});


const Login = () => {
	const { push } = useRouter();
	const { handleCreateAccount, loading } = useCreateAccount();
	
	return (
		<Main >
			<div>

				<ModalSpacer direction="column" wrap="nowrap" alignItems='stretch'>

					<Flex height="auto"   margin="0 0 24px" direction="column" alignItems="flex-start">
						<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="40" size="36" colour={"Black.default"}>
							Create An Account
						</Bold>
						<Spacer height="16px"/>
						<Span fontFamily='ubuntu' weight="700" lineHeight="19" size="16" colour={"Grey.2"}>
							Please enter your details below to continue
						</Span>
					</Flex>

 
					<Formik
						validationSchema={LoginSchema}
						enableReinitialize
						initialValues={{
							businessName: "",
							email: "",
							password: "",
							dialCode: "+234",
							phoneNumber: "",
						}} 
						onSubmit={ async (values , actions) => { 
							const res = await handleCreateAccount(values);
							if(res?.data){
								STORAGE.SAVE(Constant.keys.newUser, "true");
								actions.resetForm();
								push(
									{
										pathname:  "/check-mail",
										query: {email : values.email},
									},
									"/check-mail"
								);
							}
						}}
					>
						{({handleChange,  values, setFieldValue, errors}) => (
							<Form>
								<Grid gap="16px">
									<GeneralInputWrap margin="8px 0 0">
										<GeneralLabel>Business Name </GeneralLabel>
										<Input
											value={values.businessName}
											name="businessName" 
											type={"text"} 
											handleChange={handleChange}
											borderCol={"Black.20"}
											activeBorderCol={"Blue.base.default"}
											placeholder="Enter your business Name"
											borderRadius="8px"
										/>
										<GeneralErrorContainer>
											{errors.businessName}
										</GeneralErrorContainer>
									</GeneralInputWrap>

									<GeneralInputWrap margin="8px 0 0">
										<GeneralLabel> Email </GeneralLabel>
										<Input
											value={values.email}
											name="email" 
											type={"text"} 
											handleChange={handleChange}
											borderCol={"Black.20"}
											activeBorderCol={"Blue.base.default"}
											placeholder="Enter your email"
											borderRadius="8px"
										/>
										<GeneralErrorContainer>
											{errors.email}
										</GeneralErrorContainer>
									</GeneralInputWrap>


									<GeneralInputWrap margin="8px 0 0">
										<GeneralLabel>Password</GeneralLabel>
										<Input
											value={values.password}
											name="password" 
											type={"password"} 
											handleChange={handleChange}
											borderCol={"Black.20"}
											activeBorderCol={"Blue.base.default"}
											placeholder="Enter password"
											borderRadius="8px"
										/>
										<GeneralErrorContainer>
											{errors.password}
										</GeneralErrorContainer>
									</GeneralInputWrap>

									<GeneralInputWrap margin="8px 0 0">
										<GeneralLabel> Phone Number</GeneralLabel>
										<Input
											value={values.phoneNumber}
											name="phoneNumber" 
											type={"number"} 
											handleChange={handleChange}
											borderCol={"Grey.5"}
											activeBorderCol={"Grey.2"}
											placeholder="Enter  phone number"
											borderRadius="8px"
											iconBeforeInput={
												<Dropdown
													weight="300"
													direction="start"
													colour="Grey.1"
													dropColor="Grey.2"
													dropHovColor="Grey.1"
													hovBgColor="Grey.5"
													initial="🇳🇬"
													handleSelect={(selected: any) => setFieldValue("dialCode", selected)}
													data={
														Codes.map(code => (
															{
																displayedValue: `${code?.flag}`, 
																returnedValue: code?.dial_code,
																dropdownValue: `${code?.name}  ${code?.flag}`
															}
														))
													}
												/>
											}
										/>
										<GeneralErrorContainer>
											{errors.phoneNumber}
										</GeneralErrorContainer>
									</GeneralInputWrap>
								</Grid>

								<Flex height="auto"  margin="34px 0" width="auto" justifyContent="flex-start">  
									<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="16" colour={"Grey.2"}>
										Have an account?
									</Span>
									{singleSpace()}
									<CustomButton
										size="14"
										bodColour="transparent"
										type="button"
										pad="padding.0"
										borderRadius="0"
										activeColor="Grey.2"
										text={  " Login"}
										onClick={() =>  push("/login")}  
									/>
								</Flex>
								<Flex>
									<CustomButton
										size="14"
										bgColour={TERTIARY_COLOR[2]}
										bodColour={TERTIARY_COLOR[2]}
										txtColour={WHITE_COLOR}
										fullwidth
										type="submit"
										nonActiveBgColor="Black.20"
										borderRadius="8"
										text={ "Create Account" }
										isLoading={loading}
									/>
								</Flex>
							</Form>
						)}
					</Formik>


				</ModalSpacer>
			</div>
		</Main>
	);
};
export default Login;
 