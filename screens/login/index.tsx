


import React   from "react";
import { Bold, Flex,  Grid,  Input, Span,  } from "../../components";
import {  Main, ModalSpacer, } from "./styles";
import { Spacer } from "../../components/Spacer";
import { GeneralInputWrap, GeneralLabel,     } from "../../components/styles";
import CustomButton from "../../components/Button";
import { TERTIARY_COLOR, WHITE_COLOR } from "../../hooks/colors";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useLogin } from "../../hooks/useAuth";
 





const Login = () => {
	const { push } = useRouter();
	const { handleLogin, loading } = useLogin();
	
	return (
		<Main >
			<div>

				<ModalSpacer direction="column" wrap="nowrap" alignItems='stretch'>

					<Flex height="auto"   margin="0 0 24px" direction="column" alignItems="flex-start">
						<Bold fontFamily='quicksandMedium' weight="400" lineHeight="40" size="36" colour={"Black.default"}>
							Welcome Back
						</Bold>
						<Spacer height="16px"/>
						<Span fontFamily='quicksand' weight="700" lineHeight="19" size="16" colour={"Black.60"}>
							Please enter your details below to continue
						</Span>
					</Flex>


					<Flex height="auto" justifyContent="flex-start" margin="24px 0 32px">
						<Span fontFamily='quicksand' weight="700" lineHeight="19" size="12" colour={"Black.default"}>
						DON’T HAVE AN ACCOUNT?
						</Span>
						<CustomButton
							size="14"
							txtColour={TERTIARY_COLOR[2]}
							bodColour="transparent"
							type="button"
							pad="padding.smallest"
							borderRadius="0"
							text={  "SIGN UP"  }
							onClick={() => []}
						/>
					</Flex>
 
 
					<Formik
						enableReinitialize
						initialValues={{
							email: "",
							password: "",
						}} 
						onSubmit={ async (values , actions) => { 
							const res = await handleLogin(values);
							if(res?.data){
								actions.resetForm();
								push("/dashboard");
							}
						}}
					>
						{({handleChange,  values, dirty}) => (
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
											placeholder="Enter code"
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
										activeColor="Black.80"
										text={  "FORGOT PASSWORD?"}
										onClick={() =>  [] }
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
										borderRadius="0"
										text={ "Log In" }
										disabled={dirty}
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
 