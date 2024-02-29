/* eslint-disable max-lines */
 


import React   from "react";

import { Bold,  Container,   Flex,    Input,         Span, Switch,   } from "../../../../components";
import { Spacer } from "../../../../components/Spacer";
import CustomButton from "../../../../components/Button";
import {  GeneralErrorContainer, GeneralInputWrap, GeneralLabel, GeneralTextArea,      } from "../../../../components/styles";
import { Form, Formik } from "formik";
import { FieldCard, Main } from "./styles";
import { useGetLoyaltySettings, useUpdateLoyaltSettings } from "../../../../hooks/useLoyalty";
import * as Yup from "yup";
import { Checkbox } from "../../../../components/CheckMark";
import Tooltip from "../../../../components/Tooltip";


type OptionTypes = "PURCHASE" |  "AMOUNT" | "PRODUCT"
type OptionValueTypes = "totalAmountToBePurchased" |  "numberOfPurchasesRequired" | "totalProductToBePurchased"


export const Schema = Yup.object().shape({
	enableLoyaltyReward: Yup.boolean().required("Loyalty setting is required"),
	percentageDiscount: Yup.number()
		.min(1, "Should not be less than 1")
		.max(100, "Cannot be greater than 100")
		.when("enableLoyaltyReward", (enableLoyaltyReward, schema) => {
			if(enableLoyaltyReward)
				return schema.required("Percentage discount is required");
			return schema;
		}),
	totalAmountToBePurchased: Yup.number()
		.when(["enableLoyaltyReward", "loyaltyOptions"], ([enableLoyaltyReward, loyaltyOptions], schema) => {
			if(enableLoyaltyReward && (loyaltyOptions ===  "AMOUNT"))
				return schema.required("Total amount  is required");
			return schema;
		}),
	numberOfPurchasesRequired: Yup.number()
		.when(["enableLoyaltyReward", "loyaltyOptions"], ([enableLoyaltyReward, loyaltyOptions], schema) => {
			if(enableLoyaltyReward && (loyaltyOptions ===  "PURCHASE"))
				return schema.required("Number of purchases  is required");
			return schema;
		}),
	totalProductToBePurchased: Yup.number()
		.when(["enableLoyaltyReward", "loyaltyOptions"], ([enableLoyaltyReward, loyaltyOptions], schema) => {
			if(enableLoyaltyReward && (loyaltyOptions ===  "PRODUCT"))
				return schema.required("Number of product    is required");
			return schema;
		}),
	loyaltyOptions: Yup.string().oneOf(["PRODUCT", "AMOUNT", "PURCHASE"])
		.when("enableLoyaltyReward", (enableLoyaltyReward, schema) => {
			if(enableLoyaltyReward)
				return schema.required("An options   is required");
			return schema;
		}),
	rewardMessage: Yup.string()
		.min(4, "Too Short!")
		.when("enableLoyaltyReward", (enableLoyaltyReward, schema) => {
			if(enableLoyaltyReward)
				return schema.required("Message is required");
			return schema;
		})
		.required("A message discount is required")
});
 

