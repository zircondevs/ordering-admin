 
import React    from "react";
import { Bold, Input,   } from "../../../../components";
import {      FormStyles, HeaderSTyles,   Main,  } from "./styles";
 
import CustomButton from "../../../../components/Button";
import { GeneralErrorContainer, GeneralInputWrap, GeneralLabel } from "../../../../components/styles";
import { useResetPassword } from "../../../../hooks/useAuth";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { PRIMARY_COLOR } from "../../../../hooks/colors";


export const ResetSchema = Yup.object().shape({
	oldPassword: Yup.string()
		.required("Password is required"),
	newPassword: Yup.string()
		.min(4, "Too Short!")
		.max(50, "Too Long!")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&])/,
			"Add atleast 1 Lowercase, 1 uppercase and 1 special character"
		)
		.required("Password is required"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("newPassword"), ""], "New passwords must match")
		.required("Confirm password is required"),
});



const Security = () => {
	const {handleResetPassword, loading } = useResetPassword();

	return (
		<Main>
			<HeaderSTyles height="auto" justifyContent="space-between" margin='40px 0 40px'>
				<Bold fontFamily='ubuntuSemiBold' weight="700" lineHeight="24" size="18" colour={"Grey.2"}>
					Update Password
				</Bold>
			</HeaderSTyles>

 
			<Formik
				initialValues={{
					oldPassword: "" ,
					newPassword: "" ,
					confirmPassword: "" ,
				}} 
				validationSchema={ResetSchema}
				onSubmit={ async (values , actions) => { 
					const result = await handleResetPassword( { ...values } );
					result?.data &&  actions.resetForm();
				}}
			>
				{
					({handleChange,values,errors}) => (
						<Form>
							<FormStyles gap="32px">
								<GeneralInputWrap margin="8px 0 0">
									<GeneralLabel>  Old Password</GeneralLabel>
									<Input
										value={values.oldPassword}
										name="oldPassword" 
										type={"password"} 
										handleChange={handleChange}
										borderCol={"Black.20"}
										activeBorderCol={"Blue.base.default"}
										placeholder="Enter old password"
										borderRadius="8px"
									/>
									<GeneralErrorContainer>
										{errors.oldPassword}
									</GeneralErrorContainer>
								</GeneralInputWrap>

								<GeneralInputWrap margin="8px 0 0">
									<GeneralLabel>  New password</GeneralLabel>
									<Input
										value={values.newPassword}
										name="newPassword" 
										type={"password"} 
										handleChange={handleChange}
										borderCol={"Black.20"}
										activeBorderCol={"Blue.base.default"}
										placeholder="Enter new password"
										borderRadius="8px"
									/>
									<GeneralErrorContainer>
										{errors.newPassword}
									</GeneralErrorContainer>
								</GeneralInputWrap>

								<GeneralInputWrap margin="8px 0 0">
									<GeneralLabel>  Confirm password</GeneralLabel>
									<Input
										value={values.confirmPassword}
										name="confirmPassword" 
										type={"password"} 
										handleChange={handleChange}
										borderCol={"Black.20"}
										activeBorderCol={"Blue.base.default"}
										placeholder="Re-enter new password"
										borderRadius="8px"
									/>
									<GeneralErrorContainer>
										{errors.confirmPassword}
									</GeneralErrorContainer>
								</GeneralInputWrap>

				

								<CustomButton
									size="14"
									activeColor={"common.white"}
									activeBorderColor={"common.white"}
									type="submit"
									nonActiveBgColor="Black.20"
									borderRadius="8"
									bgColour={PRIMARY_COLOR[0]}
									text={"Update" }
									isLoading={loading}
								/>
							</FormStyles>
						</Form>
					)
				}
			</Formik>

 
		</Main>
	);
};
export default Security;
 
 