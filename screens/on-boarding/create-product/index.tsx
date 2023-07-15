/* eslint-disable max-lines */



import React, { useState }   from "react";
import { Container, Dropdown, Flex,  Grid,  Input, Span, Switch,  } from "../../../components";
import {  CancelStyles, ImageStyles,  } from "./styles";
import { GeneralErrorContainer, GeneralInputWrap, GeneralLabel, GeneralSelectField,     } from "../../../components/styles";
import CustomButton from "../../../components/Button";
import { TERTIARY_COLOR, WHITE_COLOR } from "../../../hooks/colors";
import { Form, Formik } from "formik";
import { useCreateProduct, useUpdateProduct } from "../../../hooks/useProduct";
import { GenericObjTypes } from "../../../constants/types";
import EditorContainer from "../../../components/Editor";
import { CancelIcon } from "../../../public/assets/svg";
import Image from "next/image";
import Upload from "../../../components/Upload";
import * as Yup from "yup";




export const AddStoreSchema = Yup.object().shape({
	name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Your full name is required"),
	category: Yup.string(),
	amount: Yup.number().required("Amount is required"),
	productImage: Yup.mixed().required("Image is required"),
});

interface  PropType {
	onDone?: () => any;
	categories?: {name: string, _id: string}[],
	product?: {
		name: string,
		description: string,
		quantity: string,
		category: {name: string, _id: string},
		amount: string,
		isAvailable: boolean,
		productImage: string[],
		_id: string,
		type: "addProduct" | "editProduct"
	}
}


const CreateProduct = ({	product, onDone,   categories } : PropType) => {
	const [isAvailable, setIsAvaliable] = useState(true);


	const { handleCreateProduct, loading: creatingProduct} = useCreateProduct();
	const { handleUpdateProduct, loading: loading} = useUpdateProduct(product?._id || "");

	
	return (
		<Formik
			enableReinitialize
			validationSchema={AddStoreSchema}
			initialValues={{
				name: product?.name ||  "" ,
				description: product?.description ||  "" ,
				quantity: product?.quantity ||  "" ,
				category:  product?.category?._id ||  "" ,
				amount: product?.amount ||  "" ,
				productImage: product?.productImage ||  [] ,
			}} 
			onSubmit={ async (values , actions) => { 
				const res = product?.type === "addProduct" ?
					await handleCreateProduct({...values, ...(values.quantity && { quantity: values.quantity }) })
					: await handleUpdateProduct({...values,...(values.quantity && { quantity: values.quantity }) , isAvailable } );
				if(res?.data) {
					actions.resetForm();
					onDone && onDone();
				}
			}}
		>
			{({handleChange, errors, values, setFieldValue}) => {

				return (
					<Form>
						<Grid gap="32px">	
							{
								product?.type === "editProduct" && 
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
											initialState={product.isAvailable}
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

						
							{
								categories ?
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
												initial={product?.category?.name || ""}
												searchField={true}
												data={ categories?.length > 0 ?
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
									: null
							}
						

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

						<div className="submit-btn">
							<CustomButton
								size="14"
								bgColour={TERTIARY_COLOR[2]}
								bodColour={TERTIARY_COLOR[2]}
								txtColour={WHITE_COLOR}
								fullwidth
								type="submit"
								borderRadius="0"
								isLoading={creatingProduct || loading }
								text={  product?.type === "editProduct" ?   "Update  product" : "Create product"}
							/>
						</div>
					</Form>
				);
			}
				
			}
		</Formik>
	);
};
export default CreateProduct;
 