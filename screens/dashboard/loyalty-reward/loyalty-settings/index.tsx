/* eslint-disable max-lines */
 


import React   from "react";

import { Bold,  Flex,    Input,         Span,   } from "../../../../components";
import { Spacer } from "../../../../components/Spacer";
import CustomButton from "../../../../components/Button";
import {  GeneralInputWrap, GeneralLabel, GeneralTextArea,      } from "../../../../components/styles";
import { Form, Formik } from "formik";
import { Main } from "./styles";
import { SetUpStoreTypes } from "../../../../constants/types";
import { useGetLoyaltySettings, useUpdateLoyaltSettings } from "../../../../hooks/useLoyalty";



 
type SocialTypes = "numberOfPurchasesRequired" | "rewardMessage" ;

const LoayltySettings = ( ) => {
	const { handleSetLoyaltySettings, loading} = useUpdateLoyaltSettings();
	const { settings , mutate} = useGetLoyaltySettings();


	const fields = [
		{
			name: "numberOfPurchasesRequired",
			label: "Choose Number of Purchase",
			placeholder: "Enter number of purchase",
			type: "text",
		},
		{
			name: "rewardMessage",
			label: "Reward Message  ",
			placeholder: "Enter description of reward",
			type: "textarea"
		},
	];


	
	return (
		<div>


			<div>
				<Flex height="auto"   margin="40px 0 40px" direction="column" alignItems="flex-start">
					<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="21" size="16" colour={"Orange.default"}>
					Loyalty Reward
					</Bold>
					<Spacer height="8px"/>
					<Span fontFamily='ubuntu' weight="700" lineHeight="19" size="14" colour={"Grey.4"}>
					Set how you reward users 
					</Span>
				</Flex>


				<Formik
					enableReinitialize
					initialValues={{
						rewardMessage:  settings?.rewardMessage ||  "",
						numberOfPurchasesRequired: settings?.numberOfPurchasesRequired || "",
					}} 
					onSubmit={ async (values ) => { 
						const res = await handleSetLoyaltySettings((values as SetUpStoreTypes));
						res?.data && mutate();
					}}
				>
					{({ values, handleChange  }) => {

						return (
							<Form>
								<Main gap="32px">
									{
										fields.map(field => (
											<GeneralInputWrap margin="8px 0 0" key={field.name}>
												<GeneralLabel> {field.label}</GeneralLabel>
												{
													field.type === "textarea" ?
														<GeneralTextArea 
															value={values[field.name as SocialTypes]}
															name={field.name}
															onChange={handleChange}
															placeholder={ field.placeholder }
														/>
														:
														<Input
															value={values[field.name as SocialTypes]}
															name={field.name}
															type={"text"} 
															handleChange={handleChange}
															borderCol={"Black.20"}
															activeBorderCol={"Blue.base.default"}
															placeholder={ field.placeholder }
															borderRadius="8px"
														/>
												}
											</GeneralInputWrap>
										))
									}

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
								</Main>

							</Form>
						);
					}
						
					}
				</Formik>

			</div>
		</div>
	);
};
export default LoayltySettings;