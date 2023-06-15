/* eslint-disable max-lines */
 
import React, { useState }   from "react";
import {   Footer, ImageStyles, UploadBtnStyles,  } from "./styles";
import { Bold,  Container,  Dropdown,  Flex, Grid, Input, Modal, Span, Switch,   } from "../../../../components";
import { Spacer } from "../../../../components/Spacer";
import CustomButton from "../../../../components/Button";
import  { TERTIARY_COLOR, WHITE_COLOR } from "../../../../hooks/colors";
import { GeneralErrorContainer, GeneralInputWrap, GeneralLabel, GeneralModalHeader, GeneralModalStyle, GeneralSelectField, ModalSpacer } from "../../../../components/styles";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { GenericObjTypes } from "../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import {  LoaderIcon, LongArrowicon } from "../../../../public/assets/svg";
import { useCreateProduct, useUpdateProduct } from "../../../../hooks/useProduct";
import { useUploadImage } from "../../../../hooks/imgeUpload";
import Image from "next/image";



interface  PropType {
	setOpen: React.Dispatch<React.SetStateAction<GenericObjTypes & {type: string}>>;
	open: {type: string, [e: string]: any };
	modalRef: React.RefObject<HandleScrollTypes>;
	onDOne: () => any;
	categories: GenericObjTypes[]
}

export const AddStoreSchema = Yup.object().shape({
	name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Your full name is required"),
	category: Yup.string().required("Category is required"),
	amount: Yup.number().required("Amount is required"),
	productImage: Yup.mixed().required("Image is required"),
});



const AddFood = ({	open,modalRef, setOpen,onDOne,   categories } : PropType) => {
	const [isAvailable, setIsAvaliable] = useState(true);
 

	const { handleCreateFood, loading: creatingFOod} = useCreateProduct();
	const { handleUpdateFood, loading: loading} = useUpdateProduct(open?._id);
	const { handleImageUpload,  loading: loadingImage } = useUploadImage();

	const closeModal = () => {
		setOpen({type: ""});
		modalRef?.current?.addBodyScroll();
		onDOne();
	};


	
 
	return (
		<GeneralModalStyle>
			<Modal
				show={open?.type === "addProduct" || open.type === "editProduct"}
				handleClose={() => closeModal()}
				innerRef={modalRef}
				direction={"right"}
				width={"500px"}
				noCancel
				noHeader
			>
				<GeneralModalHeader>
					<button onClick={() =>closeModal()}>
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
							{ open?.type === "addProduct"  ? "Add ": "Update "}  Product
						</Bold>
						<Spacer height="16px"/>
						<Span fontFamily='quicksand' weight="700" lineHeight="19" size="16" colour={"Black.60"}>
							{ open?.type === "addProduct"  ? " Add a new  ": "Update "} product on the menu
						</Span>
					</Flex>

 
					<Formik
						enableReinitialize
						validationSchema={AddStoreSchema}
						initialValues={{
							name: open?.name ||  "" ,
							category:  open?.category?._id ||  "" ,
							amount: open?.amount ||  "" ,
							productImage: open?.productImage ||  "" ,
						}} 
						onSubmit={ async (values , actions) => { 
							const res = open.type === "addProduct" ?
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
											open.type === "editProduct" && 
											<Flex height="auto" justifyContent="flex-start">
												<Span fontFamily='quicksand' weight="700" lineHeight="19" size="16" colour={"Black.60"}>
													Is this product still avaliable?
												</Span>
												<Container width="auto" height="auto" margin="0 0 0 8px ">
													<Switch 
														activeColor="Success.default"
														nonActiveColor="Grey.5"
														click={(e) => setIsAvaliable(e)}
														initialState={open.isAvailable}
													/>
												</Container>
											</Flex>
										}	

										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel> Add product Name</GeneralLabel>
											<Input
												value={values.name}
												name="name" 
												type={"text"} 
												handleChange={handleChange}
												borderCol={"Black.20"}
												activeBorderCol={"Blue.base.default"}
												placeholder="Enter product name"
												borderRadius="8px"
											/>
											<GeneralErrorContainer>
												{errors.name?.toString()}
											</GeneralErrorContainer>
										</GeneralInputWrap>

										{
											values?.productImage ?
												<ImageStyles>
													<Image
														src={values?.productImage}
														alt=""
														layout="fill"
														objectFit="contain"
													/>
												</ImageStyles>
												: null
										}


										<Container height="auto" justifyContent="flex-start" margin="8px 0 0">
											<Flex height="auto" justifyContent="flex-start" margin="8px 0 0">
												<GeneralLabel> Add product Image</GeneralLabel>
												<UploadBtnStyles isLoading={false}>
													<input type="file"  
														onChange={ async (e) => {
															const target = e.target ;
															if(target.files && target.files[0]) {
																const form = new FormData();
																form.append("image", target.files[0] );
																const res = await handleImageUpload(form);
																setFieldValue("productImage", res?.data);
															}
														}} 
													/>
													<Span fontFamily='quicksand' weight="700" lineHeight="16" size="14" colour={"Grey.2"}>
														Upload Image
													</Span>
													{loadingImage ?  <div className="loader"><LoaderIcon height="30" width="30" /></div> : null}
												</UploadBtnStyles>
											</Flex>
											<GeneralErrorContainer>
												{errors.productImage?.toString()}
											</GeneralErrorContainer>
										</Container>

										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel> Amount</GeneralLabel>
											<Input
												value={values.amount}
												name="amount" 
												type={"number"} 
												handleChange={handleChange}
												borderCol={"Black.20"}
												activeBorderCol={"Blue.base.default"}
												placeholder="Enter an amount"
												borderRadius="8px"
											/>
											<GeneralErrorContainer>
												{errors.amount?.toString()}
											</GeneralErrorContainer>
										</GeneralInputWrap>

									
						
									
										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel>Select category</GeneralLabel>
											<GeneralSelectField>
												<Dropdown
													weight='600'
													colour='Grey.2'
													hovBgColor='Black.10'
													dropHovColor='Grey.2'
													dropColor='Grey.2'
													direction='end'
													clearSelected={true}
													initial={open?.category?.name}
													searchField={true}
													data={categories?.length > 0 ?
														categories?.map((state: GenericObjTypes) => (
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
											isLoading={creatingFOod || loading || loadingImage}
											text={  open.type === "addProduct" ?   "Create Food" : "Update product"}
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
