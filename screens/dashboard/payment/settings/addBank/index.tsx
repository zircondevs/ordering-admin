/* eslint-disable max-lines */



import React  from "react";
import {   Footer,  } from "./styles";
import { Bold, Dropdown, Flex, Grid, Input,     Modal,    Span,   } from "../../../../../components";
import { Spacer } from "../../../../../components/Spacer";
import CustomButton from "../../../../../components/Button";
import  { TERTIARY_COLOR, WHITE_COLOR } from "../../../../../hooks/colors";
import { GeneralErrorContainer, GeneralInputWrap, GeneralLabel, GeneralModalStyle, GeneralSelectField, ModalSpacer } from "../../../../../components/styles";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { GenericObjTypes } from "../../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import { LoaderIcon,   } from "../../../../../public/assets/svg";
import {   useVerifyAccount } from "../../../../../hooks/usePayment";
import { UseContext } from "../../../../../state/provider";



interface  PropType {
	setOpen: React.Dispatch<React.SetStateAction<GenericObjTypes & {type: string}>>;
	open: GenericObjTypes;
	modalRef: React.RefObject<HandleScrollTypes>;
	onDOne: () => any
	banks: {name: string, code: string}[]
}

export const AddStoreSchema = Yup.object().shape({
	accountBank: Yup.string()
		.required("Bank name is required"),
	accountNumber: Yup.number()
		.required("Your account number is required"),
});



const AddBank = ({	open,modalRef, setOpen,onDOne, banks } : PropType) => {



	const {handleVerifyAccount, loading: loadingVerify} = useVerifyAccount();
	const { state: { client }} = UseContext();

	const closeModal = () => {
		setOpen({type: ""});
		modalRef?.current?.addBodyScroll();
		onDOne();
	};
 
 


	return (
		<GeneralModalStyle>
			<Modal
				show={open?.type === "addBank" || open?.type === "editBank"}
				handleClose={() => closeModal()}
				innerRef={modalRef}
				direction={"right"}
				width={"500px"}
				noHeader
			>



				<ModalSpacer direction="column" wrap="nowrap" alignItems='stretch'  margin="64px 0">

					<Flex height="auto"   margin="0 0 70px" direction="column" alignItems="flex-start">
						<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="40" size="36" colour={"Black.default"}>
							{ open?.type === "editBank" ? "Edit" : "Add"} Account Number
						</Bold>
						<Spacer height="16px"/>
						<Span fontFamily='ubuntu' weight="700" lineHeight="19" size="16" colour={"Grey.2"}>
							Set up a bank account for withdrawal
						</Span>
					</Flex>

 
					<Formik
						enableReinitialize
						validationSchema={AddStoreSchema}
						initialValues={{
							accountBank: open?.type === "editBank" ? client?.companyDepositBank :  "" ,
							accountNumber:  open?.type === "editBank" ? client?.companyDepositAccountNumber :   "",
						}} 
						onSubmit={ async (values , actions) => { 
							const res =   await handleVerifyAccount({...values, });
							if(res?.data?.status === 200) {
								console.log(res?.data);
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
											!(banks?.length > 0) ?
												<Flex justifyContent="flex-start" width="auto" height="auto">
													<LoaderIcon height="40" width="40"/>
												</Flex>
												:
												<GeneralInputWrap margin="8px 0 0">
													<GeneralLabel>Bank Name</GeneralLabel>
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
															initial={banks?.find((_: {code: string}) => _?.code === values?.accountBank)?.name }
															data={banks?.map((bank: {name: string, code: string}) => (
																{
																	returnedValue: bank?.code,
																	displayedValue:  bank?.name,
																	dropdownValue:   bank?.name,
																}
															))}
															handleSelect={(e: string) => setFieldValue("accountBank", e)}
														/>
													</GeneralSelectField>
													<GeneralErrorContainer>
														{errors.accountBank?.toString()  }
													</GeneralErrorContainer>
												</GeneralInputWrap>
										}

										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel>Account Number</GeneralLabel>
											<Input
												value={values.accountNumber}
												name="accountNumber" 
												type={"text"} 
												handleChange={handleChange}
												borderCol={"Black.20"}
												activeBorderCol={"Blue.base.default"}
												placeholder="Enter your account number"
												borderRadius="8px"
											/>
											
											<GeneralErrorContainer>
												{errors.accountNumber?.toString() }
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
											isLoading={ loadingVerify}
											text={ open?.type === "addBank" ? "Add bank" : "Create Store" }
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
export default AddBank;

 
 
 