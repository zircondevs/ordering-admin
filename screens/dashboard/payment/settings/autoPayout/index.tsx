/* eslint-disable no-unused-vars */
/* eslint-disable max-lines */



import React  from "react";
import {   Footer,  } from "./styles";
import { Bold, Dropdown, Flex, Grid,    Modal,    Span,   } from "../../../../../components";
import { Spacer } from "../../../../../components/Spacer";
import CustomButton from "../../../../../components/Button";
import  { TERTIARY_COLOR, WHITE_COLOR } from "../../../../../hooks/colors";
import { GeneralErrorContainer, GeneralInputWrap, GeneralLabel, GeneralModalStyle, GeneralSelectField, ModalSpacer } from "../../../../../components/styles";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { GenericObjTypes } from "../../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import { UseContext } from "../../../../../state/provider";



interface  PropType {
	setOpen: React.Dispatch<React.SetStateAction<GenericObjTypes & {type: string}>>;
	open: GenericObjTypes;
	modalRef: React.RefObject<HandleScrollTypes>;
	onDOne: (interval: string) => any
	loading: boolean
}

export const AddStoreSchema = Yup.object().shape({
	withdrawalInterval: Yup.string().required("Withdrawal interval   is required"),
});



const AutomaticPayout = ({	open,modalRef, setOpen,onDOne,  loading } : PropType) => {



	const { state: { client }} = UseContext();

	const closeModal = () => {
		setOpen({type: ""});
		modalRef?.current?.addBodyScroll();
	};
 
 


	return (
		<GeneralModalStyle>
			<Modal
				show={open?.type === "withdrawalInterval"  }
				handleClose={() => closeModal()}
				innerRef={modalRef}
				direction={"right"}
				width={"500px"}
				noHeader
			>



				<ModalSpacer direction="column" wrap="nowrap" alignItems='stretch'  margin="64px 0">

					<Flex height="auto"   margin="0 0 70px" direction="column" alignItems="flex-start">
						<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="40" size="36" colour={"Black.default"}>
							Automatic Payout
						</Bold>
						<Spacer height="16px"/>
						<Span fontFamily='ubuntu' weight="700" lineHeight="19" size="16" colour={"Grey.2"}>
							Set up automatic payout process
						</Span>
					</Flex>


					<Formik
						enableReinitialize
						validationSchema={AddStoreSchema}
						initialValues={{
							withdrawalInterval:  client?.withdrawalInterval ||  "" ,
						}} 
						onSubmit={ async (values , actions) => { 
							await onDOne(values.withdrawalInterval);
							actions.resetForm();
							closeModal();
						}}
					>
						{({  errors, values, setFieldValue}) => {
							return (
								<Form>
									<Grid gap="32px">

 
										<GeneralInputWrap margin="8px 0 0">
											<GeneralLabel>Select  period</GeneralLabel>
											<GeneralSelectField>
												<Dropdown
													weight='600'
													colour='Grey.2'
													hovBgColor='Black.10'
													dropHovColor='Grey.2'
													dropColor='Grey.2'
													direction='end'
													searchField={false}
													clearSelected
													initial={values.withdrawalInterval }
													data={["MONTHLY", "QUARTERLY", "WEEKLY"]?.map((interval: string) => (
														{
															returnedValue: interval,
															displayedValue:  interval,
															dropdownValue:   interval,
														}
													))}
													handleSelect={(e: string) => setFieldValue("withdrawalInterval", e)}
												/>
											</GeneralSelectField>
											<GeneralErrorContainer>
												{errors.withdrawalInterval?.toString()  }
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
											isLoading={ loading}
											text={"Set Payout Period"}
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
export default AutomaticPayout;

 
 
 