/* eslint-disable max-lines */
 
import React   from "react";
import {   Footer,  } from "./styles";
import { Bold,  Dropdown,  Flex, Grid, Input,     Modal,    Span,   } from "../../../../components";
import { UseContext } from "../../../../state/provider";
import { Spacer } from "../../../../components/Spacer";
import CustomButton from "../../../../components/Button";
import  { TERTIARY_COLOR, WHITE_COLOR } from "../../../../hooks/colors";
import Constant from "../../../../constants";
import { GeneralErrorContainer, GeneralInputWrap, GeneralLabel, GeneralModalHeader, GeneralModalStyle, GeneralSelectField, ModalSpacer } from "../../../../components/styles";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { GenericObjTypes } from "../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import { LongArrowicon } from "../../../../public/assets/svg";
import { useCreateCategory, useGetCategories } from "../../../../hooks/useCategory";


interface  PropType {
	setOpen: React.Dispatch<React.SetStateAction<GenericObjTypes & {type: string}>>;
	open: GenericObjTypes;
	modalRef: React.RefObject<HandleScrollTypes>;
	onDOne: () => any
}

export const AddStoreSchema = Yup.object().shape({
	name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Your full name is required"),
	category: Yup.string().required("Category is required"),
});



const AddFood = ({	open,modalRef, setOpen,onDOne } : PropType) => {

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
				show={open?.type === "addFood"}
				handleClose={() => closeModal()}
				innerRef={modalRef}
				direction={"right"}
				width={"500px"}
				noHeader
			>

				<GeneralModalHeader>
					<button onClick={() => setModal(Constant.modal.createAccount)}>
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
							Add Foood
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
							category: open?.store?.category ||  "" ,
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
										{/* <Flex>
											<Checkbox
												name="deliveryType"
												checked={checkoutForm.paymentType ===  type.value}
												type="radio"
												value={type.value}
												onClick={(e: React.ChangeEvent<HTMLInputElement>) => setCheckoutForm({...checkoutForm, paymentType:  e.target.value})}
											/>
										</Flex> */}
						
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
											<GeneralLabel>LGA</GeneralLabel>
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
												{errors.category?.toString()}
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
export default AddFood;
