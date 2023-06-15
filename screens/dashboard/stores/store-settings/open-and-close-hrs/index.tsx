/* eslint-disable max-lines */



import React   from "react";
import {   Container1, Footer,   } from "./styles";
import { Bold, Container, Flex, Grid,     Span,   } from "../../../../../components";
import { Spacer } from "../../../../../components/Spacer";
import CustomButton from "../../../../../components/Button";
import  { TERTIARY_COLOR, WHITE_COLOR } from "../../../../../hooks/colors";
import {  GeneralLabel,    } from "../../../../../components/styles";
import { Form, Formik } from "formik";
import TimePicker from "../../../../../components/TimePicker";
import Select from "react-select";


type OptionType = { value: string, label: string }
 

const options = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];

 


const OpeningAndClosingHrs = ( ) => {
 


	return (
		<div>


			<div>
				<Flex height="auto"   margin="0 0 40px" direction="column" alignItems="flex-start">
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
					initialValues={{
						workingDays: [] ,
						address:     "",
					}} 
					onSubmit={ async (values ) => { 
						console.log(values);
					}}
				>
					{({ values, setFieldValue}) => {

						return (
							<Form>
								<Container1 gap="32px">
									<Grid margin="8px 0 0">
										<GeneralLabel>Working Days</GeneralLabel>

 
										<Select
											value={ (values.workingDays as string[]).map(option => ({ value: option, label: option })) || []}
											options={options.map(option => ({ value: option, label: option }))} 
											isMulti={true}
											onChange={(option) => {
												setFieldValue("workingDays", (option as OptionType[]).map((item: OptionType) => item.value));
											}}
										/>
									</Grid>


									<Grid gap="10px">
										<GeneralLabel>Set Opening & Closing Hours</GeneralLabel>
										<Flex height="auto" width="auto"   justifyContent="flex-start">
											<Container margin="0 16px 0 0" width="auto" height="auto">
												<GeneralLabel>From</GeneralLabel>
												<TimePicker click={(e) => console.log(e)}/>
											</Container>
											<div>
												<GeneralLabel>To</GeneralLabel>
												<TimePicker click={(e) => console.log(e)}/>
											</div>
										</Flex>
									</Grid>


									<Footer>
										<CustomButton
											size="14"
											bgColour={TERTIARY_COLOR[2]}
											bodColour={TERTIARY_COLOR[2]}
											txtColour={WHITE_COLOR}
											type="submit"
											pad="padding.smaller"
											nonActiveBgColor="Black.20"
											text={  "Save Changes" }
										/>
									</Footer>
								</Container1>

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