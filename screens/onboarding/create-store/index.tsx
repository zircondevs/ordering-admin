/* eslint-disable max-lines */



import React   from "react";
import {   Dropdown,   Grid,  Input,    } from "../../../components";
import { GeneralErrorContainer, GeneralInputWrap, GeneralLabel,  GeneralSelectField   } from "../../../components/styles";
import CustomButton from "../../../components/Button";
import { TERTIARY_COLOR, WHITE_COLOR } from "../../../hooks/colors";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Codes from "../../../constants/phoneNumberCode.json";
import { useCreateStore, useEditStore } from "../../../hooks/useStores";
import Constant from "../../../constants";



export const AddStoreSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Your full name is required"),
	address: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Your full name is required"),
	state: Yup.string()
		.required("Your state is required"),
	customerCareLine: Yup.string()
		.min(10)
		.max(12)
});



 

interface  PropType {
	store?: {
		name: string,
		address: string,
		state: string,
		customerCareLine: string,
		dialCode: string,
		_id: string
		type: "edit" | "add"
	};
	onDone?: () => any
}


const CreateStore = ({store, onDone}: PropType) => {
 
	const { handleCreateStore, loading } = useCreateStore();
	const { handleEditStore, loading: loadingEdit } = useEditStore(store?._id || "");

	return (
		< >
			<Formik
				enableReinitialize
				validationSchema={AddStoreSchema}
				initialValues={{
					name:  store?.name ||  "" ,
					address:   store?.address ||   "",
					state:   store?.state || "",
					customerCareLine:   store?.customerCareLine || "",
					dialCode:   store?.dialCode || "+234",
				}} 
				onSubmit={ async (values , actions) => { 
					const res = store?.type === "edit" ?
						await handleEditStore({...values, customerCareLine: values?.customerCareLine?.toString()  })
						: await handleCreateStore({...values, customerCareLine: values?.customerCareLine?.toString()  });
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
								<GeneralInputWrap margin="8px 0 0">
									<GeneralLabel>Store Name</GeneralLabel>
									<Input
										value={values.name}
										name="name" 
										type={"text"} 
										handleChange={handleChange}
										borderCol={"Black.20"}
										activeBorderCol={"Blue.base.default"}
										placeholder="Enter your store name"
										borderRadius="8px"
									/>
									
									<GeneralErrorContainer>
										{errors.name?.toString() }
									</GeneralErrorContainer>
								</GeneralInputWrap>


								<GeneralInputWrap margin="8px 0 0">
									<GeneralLabel>Address</GeneralLabel>
									<Input
										value={values.address}
										name="address" 
										type={"text"} 
										handleChange={handleChange}
										borderCol={"Black.20"}
										activeBorderCol={"Blue.base.default"}
										placeholder="Enter address"
										borderRadius="8px"
									/>
									<GeneralErrorContainer>
										{errors.address?.toString()}
									</GeneralErrorContainer>
								</GeneralInputWrap>

								
								<GeneralInputWrap margin="8px 0 0">
									<GeneralLabel>State</GeneralLabel>
									<GeneralSelectField>
										<Dropdown
											weight='600'
											colour='Grey.2'
											hovBgColor='Black.10'
											dropHovColor='Grey.2'
											dropColor='Grey.2'
											direction='end'
											searchField={true}
											clearSelected
											initial={values.state}
											data={Constant.states?.map((state: string) => (
												{
													returnedValue: state,
													displayedValue: state,
													dropdownValue:  state,
												}
											))}
											handleSelect={(e: string) => setFieldValue("state", e)}
										/>
									</GeneralSelectField>
									<GeneralErrorContainer>
										{errors.state?.toString()  }
									</GeneralErrorContainer>
								</GeneralInputWrap>


								<GeneralInputWrap margin="8px 0 0">
									<GeneralLabel optional>Customer Care Line</GeneralLabel>
									<Input
										value={values.customerCareLine}
										name="customerCareLine" 
										type={"number"}
										handleChange={handleChange}
										borderCol={"Black.20"}
										activeBorderCol={"Blue.base.default"}
										placeholder="Enter phone number"
										borderRadius="8px"
										iconBeforeInput={
											<Dropdown
												weight="300"
												direction="start"
												colour="Black.default"
												dropColor="Grey.2"
												dropHovColor="Black.default"
												hovBgColor="Black.20"
												clearSelected
												initial="🇳🇬"
												handleSelect={(selected: any) => setFieldValue("dialCode", selected)}
												data={
													Codes.map(code => (
														{
															displayedValue: `${code?.flag}`, 
															returnedValue: code?.dial_code,
															dropdownValue: `${code?.name}  ${code?.flag}`
														}
													))
												}
											/>
										}
									/>
									<GeneralErrorContainer>
										{errors.customerCareLine?.toString() }
									</GeneralErrorContainer>
								</GeneralInputWrap>
							</Grid>

							<div className="submit-btn">
								<CustomButton
									size="14"
									bgColour={TERTIARY_COLOR[2]}
									bodColour={TERTIARY_COLOR[2]}
									txtColour={WHITE_COLOR}
									fullwidth
									type="submit"
									nonActiveBgColor="Black.20"
									borderRadius="0"
									isLoading={loading || loadingEdit}
									text={ store?.type === "edit" ? "Update Store" : "Create Store" }
								/>
							</div>
						</Form>
					);
				}
					
				}
			</Formik>
		</>
	);
};
export default CreateStore;
 