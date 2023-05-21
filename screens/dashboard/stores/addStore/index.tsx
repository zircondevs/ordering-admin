/* eslint-disable max-lines */



import React, {   useState }  from "react";
import {   Footer,  } from "./styles";
import { Bold, Dropdown, Flex, Grid, Input,     Modal,    Span,   } from "../../../../components";
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
import { STATE_AND_LGA } from "../../../../constants/lga";
import { useCreateStore, useEditStore } from "../../../../hooks/useStores";
import Codes from "../../../../constants/phoneNumberCode.json";



interface  PropType {
	setOpen: React.Dispatch<React.SetStateAction<GenericObjTypes & {type: string}>>;
	open: GenericObjTypes;
	modalRef: React.RefObject<HandleScrollTypes>;
	onDOne: () => any
}

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
		.required("  Customer Care Line is required"),
	localGovernmentArea: Yup.string()
		.required("Your LGA is required"),
});



const AddStore = ({	open,modalRef, setOpen,onDOne } : PropType) => {
	const [dialCode, setDialCode] = useState("+234");

	const { setModal, } = UseContext();
	const { handleCreateStore, loading } = useCreateStore();
	const { handleEditStore, loading: loadingEdit } = useEditStore(open?.store?._id);
	
	
	const closeModal = () => {
		setOpen({type: ""});
		modalRef?.current?.addBodyScroll();
		setModal("");
		onDOne();
	};
 
	
	STATE_AND_LGA.sort((a, b) => {
		const fa = a.state.toLowerCase(),
			fb = b.state.toLowerCase();
		if (fa < fb) {
			return -1;
		}
		if (fa > fb) {
			return 1;
		}
		return 0;
	});
	
	


	return (
		<GeneralModalStyle>
			<Modal
				show={open?.type === "add" || open?.type === "edit"}
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
							Add Store
						</Bold>
						<Spacer height="16px"/>
						<Span fontFamily='quicksand' weight="700" lineHeight="19" size="16" colour={"Black.60"}>
						Create a new store location for your business
						</Span>
					</Flex>

 
					<Formik
						enableReinitialize
						validationSchema={AddStoreSchema}
						initialValues={{
							name: open?.store?.name ||  "" ,
							address:  open?.store?.address ||   "",
							state:  open?.store?.state || "",
							customerCareLine:  open?.store?.customerCareLine || "",
							localGovernmentArea:  open?.store?.localGovernmentArea || "",
						}} 
						onSubmit={ async (values , actions) => { 
							const res = open?.type === "add" ?
								await handleCreateStore({...values, customerCareLine: dialCode + values.customerCareLine})
								: await handleEditStore({...values, customerCareLine:   dialCode + values.customerCareLine});
							if(res?.data) {
								actions.resetForm();
								closeModal();
							}
						}}
					>
						{({handleChange, errors, values, setFieldValue}) => {
							const LGA = STATE_AND_LGA.find(lga => lga.state === values.state);

							return (
								<Form>
									<Grid gap="32px">
										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel>Full Name</GeneralLabel>
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
													colour='Black.80'
													hovBgColor='Black.10'
													dropHovColor='Black.80'
													dropColor='Black.80'
													direction='end'
													searchField={true}
													clearSelected
													initial={values.state}
													data={STATE_AND_LGA?.map((state: any) => (
														{
															returnedValue: state?.state,
															displayedValue: state?.state,
															dropdownValue:  state?.state,
														}
													))}
													handleSelect={(e: string) => setFieldValue("state", e)}
												/>
											</GeneralSelectField>
											<GeneralErrorContainer>
												{errors.state?.toString()  }
											</GeneralErrorContainer>
										</GeneralInputWrap>

										{
											values.state  || values.localGovernmentArea ?
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
															clearSelected
															initial={values.localGovernmentArea}
															data={ LGA?.lgas?.map((state: string) => (
																{
																	returnedValue: state,
																	displayedValue: state,
																	dropdownValue:  state,
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
														{errors.localGovernmentArea ?.toString()}
													</GeneralErrorContainer>
												</GeneralInputWrap>
												: null
										}


										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel>Customer Care Line</GeneralLabel>
											<Input
												value={values.customerCareLine}
												name="customerCareLine" 
												type={"number"} 												handleChange={handleChange}
												borderCol={"Black.20"}
												activeBorderCol={"Blue.base.default"}
												placeholder="Enter phone number"
												borderRadius="8px"
												iconBeforeInput={
													<Dropdown
														weight="300"
														direction="start"
														colour="Black.default"
														dropColor="Black.80"
														dropHovColor="Black.default"
														hovBgColor="Black.20"
														clearSelected
														initial="🇳🇬"
														handleSelect={(selected: any) => setDialCode(selected)}
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
											isLoading={loading || loadingEdit}
											text={ open?.type === "edit" ? "Edit Store" : "Create Store" }
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
export default AddStore;

 
 
 