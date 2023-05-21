/* eslint-disable max-lines */
 
import React, { useState }   from "react";
import {   Footer,  } from "./styles";
import { Bold,  Container,  Dropdown,  Flex, Grid, Input,     Modal,    Span, Switch,   } from "../../../../components";
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
import { useGetCategories } from "../../../../hooks/useCategory";
import { useCreateFood, useUpdateFood } from "../../../../hooks/useFood";



interface  PropType {
	setOpen: React.Dispatch<React.SetStateAction<GenericObjTypes & {type: string}>>;
	open: {type: string, [e: string]: any };
	modalRef: React.RefObject<HandleScrollTypes>;
	onDOne: () => any;
	storeId: string
}

export const AddStoreSchema = Yup.object().shape({
	name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Your full name is required"),
	category: Yup.string().required("Category is required"),
	amount: Yup.number().required("Amount is required"),
	foodImage: Yup.string().required("Amount is required"),
});



const AddFood = ({	open,modalRef, setOpen,onDOne, storeId } : PropType) => {
	const [isAvailable, setIsAvaliable] = useState(true);
	const { setModal, } = UseContext();
	const { categories,   } = useGetCategories();
	const { handleCreateFood, loading: creatingFOod} = useCreateFood(storeId);
	const { handleUpdateFood, loading: loading} = useUpdateFood(open?._id);
	
	const closeModal = () => {
		setOpen({type: ""});
		modalRef?.current?.addBodyScroll();
		setModal("");
		onDOne();
	};

 
 
	return (
		<GeneralModalStyle>
			<Modal
				show={open?.type === "addFood" || open.type === "editFood"}
				handleClose={() => closeModal()}
				innerRef={modalRef}
				direction={"right"}
				width={"500px"}
				noCancel
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
							{ open?.type === "addFood"  ? "Add ": "Update "}  Food
						</Bold>
						<Spacer height="16px"/>
						<Span fontFamily='quicksand' weight="700" lineHeight="19" size="16" colour={"Black.60"}>
							{ open?.type === "addFood"  ? " Add a new  ": "Update "} food on the menu
						</Span>
					</Flex>

 
					<Formik
						enableReinitialize
						validationSchema={AddStoreSchema}
						initialValues={{
							name: open?.name ||  "" ,
							category:  open?.category?._id ||  "" ,
							amount: open?.amount ||  "" ,
							foodImage: open?.foodImage ||  "" ,
						}} 
						onSubmit={ async (values , actions) => { 
							const res = open.type === "addFood" ?
								await handleCreateFood({...values })
								: await handleUpdateFood({...values, isAvailable } );
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
										{
											open.type === "editFood" && 
											<Flex height="auto" justifyContent="flex-start">
												<Span fontFamily='quicksand' weight="700" lineHeight="19" size="16" colour={"Black.60"}>
													Is this food still avaliable?
												</Span>
												<Container width="auto" height="auto" margin="0 0 0 8px ">
													<Switch 
														activeColor="Success.default"
														nonActiveColor="Grey.5"
														click={(e) => setIsAvaliable(e)}
														initialState={isAvailable}
													/>
												</Container>
											</Flex>
										}	


										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel> Add food Name</GeneralLabel>
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
											<GeneralLabel> Amount</GeneralLabel>
											<Input
												value={values.amount}
												name="amount" 
												type={"number"} 
												handleChange={handleChange}
												borderCol={"Black.20"}
												activeBorderCol={"Blue.base.default"}
												placeholder="Enter your full name"
												borderRadius="8px"
											/>
											<GeneralErrorContainer>
												{errors.amount?.toString()}
											</GeneralErrorContainer>
										</GeneralInputWrap>

										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel> Add food image</GeneralLabel>
											<Input
												value={values.foodImage}
												name="foodImage" 
												type={"text"} 
												handleChange={handleChange}
												borderCol={"Black.20"}
												activeBorderCol={"Blue.base.default"}
												placeholder="Enter your full name"
												borderRadius="8px"
											/>
											<GeneralErrorContainer>
												{errors.foodImage?.toString()}
											</GeneralErrorContainer>
										</GeneralInputWrap>
						
									
										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel>Select category</GeneralLabel>
											<GeneralSelectField>
												<Dropdown
													weight='600'
													colour='Black.80'
													hovBgColor='Black.10'
													dropHovColor='Black.80'
													dropColor='Black.80'
													direction='end'
													clearSelected={true}
													initial={open?.category?.name}
													searchField={true}
													data={categories?.data?.length > 0 ?
														categories?.data?.map((state: GenericObjTypes) => (
															{
																returnedValue: state?._id,
																displayedValue: state?.name,
																dropdownValue:  state?.name,
															}
														)) : [{
															returnedValue: "No data",
															displayedValue: "No data",
															dropdownValue:  "No data",
														}]}
													handleSelect={(e: string) => setFieldValue("category", e)}
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
											isLoading={creatingFOod || loading}
											text={  open.type === "addFood" ?   "Create Food" : "Update food"}
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
