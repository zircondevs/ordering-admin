/* eslint-disable max-lines */
 


import React   from "react";

import { Bold,  Flex,    Input,         Span,   } from "../../../../../components";
import { Spacer } from "../../../../../components/Spacer";
import CustomButton from "../../../../../components/Button";
import  { TERTIARY_COLOR, WHITE_COLOR } from "../../../../../hooks/colors";
import {  GeneralInputWrap, GeneralLabel,      } from "../../../../../components/styles";
import { Form, Formik } from "formik";
import { Main } from "./styles";



 
type SocialTypes = "twitter" | "instagram" | "facebook"

const SocialHandles = ( ) => {
	
	const fields = [
		{
			name: "twitter",
			label: "Twitter Link",
			type: "text",
		},
		{
			name: "instagram",
			label: "Instagram Link",
			type: "text"
		},
		{
			name: "facebook",
			label: "Facebook Link",
			type: "text"
		},
	];


	
	return (
		<div>


			<div>
				<Flex height="auto"   margin="0 0 40px" direction="column" alignItems="flex-start">
					<Bold fontFamily='quicksandMedium' weight="400" lineHeight="21" size="16" colour={"Grey.2"}>
						Social handles
					</Bold>
					<Spacer height="8px"/>
					<Span fontFamily='quicksand' weight="700" lineHeight="19" size="14" colour={"Grey.4"}>
						These allows you to share your products on the specified socail platforms.
					</Span>
				</Flex>


				<Formik
					enableReinitialize
					initialValues={{
						twitter: "",
						facebook: "",
						instagram: ""
					}} 
					onSubmit={ async (values ) => { 
						console.log(values);
					}}
				>
					{({ values, handleChange  }) => {

						return (
							<Form>
								<Main gap="32px">
									{
										fields.map(field => (
											<GeneralInputWrap margin="8px 0 0" key={field.name}>
												<GeneralLabel> Twitter Link</GeneralLabel>
												<Input
													value={values[field.name as SocialTypes]}
													name={field.name}
													type={"text"} 
													handleChange={handleChange}
													borderCol={"Black.20"}
													activeBorderCol={"Blue.base.default"}
													placeholder={`Enter ${field.name} link`}
													borderRadius="8px"
												/>
											</GeneralInputWrap>
										))
									}

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
export default SocialHandles;