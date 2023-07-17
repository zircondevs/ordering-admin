/* eslint-disable max-lines */
import React   from "react";
import {   Footer,  } from "./styles";
import { Bold,   Flex, Grid, Input,     Modal,    Span,   } from "../../../../../components";
import { Spacer } from "../../../../../components/Spacer";
import CustomButton from "../../../../../components/Button";
import  { TERTIARY_COLOR, WHITE_COLOR } from "../../../../../hooks/colors";
import { GeneralErrorContainer, GeneralInputWrap, GeneralLabel,  GeneralModalStyle, ModalSpacer } from "../../../../../components/styles";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { GenericObjTypes } from "../../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import {   useAddSettingsUser, useUpdateSettingsUser } from "../../../../../hooks/useSettigs";


interface  PropType {
	setOpen: React.Dispatch<React.SetStateAction<GenericObjTypes & {type: string}>>;
	open: GenericObjTypes;
	modalRef: React.RefObject<HandleScrollTypes>;
	onDOne: () => any;
}




const AddUser = ({	open,modalRef, setOpen,onDOne,  } : PropType) => {
	
	const AddStoreSchema = Yup.object().shape({
		fullname: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Your full name is required"),
		position: Yup.string().required("Position is required"),
		...(open.type === "addNew" &&    {email: Yup.string().email().required("Email is required")}),
		password: Yup.string().required("password is required"),
	});
	const { handleAddSettingsUser, loading } = useAddSettingsUser();
	const { handleUpdateSettingsUser , loading: loadingUpdate } = useUpdateSettingsUser(open?._id);
	

	
	const closeModal = () => {
		setOpen({type: ""});
		modalRef?.current?.addBodyScroll();
		onDOne();
	};
   
	return (
		<GeneralModalStyle>
			<Modal
				show={open?.type === "addNew" || open.type === "editUser"}
				handleClose={() => closeModal()}
				innerRef={modalRef}
				direction={"right"}
				width={"500px"}
				noHeader
			>

 
				<ModalSpacer direction="column" wrap="nowrap" alignItems='stretch'  margin="64px 0">

					<Flex height="auto"   margin="0 0 70px" direction="column" alignItems="flex-start">
						<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="40" size="36" colour={"Black.default"}>
							Add User
						</Bold>
						<Spacer height="16px"/>
						<Span fontFamily='ubuntu' weight="700" lineHeight="19" size="16" colour={"Grey.2"}>
							Add a new product on the menu
						</Span>
					</Flex>


					<Formik
						enableReinitialize
						validationSchema={AddStoreSchema}
						initialValues={{
							fullname: open?.fullname ||  "" ,
							position: open?.position ||  "" ,
							...(open.type === "addNew" && {email: open?.store?.email ||  ""}) ,
							password:  "",
						}} 
						onSubmit={ async (values , actions) => { 
							const res =  open.type === "addNew" ?
								await handleAddSettingsUser({...values })
								: await handleUpdateSettingsUser({
									fullname: values.fullname,
									password: values.password,
									position: values.position
								});
							if(res?.data) {
								actions.resetForm();
								closeModal();
							}
						}}
					>
						{({handleChange, errors, values, }) => {

							return (
								<Form>
									<Grid gap="32px">						
										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel> Full Name</GeneralLabel>
											<Input
												value={values.fullname}
												name="fullname" 
												type={"text"} 
												handleChange={handleChange}
												borderCol={"Black.20"}
												activeBorderCol={"Blue.base.default"}
												placeholder="Enter your full name"
												borderRadius="8px"
											/>
											<GeneralErrorContainer>
												{errors.fullname?.toString()}
											</GeneralErrorContainer>
										</GeneralInputWrap>

										{
											open.type === "addNew" &&
											<GeneralInputWrap margin="8px 0 0">
												<GeneralLabel>  Email</GeneralLabel>
												<Input
													value={values.email}
													name="email" 
													type={"text"} 
													handleChange={handleChange}
													borderCol={"Black.20"}
													activeBorderCol={"Blue.base.default"}
													placeholder="Enter email"
													borderRadius="8px"
												/>
												<GeneralErrorContainer>
													{errors.email?.toString()}
												</GeneralErrorContainer>
											</GeneralInputWrap>
										}
						
										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel optional> What Position do you want to assign this user?</GeneralLabel>
											<Input
												value={values.position}
												name="position" 
												type={"text"} 
												handleChange={handleChange}
												borderCol={"Black.20"}
												activeBorderCol={"Blue.base.default"}
												placeholder="Enter position"
												borderRadius="8px"
											/>
											<GeneralErrorContainer>
												{errors.password?.toString()}
											</GeneralErrorContainer>
										</GeneralInputWrap>

										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel>  Password</GeneralLabel>
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
												{errors.password?.toString()}
											</GeneralErrorContainer>
										</GeneralInputWrap>
									</Grid>

									<Footer>
										<CustomButton
											size="14"
											bgColour={TERTIARY_COLOR[2]}
											bodColour={TERTIARY_COLOR[2]}
											txtColour={WHITE_COLOR}
											fullwidth
											type="submit"
											nonActiveBgColor="Black.20"
											borderRadius="0"
											isLoading={loading || loadingUpdate }
											text={ open.type === "addNew"  ?  "Add User" : "Update User"}
										/>
									</Footer>
								</Form>
							);
						}
							
						}
					</Formik>

				</ModalSpacer>
 
			</Modal>
		</GeneralModalStyle>
	);
};
export default AddUser;