const LoayltySettings = ( ) => {
	const { handleSetLoyaltySettings, loading} = useUpdateLoyaltSettings();
	const { loyaltySettings , mutate} = useGetLoyaltySettings();

	

	const options =  [
		{name: "By Product",  value: "PRODUCT", description: "Users will be added to your loyalty list when they purchase a specied quantiy of your product"},
		{name: "By Amount",  value: "AMOUNT", description: "Users will be added to your loyalty list when they have spent a specified amount your product"},
		{name: "By Purchase", value: "PURCHASE", description: "Users will be added to your loyalty list when they purchase a specied quantity of your product"},
	];
 
	const fieldOptions = {
		PURCHASE: {
			label: "How many PURCHASES  must your customer  make   before being added to a loyalty list",
			key: "numberOfPurchasesRequired",
			info: "NB: A purchase can contain more than one product if your cart policy is by pack (check store settings)"
		},
		AMOUNT: {
			label: "How MUCH goods must your customer  spend in total before being added to a loyalty list",
			key: "totalAmountToBePurchased",
			info: ""
		},
		PRODUCT: {
			label: "How many PRODUCTS when combined must your customer  purchase in total before being added to a loyalty list",
			key: "totalProductToBePurchased",
			info: ""
		},
	};

	
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
						percentageDiscount:  loyaltySettings?.percentageDiscount ||  "",
						rewardMessage:  loyaltySettings?.rewardMessage ||  "",
						enableLoyaltyReward:  loyaltySettings?.enableLoyaltyReward || false,
						loyaltyOptions: loyaltySettings?.loyaltyOptions ||  "",

						numberOfPurchasesRequired: loyaltySettings?.numberOfPurchasesRequired || "",
						totalProductToBePurchased: loyaltySettings?.totalProductToBePurchased || "",
						totalAmountToBePurchased: loyaltySettings?.totalAmountToBePurchased || "",
					}} 
					onSubmit={ async (values ) => { 
						const res = await handleSetLoyaltySettings({
							enableLoyaltyReward: values.enableLoyaltyReward,
							...(values.enableLoyaltyReward && {
								percentageDiscount: values.percentageDiscount,
								rewardMessage: values.rewardMessage,
								loyaltyOptions: values.loyaltyOptions,
								...(values.enableLoyaltyReward && {
									[fieldOptions[values.loyaltyOptions as OptionTypes].key as OptionValueTypes] : 
									values[fieldOptions[values.loyaltyOptions as OptionTypes].key as OptionValueTypes]  
								})
							})
						});
						res?.data && mutate();
					}}
				>
					{({ values, handleChange, setFieldValue , errors, dirty }) => {

						return (
							<Form>

 
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
										<Main gap="40px 100px" columns="1fr 1fr">
											<FieldCard	value={1}>
												<GeneralInputWrap>
													<GeneralLabel> How much % discount do you want to give your customers on each order?</GeneralLabel>
													<Input
														value={values.percentageDiscount}
														name={ "percentageDiscount"}
														type={"text"} 
														handleChange={handleChange}
														borderCol={"Black.20"}
														activeBorderCol={"Blue.base.default"}
														placeholder={  "Enter number of between 1 and 100" }
														borderRadius="8px"
													/>
													<GeneralErrorContainer>
														{ errors?.percentageDiscount as string}
													</GeneralErrorContainer>
												</GeneralInputWrap>
											</FieldCard>



											<FieldCard value={2}  >
												<GeneralLabel> Which loyalty option do you want to implement? </GeneralLabel>
												<Flex height="auto" justifyContent="flex-start"  >
													{
														options.map(option => (
															<Tooltip key={option.name} message={option.description} bottom="30px" right="0">
																<Flex height="auto" width="auto" margin="20px 30px 0 0">
																	<Container width="auto" height="auto" margin="0 10px 0 0">
																		<Checkbox 
																			checked={ values.loyaltyOptions === option.value }  
																			onClick={() => setFieldValue("loyaltyOptions", option.value)} type="radio"
																		/>
																	</Container>
																	<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="14" colour={"Grey.3"}>
																		{option.name}
																	</Span>
																</Flex>
															</Tooltip>
														))
													}
												</Flex>
												<GeneralErrorContainer>
													{  errors?.loyaltyOptions as string}
												</GeneralErrorContainer>
											</FieldCard>
 

											<FieldCard	value={3}>
												<GeneralInputWrap>

													<GeneralLabel> What do you want to tell your user once she get added to the loyalty list </GeneralLabel>
													<GeneralTextArea 
														value={values.rewardMessage}
														name={"rewardMessage"}
														onChange={handleChange}
														placeholder={"Enter a message "}
													/>
													<GeneralErrorContainer>
														{ errors?.rewardMessage as string}
													</GeneralErrorContainer>
												</GeneralInputWrap>
											</FieldCard>
											
											{
												values.loyaltyOptions ?
													<FieldCard	value={4}>
														<GeneralInputWrap>
															<GeneralLabel>{fieldOptions[values.loyaltyOptions as OptionTypes].label}</GeneralLabel>
															{
																fieldOptions[values.loyaltyOptions as OptionTypes].info  ?
																	<>
																		<Flex height="auto" margin="30px 0 20px">
																			<Span fontFamily='ubuntuMedium' weight="400" lineHeight="16" size="12" colour={ "common.black"}>
																				{fieldOptions[values.loyaltyOptions as OptionTypes].info }
																			</Span>
																		</Flex>
																	</>
																	: null
															}
															<Input
																value={values[fieldOptions[values.loyaltyOptions as OptionTypes].key as OptionValueTypes ]}
																name={ fieldOptions[values.loyaltyOptions as OptionTypes].key }
																type={"text"} 
																handleChange={handleChange}
																borderCol={"Black.20"}
																activeBorderCol={"Blue.base.default"}
																placeholder={  "Enter a value" }
																borderRadius="8px"
															/>
															<GeneralErrorContainer>
																{ 
																	errors[fieldOptions[values.loyaltyOptions as OptionTypes].key as OptionValueTypes ] as string
																}
															</GeneralErrorContainer>
														</GeneralInputWrap>
													</FieldCard>
													: null
											}
		
										</Main>
										: null
								}

								<Spacer height="60px"/>
								<CustomButton
									size="14"
									activeBgColor={"Orange.default"}
									activeBorderColor={"Orange.default"}
									activeColor={"common.white"}
									type="submit"
									isLoading={loading}
									disabled={!dirty}
									pad="padding.smaller"
									nonActiveBgColor="Black.5"
									text={  "Save Changes" }
								/> 

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