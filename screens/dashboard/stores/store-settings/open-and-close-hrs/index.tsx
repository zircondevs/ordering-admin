/* eslint-disable max-lines */



import React   from "react";
import {   Footer,  } from "./styles";
import { Bold, Dropdown, Flex, Grid, Input,    Span,   } from "../../../../../components";
import { Spacer } from "../../../../../components/Spacer";
import CustomButton from "../../../../../components/Button";
import  { TERTIARY_COLOR, WHITE_COLOR } from "../../../../../hooks/colors";
import { GeneralErrorContainer, GeneralInputWrap, GeneralLabel, GeneralSelectField,  } from "../../../../../components/styles";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { STATE_AND_LGA } from "../../../../../constants/lga";




 

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



const OpeningAndClosingHrs = ( ) => {
 


	return (
		<div>


			<div >

				<Flex height="auto"   margin="0 0 70px" direction="column" alignItems="flex-start">
					<Bold fontFamily='quicksandMedium' weight="400" lineHeight="21" size="16" colour={"Grey.2"}>
						Opening & Closing Hours
					</Bold>
					<Spacer height="8px"/>
					<Span fontFamily='quicksand' weight="700" lineHeight="19" size="14" colour={"Grey.4"}>
						Add the times your store is open to taking orders
					</Span>
				</Flex>


				<Formik
					enableReinitialize
					validationSchema={AddStoreSchema}
					initialValues={{
						name:   "" ,
						address:     "",
						state:   "",
						customerCareLine:   "",
						localGovernmentArea:   "",
					}} 
					onSubmit={ async (values ) => { 
						console.log(values);
					}}
				>
					{({handleChange, errors, values, setFieldValue}) => {

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
										<GeneralLabel>Full Name</GeneralLabel>
										<input
											value={values.name}
											name="name" 
											type={"time"} 
										/>
										
										<GeneralErrorContainer>
											{errors.name?.toString() }
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

								</Grid>

								<Footer>
									<CustomButton
										size="14"
										bgColour={TERTIARY_COLOR[2]}
										bodColour={TERTIARY_COLOR[2]}
										txtColour={WHITE_COLOR}
										type="submit"
										nonActiveBgColor="Black.20"
										borderRadius="0"
										text={  "Save Changes" }
									/>
								</Footer>
							</Form>
						);
					}
						
					}
				</Formik>

			</div>
		</div>
	);
};
export default OpeningAndClosingHrs;

 
 
 