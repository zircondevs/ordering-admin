/* eslint-disable max-lines */



import React  from "react";
import {   Footer,  } from "./styles";
import { Bold,        Flex,    Grid,    Input,    Modal,    Span,   } from "../../../../components";
import { Spacer } from "../../../../components/Spacer";
import CustomButton from "../../../../components/Button";
import  { TERTIARY_COLOR, WHITE_COLOR } from "../../../../hooks/colors";
import { GeneralErrorContainer, GeneralInputWrap, GeneralLabel, GeneralModalHeader, GeneralModalStyle, ModalSpacer } from "../../../../components/styles";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { GenericObjTypes } from "../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import { LongArrowicon } from "../../../../public/assets/svg";



interface  PropType {
	setOpen: React.Dispatch<React.SetStateAction<GenericObjTypes & {type: string}>>;
	open: GenericObjTypes;
	modalRef: React.RefObject<HandleScrollTypes>;
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
});



const AddStore = ({	open,modalRef, setOpen, } : PropType) => {
	const closeModal = () => {
		setOpen({type: ""});
		modalRef?.current?.addBodyScroll();
	};
	
 


	return (
		<GeneralModalStyle>
			<Modal
				show={open?.type === "add"}
				handleClose={() => closeModal()}
				innerRef={modalRef}
				direction={"right"}
				width={"500px"}
				noHeader
			>

				<GeneralModalHeader>
					<button onClick={() => closeModal()}>
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
							name:   "" ,
							address:   "",
						}} 
						onSubmit={ async (values , actions) => { 

							actions.resetForm();
							closeModal();
						}}
					>
						{({handleChange, errors, values}) => (
							<Form>
								<Grid gap="32px">
									<GeneralInputWrap margin="8px 0 0">
										<GeneralLabel>Full Name</GeneralLabel>
										<Input
											value={values.name}
											name="fullName" 
											type={"text"} 
											handleChange={handleChange}
											borderCol={"Black.20"}
											activeBorderCol={"Blue.base.default"}
											placeholder="Enter your full name"
											borderRadius="8px"
										/>
										<GeneralErrorContainer>
											{errors.name}
										</GeneralErrorContainer>
									</GeneralInputWrap>

									<GeneralInputWrap margin="8px 0 0">
										<GeneralLabel>Address</GeneralLabel>
										<Input
											value={values.address}
											name="password" 
											type={"password"} 
											handleChange={handleChange}
											borderCol={"Black.20"}
											activeBorderCol={"Blue.base.default"}
											placeholder="Enter address"
											borderRadius="8px"
										/>
										<GeneralErrorContainer>
											{errors.address}
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
										text={  "Create Store"  }
									/>
								</Footer>
							</Form>
						)}
					</Formik>

				</ModalSpacer>
			</Modal>
		</GeneralModalStyle>
	);
};
export default AddStore;

 
 
 