/* eslint-disable max-lines */
import React   from "react";
import {   Footer,  } from "./styles";
import { Bold,  Dropdown,  Flex, Grid, Input,     Modal,    Span,   } from "../../../../../components";
import { UseContext } from "../../../../../state/provider";
import { Spacer } from "../../../../../components/Spacer";
import CustomButton from "../../../../../components/Button";
import  { TERTIARY_COLOR, WHITE_COLOR } from "../../../../../hooks/colors";
import { GeneralErrorContainer, GeneralInputWrap, GeneralLabel, GeneralModalHeader, GeneralModalStyle, GeneralSelectField, ModalSpacer } from "../../../../../components/styles";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { GenericObjTypes } from "../../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import { LongArrowicon } from "../../../../../public/assets/svg";
import { useCreateCategory, useGetCategories } from "../../../../../hooks/useCategory";


interface  PropType {
	setOpen: React.Dispatch<React.SetStateAction<GenericObjTypes & {type: string}>>;
	open: GenericObjTypes;
	modalRef: React.RefObject<HandleScrollTypes>;
	onDOne: () => any
}

export const AddStoreSchema = Yup.object().shape({
	name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Your full name is required"),
	position: Yup.string().required("Position is required"),
	email: Yup.string().email().required("Email is required"),
	password: Yup.string().required("password is required"),
});



const AddUser = ({	open,modalRef, setOpen,onDOne } : PropType) => {

	const { setModal, } = UseContext();
	const { handleCreateCategory, loading } = useCreateCategory();
	const { categories,   } = useGetCategories();
	
	
	const closeModal = () => {
		setOpen({type: ""});
		modalRef?.current?.addBodyScroll();
		setModal("");
		onDOne();
	};
   
	return (
		<GeneralModalStyle>
			<Modal
				show={open?.type === "addNew"}
				handleClose={() => closeModal()}
				innerRef={modalRef}
				direction={"right"}
				width={"500px"}
				noHeader
				noCancel
			>

				<GeneralModalHeader>
					<button onClick={() => closeModal()}>
						<Flex height="auto" justifyContent="flex-start">
							<LongArrowicon width="20" height="20"/>
							<Span fontFamily='quicksand' weight="700" lineHeight="16" size="14" colour={"Black.default"}>
								Go Back
							</Span>
						</Flex>
					</button>
				</GeneralModalHeader>


				<ModalSpacer direction="column" wrap="nowrap" alignItems='stretch'  margin="64px 0">

					<Flex height="auto"   margin="0 0 70px" direction="column" alignItems="flex-start">
						<Bold fontFamily='quicksandMedium' weight="400" lineHeight="40" size="36" colour={"Black.default"}>
							Add User
						</Bold>
						<Spacer height="16px"/>
						<Span fontFamily='quicksand' weight="700" lineHeight="19" size="16" colour={"Black.60"}>
							Add a new food on the menu
						</Span>
					</Flex>

 
					<Formik
						enableReinitialize
						validationSchema={AddStoreSchema}
						initialValues={{
							name: open?.store?.name ||  "" ,
							position: open?.store?.position ||  "" ,
							email: open?.store?.email ||  "" ,
							password:  "" ,
						}} 
						onSubmit={ async (values , actions) => { 
							const res =  await handleCreateCategory({...values });
							if(res?.data) {
								actions.resetForm();
								closeModal();
							}
						}}
					>
						{({handleChange, errors, values, setFieldValue}) => {

							return (
								<Form>
									<Grid gap="32px">						
										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel>  Name</GeneralLabel>
											<Input
												value={values.name}
												name="name" 
												type={"text"} 
												handleChange={handleChange}
												borderCol={"Black.20"}
												activeBorderCol={"Blue.base.default"}
												placeholder="Enter your full name"
												borderRadius="8px"
											/>
											<GeneralErrorContainer>
												{errors.name?.toString()}
											</GeneralErrorContainer>
										</GeneralInputWrap>

										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel>  Email</GeneralLabel>
											<Input
												value={values.email}
												name="email" 
												type={"text"} 
												handleChange={handleChange}
												borderCol={"Black.20"}
												activeBorderCol={"Blue.base.default"}
												placeholder="Enter your full name"
												borderRadius="8px"
											/>
											<GeneralErrorContainer>
												{errors.name?.toString()}
											</GeneralErrorContainer>
										</GeneralInputWrap>
						
										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel>Position</GeneralLabel>
											<GeneralSelectField>
												<Dropdown
													weight='600'
													colour='Black.80'
													hovBgColor='Black.10'
													dropHovColor='Black.80'
													dropColor='Black.80'
													direction='end'
													searchField={true}
													data={ categories?.data?.map((state: GenericObjTypes) => (
														{
															returnedValue: state?._id,
															displayedValue: state?.name,
															dropdownValue:  state?.name,
														}
													)) || [{
														returnedValue: "No data",
														displayedValue: "No data",
														dropdownValue:  "No data",
													}]}
													handleSelect={(e: string) => setFieldValue("localGovernmentArea", e)}
												/>
											</GeneralSelectField>
											<GeneralErrorContainer>
												{errors.position?.toString()}
											</GeneralErrorContainer>
										</GeneralInputWrap>

										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel>  Password</GeneralLabel>
											<Input
												value={values.password}
												name="password" 
												type={"text"} 
												handleChange={handleChange}
												borderCol={"Black.20"}
												activeBorderCol={"Blue.base.default"}
												placeholder="Enter your full name"
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
											isLoading={loading}
											text={   "Create Category" }
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