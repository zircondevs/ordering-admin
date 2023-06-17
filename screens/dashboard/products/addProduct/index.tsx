/* eslint-disable max-lines */
 
import React, { useState }   from "react";
import {   Footer, ImageStyles,     } from "./styles";
import { Bold,  Container,  Dropdown,  Flex, Grid, Input, Modal, Span, Switch,   } from "../../../../components";
import { Spacer } from "../../../../components/Spacer";
import CustomButton from "../../../../components/Button";
import  { TERTIARY_COLOR, WHITE_COLOR } from "../../../../hooks/colors";
import { GeneralErrorContainer, GeneralInputWrap, GeneralLabel, GeneralModalHeader, GeneralModalStyle, GeneralSelectField, ModalSpacer } from "../../../../components/styles";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { GenericObjTypes } from "../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import {    LongArrowicon,   } from "../../../../public/assets/svg";
import { useCreateProduct, useUpdateProduct } from "../../../../hooks/useProduct";
import Image from "next/image";
import Upload from "../../../../components/Upload";



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
				width={"500px"}
				noCancel
				noHeader
			>
				<GeneralModalHeader>
					<button onClick={() =>closeModal()}>
						<Flex height="auto" justifyContent="flex-start">
							<LongArrowicon width="20" height="20"/>
							<Span fontFamily='ubuntu' weight="700" lineHeight="16" size="14" colour={"Black.default"}>
								Go Back
							</Span>
						</Flex>
					</button>
				</GeneralModalHeader>


				<ModalSpacer direction="column" wrap="nowrap" alignItems='stretch'  margin="64px 0">

					<Flex height="auto"   margin="0 0 70px" direction="column" alignItems="flex-start">
						<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="40" size="36" colour={"Black.default"}>
							{ open?.type === "addProduct"  ? "Add ": "Update "}  Product
						</Bold>
						<Spacer height="16px"/>
						<Span fontFamily='ubuntu' weight="700" lineHeight="19" size="16" colour={"Black.60"}>
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
							productImage: open?.productImage ||  [] ,
						}} 
						onSubmit={ async (values , actions) => { 
							const res = open.type === "addProduct" ?
								await handleCreateProduct({...values })
								: await handleUpdateProduct({...values, isAvailable } );
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
												<Span fontFamily='ubuntu' weight="700" lineHeight="19" size="16" colour={"Black.60"}>
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
												borderCol={"Black.20"}
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


										<Grid columns="repeat(auto-fit, minmax(127px, 150px))" gap="10px" justifyContent="flex-start">
											{
												values?.productImage?.map((img: string, idx: number) => (
													<ImageStyles key={idx}>
														<Image src={img} alt="" layout="fill" objectFit="contain" />
													</ImageStyles>
												))
											}
										</Grid>

										{
											values?.productImage?.length > 5 ? null :
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
