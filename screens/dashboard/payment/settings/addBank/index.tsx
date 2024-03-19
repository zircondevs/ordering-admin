/* eslint-disable max-lines */



import React, { useEffect, useState }  from "react";
import {   AccountDteial, Footer,  } from "./styles";
import { Bold, Dropdown, Flex, Grid, Input,     Modal,    Span,   } from "../../../../../components";
import { Spacer } from "../../../../../components/Spacer";
import CustomButton from "../../../../../components/Button";
import  { TERTIARY_COLOR, WHITE_COLOR } from "../../../../../hooks/colors";
import { GeneralErrorContainer, GeneralInputWrap, GeneralLabel, GeneralModalStyle, GeneralSelectField, GeneralTAnimatingContainer, ModalSpacer } from "../../../../../components/styles";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { GenericObjTypes } from "../../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import { LoaderIcon,   } from "../../../../../public/assets/svg";
import {     useVerifyAccount } from "../../../../../hooks/usePayment";
import { UseContext } from "../../../../../state/provider";
import { useAddBank } from "../../../../../hooks/useSettigs";



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
	const { state: { client }} = UseContext();
	const [accountName, setAccountName] = useState(client?.companyDepositAccountName || "");


	const {handleVerifyAccount, loading: loadingVerify} = useVerifyAccount();
	const {handleAddbank, loading: addingBank} = useAddBank(open?.type === "addBank" ? "added" : "updated");

	const closeModal = () => {
		setOpen({type: ""});
		modalRef?.current?.addBodyScroll();
		onDOne();
	};
 
	const handleOnchage =  async (values:  {accountBank: string, accountNumber: string}) => {
		const res =   await handleVerifyAccount({...values, });
		if(res?.data ) {
			setAccountName(res?.data?.account_name);
		}else{
			setAccountName("");
		}
	};

	useEffect(() => {
		if(client?.companyDepositAccountName) {
			setAccountName(client?.companyDepositAccountName);
		}
	}, [open.type]);
 


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
						<Bold fontFamily='medium' weight="400" lineHeight="32" size="28" colour={"Black.default"}>
							{ open?.type === "editBank" ? "Edit" : "Add"} Account Number
						</Bold>
						<Spacer height="16px"/>
						<Span fontFamily='regular' weight="700" lineHeight="19" size="16" colour={"Grey.2"}>
							Set up a bank account for withdrawal
						</Span>
					</Flex>

					<GeneralTAnimatingContainer isValidating={loadingVerify}>

						<Formik
							enableReinitialize
							validationSchema={AddStoreSchema}
							initialValues={{
								accountBank: open?.type === "editBank" ? client?.companyDepositBank :  "" ,
								accountNumber:  open?.type === "editBank" ? client?.companyDepositAccountNumber :   "",
							}} 
							onSubmit={ async (values , actions) => { 
								const res =   await handleAddbank({
									companyDepositAccountNumber: values.accountNumber,
									companyDepositAccountName: accountName,
									companyDepositBank: banks?.find((_: {code: string}) => _?.code === values?.accountBank)?.name 
								});
								if(res?.data ) {
									console.log(res?.data);
									setAccountName(res?.data?.account_name);
									actions.resetForm();
									closeModal();
								}
							}}
						>
							{({  errors, values, setFieldValue}) => {
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
																initial={ client?.companyDepositBank}
																// initial={banks?.find((_: {code: string}) => _?.code === values?.accountBank)?.name }
																data={banks?.map((bank: {name: string, code: string}) => (
																	{
																		returnedValue: bank?.code,
																		displayedValue:  bank?.name,
																		dropdownValue:   bank?.name,
																	}
																))}
																handleSelect={(e: string) => {
																	if(loadingVerify) return;
																	setFieldValue("accountBank", e);
																	if(values.accountNumber.length  === 10 ){
																		handleOnchage({...values, accountBank: e});
																	}
																}}
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
													handleChange={(e: React.FormEvent<HTMLInputElement> ) => {
														const value = (e.target as HTMLInputElement ).value;
														setFieldValue("accountNumber",  value);
														if(value.length === 10 && values.accountBank){
															handleOnchage({...values, accountNumber:value });
														}
													}}
													borderCol={"Black.20"}
													activeBorderCol={"Blue.base.default"}
													placeholder="Enter your account number"
													borderRadius="8px"
													disabled={loadingVerify}
												/>
												
												<GeneralErrorContainer>
													{errors.accountNumber?.toString() }
												</GeneralErrorContainer>
											</GeneralInputWrap> 
													
											{
												accountName ?
													<AccountDteial>
														<Span fontFamily='regular' weight="400" lineHeight="24" size="14" colour={"Black.40"}>
															Account Name:  
														</Span>
														<Bold fontFamily='semiBold' weight="400" lineHeight="28" size="14" colour={"Success.default"}>
															{accountName}
														</Bold>
													</AccountDteial>
													: null
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
												nonActiveBgColor="Black.20"
												borderRadius="0"
												isLoading={ addingBank}
												disabled={!accountName || loadingVerify}
												text={ open?.type === "addBank" ? "Add bank" : "Update bank" }
											/>
										</Footer>
									</Form>
								);
							}
								
							}
						</Formik>
					</GeneralTAnimatingContainer>

				</ModalSpacer>
			</Modal>
		</GeneralModalStyle>
	);
};
export default AddBank;

 
 
 