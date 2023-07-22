/* eslint-disable max-lines */



import React    from "react";
import {   Card2, Container1, Container2, Container3, ControlsGrid, } from "./styles";
import { Bold,  Flex,     Span,   } from "../../../../../components";
import { Spacer } from "../../../../../components/Spacer";
import CustomButton from "../../../../../components/Button";
import {  GeneralLabel,    } from "../../../../../components/styles";
import { Form, Formik } from "formik";
import TimePicker from "../../../../../components/TimePicker";
import { useSetUpStore } from "../../../../../hooks/useSettigs";
import { MakeOnlyFirstLettersCapital,   } from "../../../../../lib";
import { SetUpStoreTypes } from "../../../../../constants/types";
import { Checkbox } from "../../../../../components/CheckMark";


 
const WorkingDays = [
	{ day: "MONDAY", openingHours: "8:0:0", closingHours: "16:0:0" },
	{ day: "TUESDAY", openingHours: "8:0:0", closingHours: "16:0:0" },
	{ day: "WEDNESDAY", openingHours: "8:0:0", closingHours: "16:0:0" },
	{ day: "THURSDAY", openingHours: "8:0:0", closingHours: "16:0:0" },
	{ day: "FRIDAY", openingHours: "8:0:0", closingHours: "16:0:0" },
	{ day: "SATURDAY", openingHours: "", closingHours: "" },
	{ day: "SUNDAY", openingHours: "", closingHours: "" },
];


const OpeningAndClosingHrs = ( {settings, onDone}: {settings: any, onDone: () => void}) => {
	const { handleSetUpStore, loading} = useSetUpStore();

	console.log(settings?.workingDays);
	
	return (
		<div>


			<div>
				<Flex height="auto"   margin="0 0 40px" direction="column" alignItems="flex-start">
					<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="21" size="16" colour={"Grey.2"}>
						Opening & Closing Hours
					</Bold>
					<Spacer height="8px"/>
					<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="14" colour={"Grey.3"}>
						Add the times your store is open to taking orders
					</Span>
				</Flex>


				<Formik
					enableReinitialize
					initialValues={{
						workingDays:  WorkingDays
					}} 
					onSubmit={ async (values ) => { 
						const res = await handleSetUpStore((values as SetUpStoreTypes));
						res?.data && onDone();
						console.log(values);
					}}
				>
					{({ values, setFieldValue, dirty}) => {

						return (
							<Form>
								<div  >
									
									<ControlsGrid gap="0 16px" columns="1fr">

										<Container3 height="auto" pad="15px 30px" bgColor="Orange.-5" justifyContent="flex-start">
											<Span  fontFamily='ubuntu' weight="400" lineHeight="19" size="16" colour={"Grey.2"}>Working Days</Span>
										</Container3>

										{
											values.workingDays.map((workingDay, index) => (
												<Card2 key={workingDay.day + index} justifyContent="space-between" wrap="nowrap">
													<Container1 height="auto" justifyContent="flex-start" width="auto">
														<Checkbox type="radio" 
															checked={workingDay.openingHours?.length > 0  && workingDay.closingHours?.length > 0 }  
															onClick={() => {
																if(workingDay.openingHours?.length > 0  && workingDay.closingHours?.length > 0 ){
																	setFieldValue(`workingDays[${index}].openingHours`, ""  );
																	setFieldValue(`workingDays[${index}].closingHours`, "");
																}else {
																	setFieldValue(`workingDays[${index}].openingHours`, "8:0:0"  );
																	setFieldValue(`workingDays[${index}].closingHours`, "16:0:0");
																}
															}}
														/>
														<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="14" colour={"Grey.2"}>
															{MakeOnlyFirstLettersCapital(workingDay.day)}
														</Span>
													</Container1>
													<Flex width="auto" height="auto" justifyContent="flex-end" className="View">
														<Flex height="auto" width="auto"   justifyContent="flex-start" wrap="nowrap">
															{
																workingDay.openingHours ?
																	<Container2 margin="0 4px 0 0" width="auto" height="auto">
																		<TimePicker  
																			defaultValue={
																				workingDay.openingHours ? 
																					{
																						hrs: +workingDay.openingHours.split(":")[0], 
																						mins: +workingDay.openingHours.split(":")[1], 
																						secs: +workingDay.openingHours.split(":")[1]} 
																					: {}
																			} 
																			click={(e) => setFieldValue(`workingDays[${index}].openingHours`, `${e.hrs}:${e.mins}:${e.secs}`  )}  
																		/>
																	</Container2>
																	: null
															}
															<GeneralLabel>-</GeneralLabel>
															{
																workingDay.closingHours  ?
																	<Container2 margin="0 0 0 4px">
																		<TimePicker 
																			defaultValue={
																				workingDay.closingHours ? 
																					{
																						hrs: +workingDay.closingHours.split(":")[0], 
																						mins: +workingDay.closingHours.split(":")[1], 
																						secs: +workingDay.closingHours.split(":")[1]
																					} 
																					: {}
																			} 
																			click={(e) => setFieldValue(`workingDays[${index}].closingHours`, `${e.hrs}:${e.mins}:${e.secs}` )}
																		/>
																	</Container2>
																	: null
															}
														</Flex>
													</Flex>
												</Card2>
											))

										}
									</ControlsGrid>

									<Spacer height="40px"/>
									
									<div>
										<CustomButton
											size="14"
											activeBgColor={"common.white"}
											activeBorderColor={"Orange.default"}
											activeColor={"Orange.default"}
											type="submit"
											isLoading={loading}
											disabled={!dirty}
											pad="padding.smaller"
											text={  "Save Changes" }
										/>
									</div>
								</div>

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