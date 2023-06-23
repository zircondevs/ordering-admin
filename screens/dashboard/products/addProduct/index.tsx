/* eslint-disable max-lines */
 
import React, { useState }   from "react";
import {   CancelStyles, Footer, ImageStyles,     } from "./styles";
import { Bold,  Container,  Dropdown,  Flex, Grid, Input, Modal,   Span, Switch,   } from "../../../../components";
import CustomButton from "../../../../components/Button";
import  { TERTIARY_COLOR, WHITE_COLOR } from "../../../../hooks/colors";
import { GeneralErrorContainer, GeneralInputWrap, GeneralLabel, GeneralModalHeader, GeneralModalStyle, GeneralSelectField, ModalSpacer } from "../../../../components/styles";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { GenericObjTypes } from "../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import { useCreateProduct, useUpdateProduct } from "../../../../hooks/useProduct";
import Image from "next/image";
import Upload from "../../../../components/Upload";
import EditorContainer from "../../../../components/Editor";
import { CancelIcon } from "../../../../public/assets/svg";



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



const AddProduct = ({	open,modalRef, setOpen,onDOne,   categories } : PropType) => {
	const [isAvailable, setIsAvaliable] = useState(true);
 

	const { handleCreateProduct, loading: creatingProduct} = useCreateProduct();
	const { handleUpdateProduct, loading: loading} = useUpdateProduct(open?._id);

	
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
				width={"700px"}
				noHeader
			>

				<GeneralModalHeader>
					<Flex height="auto"   margin="0 0 0px" direction="column" alignItems="flex-start">
						<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="40" size="36" colour={"Black.default"}>
							{ open?.type === "addProduct"  ? "Add ": "Update "}  Product
						</Bold>
					</Flex>
				</GeneralModalHeader>



				<ModalSpacer direction="column" wrap="nowrap" alignItems='stretch'  margin="20px 0 64px">


 
					<Formik
						enableReinitialize
						validationSchema={AddStoreSchema}
						initialValues={{
							name: open?.name ||  "" ,
							description: open?.description ||  "" ,
							quantity: open?.quantity ||  "" ,
							category:  open?.category?._id ||  "" ,
							amount: open?.amount ||  "" ,
							productImage: open?.productImage ||  [] ,
						}} 
						onSubmit={ async (values , actions) => { 
							const res = open.type === "addProduct" ?
								await handleCreateProduct({...values, ...(values.quantity && { quantity: values.quantity }) })
								: await handleUpdateProduct({...values,...(values.quantity && { quantity: values.quantity }) , isAvailable } );
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
												<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="16" colour={"Grey.2"}>
													Is this product still avaliable?
												</Span>
												<Container width="auto" height="auto" margin="0 0 0 8px ">
													<Switch 
														activeColor="Success.default"
														nonActiveColor="Grey.5"
														reValidate
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
												borderCol={"Grey.5"}
												activeBorderCol={"Blue.base.default"}
												placeholder="Enter product name"
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
												borderCol={"Grey.5"}
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

										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel optional> How many of this product do you have?</GeneralLabel>
											<Input
												value={values.quantity}
												name="quantity" 
												type={"number"} 
												handleChange={handleChange}
												borderCol={"Grey.5"}
												activeBorderCol={"Blue.base.default"}
												placeholder="Enter a number"
												borderRadius="8px"
											/>
											<Span fontFamily='ubuntu' weight="400" lineHeight="16" size="12" colour={"Grey.2"}>
												(Leave this field  empty if its unlimited. This controls the avaliablity of this product by default.)
											</Span>
											<GeneralErrorContainer>
												{errors.quantity?.toString()}
											</GeneralErrorContainer>
										</GeneralInputWrap>

										


										<Grid gap="16px">
											<GeneralLabel> Product Description  </GeneralLabel>
											<EditorContainer initialValue={values.description || "<p>Enter description …</p>"}  handleOnChange={(e) => setFieldValue("description", e)}/>
										</Grid>


										<Grid columns="repeat(auto-fit, minmax(127px, 150px))" gap="10px" justifyContent="flex-start">
											{
												values?.productImage?.map((img: string, idx: number) => (
													<ImageStyles key={idx}>
														<CancelStyles as="button" type="button"
															onClick={() => {
																setFieldValue("productImage", values.productImage?.filter((i: string) => i !== img));
															}}
														>
															<CancelIcon height="8" width="8" colour="common.white"/>
														</CancelStyles>
														<Image src={img} alt="" layout="fill" objectFit="contain" />
													</ImageStyles>
												))
											}
										</Grid>

									

										{
											values?.productImage?.length >= 5 ? null :
												<Upload onSuccess={(e) => setFieldValue("productImage", [...values.productImage,  e])}/>
												
										}


									</Grid>

									<Footer>
										<CustomButton
											size="14"
											bgColour={TERTIARY_COLOR[2]}
											bodColour={TERTIARY_COLOR[2]}
											txtColour={WHITE_COLOR}
											fullwidth
											type="submit"
											borderRadius="0"
											isLoading={creatingProduct || loading }
											text={  open.type === "addProduct" ?   "Create product" : "Update product"}
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
export default AddProduct;
