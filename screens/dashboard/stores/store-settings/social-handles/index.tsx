/* eslint-disable max-lines */
 


import React   from "react";

import { Bold,  Flex,    Input,         Span,   } from "../../../../../components";
import { Spacer } from "../../../../../components/Spacer";
import CustomButton from "../../../../../components/Button";
import {  GeneralInputWrap, GeneralLabel,      } from "../../../../../components/styles";
import { Form, Formik } from "formik";
import { Main } from "./styles";
import { useSetUpStore } from "../../../../../hooks/useSettigs";
import { removeEmptyValuesFromObj } from "../../../../../lib";
import { SetUpStoreTypes } from "../../../../../constants/types";



 
type SocialTypes = "twitterLink" | "instagramLink" | "facebookLink"

const SocialHandles = ({socialHandles, onDone}: {socialHandles: any, onDone: () => void} ) => {
	const { handleSetUpStore, loading} = useSetUpStore();

	const fields = [
		{
			name: "twitterLink",
			label: "Twitter Link",
			type: "text",
		},
		{
			name: "instagramLink",
			label: "Instagram Link",
			type: "text"
		},
		{
			name: "facebookLink",
			label: "Facebook Link",
			type: "text"
		},
	];


	
	return (
		<div>


			<div>
				<Flex height="auto"   margin="0 0 40px" direction="column" alignItems="flex-start">
					<Bold fontFamily='medium' weight="400" lineHeight="21" size="16" colour={"Grey.2"}>
						Social handles
					</Bold>
					<Spacer height="8px"/>
					<Span fontFamily='regular' weight="400" lineHeight="19" size="14" colour={"Grey.3"}>
						These allows you to share your products on the specified socail platforms.
					</Span>
				</Flex>


				<Formik
					enableReinitialize
					initialValues={{
						twitterLink:  socialHandles.twitterLink ||  "",
						facebookLink: socialHandles?.facebookLink || "",
						instagramLink: socialHandles?.instagramLink || ""
					}} 
					onSubmit={ async (values ) => { 
						const res = await handleSetUpStore(removeEmptyValuesFromObj(values as SetUpStoreTypes));
						res?.data && onDone();
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
export default SocialHandles;