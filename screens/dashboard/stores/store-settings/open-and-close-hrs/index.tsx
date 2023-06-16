/* eslint-disable max-lines */



import React    from "react";
import {   Container1, Footer,   } from "./styles";
import { Bold, Container, Flex, Grid,     Span,   } from "../../../../../components";
import { Spacer } from "../../../../../components/Spacer";
import CustomButton from "../../../../../components/Button";
import {  GeneralLabel,    } from "../../../../../components/styles";
import { Form, Formik } from "formik";
import TimePicker from "../../../../../components/TimePicker";
import Select from "react-select";
import { useSetUpStore } from "../../../../../hooks/useSettigs";
import { removeEmptyValuesFromObj } from "../../../../../lib";
import { SetUpStoreTypes } from "../../../../../constants/types";


type OptionType = { value: string, label: string }
 

const options = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];

 


const OpeningAndClosingHrs = ( {settings, onDone}: {settings: any, onDone: () => void}) => {
	const { handleSetUpStore, loading} = useSetUpStore();

	
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
						workingDays:  settings?.workingDays || [] ,
						openingHours:  settings?.openingHours || "" ,
						closingHours:  settings?.closingHours || "" ,
					}} 
					onSubmit={ async (values ) => { 
						const res = await handleSetUpStore(removeEmptyValuesFromObj(values as SetUpStoreTypes));
						res?.data && onDone();
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
												<TimePicker  
													defaultValue={
														settings.openingHours ? 
															{hrs: +settings.openingHours.split(":")[0], mins: +settings.openingHours.split(":")[1], secs: +settings.openingHours.split(":")[1]} 
															: {}
													} 
													click={(e) => setFieldValue("openingHours", `${e.hrs}:${e.mins}:${e.secs}`  )}  
												/>
											</Container>
											<div>
												<GeneralLabel>To</GeneralLabel>
												<TimePicker 
													defaultValue={
														settings.closingHours ? 
															{hrs: +settings.closingHours.split(":")[0], mins: +settings.closingHours.split(":")[1], secs: +settings.closingHours.split(":")[1]} 
															: {}
													} 
													click={(e) => setFieldValue("closingHours", `${e.hrs}:${e.mins}:${e.secs}` )}
												/>
											</div>
										</Flex>
									</Grid>


									<Footer>
										<CustomButton
											size="14"
											activeBgColor={"Orange.default"}
											activeBorderColor={"Orange.default"}
											activeColor={"common.white"}
											type="submit"
											isLoading={loading}
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