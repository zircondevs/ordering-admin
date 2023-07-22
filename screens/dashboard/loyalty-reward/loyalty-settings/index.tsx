/* eslint-disable max-lines */
 


import React   from "react";

import { Bold,  Flex,    Input,         Span, Switch,   } from "../../../../components";
import { Spacer } from "../../../../components/Spacer";
import CustomButton from "../../../../components/Button";
import {  GeneralErrorContainer, GeneralInputWrap, GeneralLabel, GeneralTextArea,      } from "../../../../components/styles";
import { Form, Formik } from "formik";
import { Main } from "./styles";
import { SetUpStoreTypes } from "../../../../constants/types";
import { useGetLoyaltySettings, useUpdateLoyaltSettings } from "../../../../hooks/useLoyalty";
import * as Yup from "yup";




export const Schema = Yup.object().shape({
	enableLoyaltyReward: Yup.boolean().required("Percentage discount is required"),
	percentageDiscount: Yup.number()
		.min(1, "Should not be less than 1")
		.max(100, "Cannot be greater than 100")
		.when("enableLoyaltyReward", (enableLoyaltyReward, schema) => {
			if(enableLoyaltyReward)
				return schema.required("Percentage discount is required");
			return schema;
		}),
	numberOfPurchasesRequired: Yup.number()
		.when("enableLoyaltyReward", (enableLoyaltyReward, schema) => {
			if(enableLoyaltyReward)
				return schema.required("Number of purchases  is required");
			return schema;
		}),
	rewardMessage: Yup.string()
		.min(4, "Too Short!")
		.max(50, "Too Long!")
		.when("enableLoyaltyReward", (enableLoyaltyReward, schema) => {
			if(enableLoyaltyReward)
				return schema.required("Message is required");
			return schema;
		})
});





 
type SocialTypes = "numberOfPurchasesRequired" | "rewardMessage" | "percentageDiscount" ;

const LoayltySettings = ( ) => {
	const { handleSetLoyaltySettings, loading} = useUpdateLoyaltSettings();
	const { settings , mutate} = useGetLoyaltySettings();

	
	const fields = [
		{
			name: "percentageDiscount",
			label: "How much % discount do you want to give your customers on each order?",
			placeholder: "Enter number of between 1 and 100",
			type: "text",
		},
		{
			name: "numberOfPurchasesRequired",
			label: "How many purchases must your customer  make before being added to a loyalty list",
			placeholder: "Enter number of purchase",
			type: "number",
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
					<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="14" colour={"Grey.3"}>
						Control how you reward users 
					</Span>
				</Flex>


				<Formik
					enableReinitialize
					validationSchema={Schema}
					initialValues={{
						percentageDiscount:  settings?.percentageDiscount ||  "",
						rewardMessage:  settings?.rewardMessage ||  "",
						numberOfPurchasesRequired: settings?.numberOfPurchasesRequired || "",
						enableLoyaltyReward:  settings?.enableLoyaltyReward || false
					}} 
					onSubmit={ async (values ) => { 
						const res = await handleSetLoyaltySettings((values as SetUpStoreTypes));
						res?.data && mutate();
					}}
				>
					{({ values, handleChange, setFieldValue , errors }) => {

						return (
							<Form>

 


								<Main gap="32px">
									<Flex height="auto" width="auto"   justifyContent="flex-start" >
										<GeneralLabel>Enable Loyalty Reward</GeneralLabel>
										<Switch
											activeColor="Success.default"
											nonActiveColor="Grey.5"
											click={(e) => setFieldValue("enableLoyaltyReward", e)}
											initialState={values.enableLoyaltyReward}
											reValidate
										/>
									</Flex>


										
									{
										values.enableLoyaltyReward ?
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
													<GeneralErrorContainer>
														{values?.enableLoyaltyReward && errors?.[field.name as SocialTypes]}
													</GeneralErrorContainer>
												</GeneralInputWrap>
											))
											: null
									}

									<CustomButton
										size="14"
										activeBgColor={"common.white"}
										activeBorderColor={"Orange.default"}
										activeColor={"Orange.default"}
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