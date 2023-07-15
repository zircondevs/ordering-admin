


import React   from "react";
import { Bold, Flex,  Grid,  Input, Span,  } from "../../../components";
import {  Main, ModalSpacer, } from "./styles";
import { Spacer } from "../../../components/Spacer";
import { GeneralInputWrap, GeneralLabel,     } from "../../../components/styles";
import CustomButton from "../../../components/Button";
import { TERTIARY_COLOR, WHITE_COLOR } from "../../../hooks/colors";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useLogin } from "../../../hooks/useAuth";
import * as Yup from "yup";
import { singleSpace } from "../../../lib";
import { STORAGE } from "../../../applications/storage";
import Constant from "../../../constants";



export const LoginSchema = Yup.object().shape({
	email: Yup.string().required("email is required"), 
	password: Yup.string().required("password is required"), 
});


const Login = () => {
	const { push } = useRouter();
	const { handleLogin, loading } = useLogin();
	
	return (
		<Main >
			<div>

				<ModalSpacer direction="column" wrap="nowrap" alignItems='stretch'>

					<Flex height="auto"   margin="0 0 24px" direction="column" alignItems="flex-start">
						<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="40" size="36" colour={"Black.default"}>
							Welcome Back
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
							email: "",
							password: "",
						}} 
						onSubmit={ async (values , actions) => { 
							const res = await handleLogin(values);
							if(res?.data){
								const newUser = STORAGE.GET(Constant.keys.newUser);
								actions.resetForm();
								newUser === "true" ? push("/on-boarding") :  push("/dashboard");
							}
						}}
					>
						{({handleChange,  values, }) => (
							<Form>
								<Grid gap="32px">
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
									</GeneralInputWrap>
								</Grid>

								<Flex height="auto"  margin="34px 0" width="auto" justifyContent="flex-start">  
									<CustomButton
										size="14"
										bodColour="transparent"
										type="button"
										pad="padding.0"
										borderRadius="0"
										activeColor="Grey.2"
										text={  "FORGOT PASSWORD?"}
										onClick={() =>  push("/forgot-password")}  
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
										text={ "Log In" }
										isLoading={loading}
									/>
								</Flex>

								<Flex height="auto"  margin="34px 0" width="auto" >  
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
										text={  "Sign Up"}
										onClick={() =>  push("/signup")}  
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
 