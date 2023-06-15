/* eslint-disable max-lines */
 


import React, { useState }   from "react";
import {    LogoStyles,   } from "./styles";
import { Bold,  Flex, Grid,         Span,   } from "../../../../../components";
import { Spacer } from "../../../../../components/Spacer";
import CustomButton from "../../../../../components/Button";
import  { TERTIARY_COLOR, WHITE_COLOR } from "../../../../../hooks/colors";
import {  GeneralLabel, GenrealUploadBtnStyles,    } from "../../../../../components/styles";
import { Form, Formik } from "formik";
import { useUploadImage } from "../../../../../hooks/imgeUpload";
import Image from "next/image";
import { LoaderIcon } from "../../../../../public/assets/svg";
import EditorContainer from "../../../../../components/Editor";


 


const Welcome = ( ) => {
	const [uploadType, setUploadType] = useState("");

	const { handleImageUpload,  loading: loadingImage } = useUploadImage();

	return (
		<div>


			<div>
				<Flex height="auto"   margin="0 0 40px" direction="column" alignItems="flex-start">
					<Bold fontFamily='quicksandMedium' weight="400" lineHeight="21" size="16" colour={"Grey.2"}>
						Introductory content
					</Bold>
					<Spacer height="8px"/>
					<Span fontFamily='quicksand' weight="700" lineHeight="19" size="14" colour={"Grey.4"}>
						This appears once a user views your link. 
					</Span>
				</Flex>


				<Formik
					enableReinitialize
					initialValues={{
						video: "",
						message: "",
						image: ""
					}} 
					onSubmit={ async (values ) => { 
						console.log(values);
					}}
				>
					{({ values, setFieldValue,  }) => {

						return (
							<Form>
								<Grid gap="32px">
									<Flex width="auto" margin="0 auto 32px 0" justifyContent="flex-start">
										{ values?.image ? <LogoStyles> <Image src={values?.image} alt="" layout="fill" objectFit="contain"/> </LogoStyles> : null }
									
										<div>
											<GeneralLabel> Image Upload </GeneralLabel>
											<Spacer height="4px" />
											<Span fontFamily='quicksand' weight="400" lineHeight="16" size="12" colour={"Grey.3"}>
												NB. Approved image size is 512x512px. Image should not exceed 900KB
											</Span>
											<Spacer height="24px" />
											<GenrealUploadBtnStyles isLoading={loadingImage && uploadType=== "image" }>
												<input type="file"  
													onChange={ async (e) => {
														const target = e.target ;
														if(target.files && target.files[0]) {
															setUploadType("image");
															const form = new FormData();
															form.append("image", target.files[0] );
															const res = await handleImageUpload(form);
															res?.data && setFieldValue("image" , res?.data);
														}
													}} 
												/>
												<Span fontFamily='quicksand' weight="700" lineHeight="16" size="14" colour={"Grey.2"}>
													{values?.image ? "Change Image" : "Upload Image"}
												</Span>
												{loadingImage && uploadType=== "image"  ? <div className="loader"><LoaderIcon height="30" width="30" /></div> : null}
											</GenrealUploadBtnStyles>
										</div>
									</Flex>
									


									<Flex width="auto" margin="0 auto 32px 0" justifyContent="flex-start">
										{ values?.video ? <LogoStyles> <video src={values?.video}  autoPlay={false}/> </LogoStyles> : null}
									
										<div>
											<GeneralLabel> Video Upload </GeneralLabel>
											<Spacer height="4px" />
											<Span fontFamily='quicksand' weight="400" lineHeight="16" size="12" colour={"Grey.3"}>
												NB. Approved image size is 512x512px. Image should not exceed 4mb
											</Span>
											<Spacer height="24px" />
											<GenrealUploadBtnStyles isLoading={loadingImage && uploadType=== "video"  }>
												<input type="file"  
													onChange={ async (e) => {
														const target = e.target ;
														if(target.files && target.files[0]) {
															setUploadType("video");
															const form = new FormData();
															form.append("image", target.files[0] );
															const res = await handleImageUpload(form);
															res?.data && setFieldValue("video" , res?.data);
														}
													}} 
												/>
												<Span fontFamily='quicksand' weight="700" lineHeight="16" size="14" colour={"Grey.2"}>
													{values?.video ? "Change video" : "Upload video"}
												</Span>
												{loadingImage  && uploadType === "video"  ? <div className="loader"><LoaderIcon height="30" width="30" /></div> : null}
											</GenrealUploadBtnStyles>
										</div>
									</Flex>
									


									<Grid gap="16px">
										<GeneralLabel> Custom Message  </GeneralLabel>
										<EditorContainer initialValue={values.message || "<p>Enter message …</p>"}  handleOnChange={(e) => setFieldValue("message", e)}/>
									</Grid>

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
								</Grid>

							</Form>
						);
					}
						
					}
				</Formik>

			</div>
		</div>
	);
};
export default Welcome;