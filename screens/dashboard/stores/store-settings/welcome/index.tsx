/* eslint-disable max-lines */
 


import React, { useEffect, useState }   from "react";
import {    LogoStyles,   } from "./styles";
import { Bold,  Flex, Grid,         Span,   } from "../../../../../components";
import { Spacer } from "../../../../../components/Spacer";
import CustomButton from "../../../../../components/Button";
import {  GeneralLabel, GenrealUploadBtnStyles,    } from "../../../../../components/styles";
import { Form, Formik } from "formik";
import { useUploadImage } from "../../../../../hooks/imgeUpload";
import Image from "next/image";
import { LoaderIcon } from "../../../../../public/assets/svg";
import EditorContainer from "../../../../../components/Editor";
import { useSetUpStore } from "../../../../../hooks/useSettigs";
import { removeEmptyValuesFromObj } from "../../../../../lib";
import { SetUpStoreTypes } from "../../../../../constants/types";
import { Main } from "../cart-type/styles";
import { Checkbox } from "../../../../../components/CheckMark";


 


const Welcome = ( {settings, onDone}: {settings: any, onDone: () => void}) => {
	const [uploadType, setUploadType] = useState("");
	const [visualType, setVisualType] = useState("");

	const { handleImageUpload,  loading: loadingImage } = useUploadImage();
	const { handleSetUpStore, loading} = useSetUpStore();


	useEffect(() => {
		if(settings?.storeImage) {
			setVisualType("image");
		}
		if(settings?.storeVideo) {
			setVisualType("video");
		}
	}, [ settings?.storeVideo, settings?.storeImage]);



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
						storeImage: settings?.storeImage || "",
						storeVideo: settings?.storeVideo || "",
						storeCustomMessage: settings?.storeCustomMessage || "",
					}} 
					onSubmit={ async (values ) => { 
						const res =await handleSetUpStore({
							...removeEmptyValuesFromObj(values as SetUpStoreTypes),
							...(
								visualType === "image" ? 
									{storeImage: values.storeImage,  storeVideo: ""} 
									: visualType === "video" ?
										{storeImage: "", storeVideo: values.storeVideo} 
										: {} 
							)
						});
						res?.data && onDone();
					}}
				>
					{({ values, setFieldValue,  }) => {

						return (
							<Form>
								<Grid gap="32px">
									<div>
										<Span fontFamily='quicksandSemiBold' weight="400" lineHeight="16" size="12" colour={"Grey.3"}>
											Select a media type to upload
										</Span>
										<Spacer height="8px"/>
										<Main gap="20px" columns="repeat(auto-fit, minmax(100px, 170px))">
											<Flex height="auto" width="auto"   justifyContent="flex-start" >
												<GeneralLabel>Audio</GeneralLabel>
												<Checkbox checked={visualType === "image"}  onClick={() => setVisualType("image")} type="radio"/>
											</Flex>
											<Flex height="auto" width="auto"  justifyContent="flex-start"	>
												<GeneralLabel>Vidoe</GeneralLabel>
												<Checkbox checked={visualType === "video"} onClick={() => setVisualType("video")} type="radio"/>
											</Flex>
										</Main>
									</div>

									{
										visualType === "image" ?

											<Flex width="auto" margin="0 auto 32px 0" justifyContent="flex-start">
												{ values?.storeImage ? <LogoStyles> <Image src={values?.storeImage} alt="" layout="fill" objectFit="contain"/> </LogoStyles> : null }
											
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
																	res?.data && setFieldValue("storeImage" , res?.data);
																}
															}} 
														/>
														<Span fontFamily='quicksand' weight="700" lineHeight="16" size="14" colour={"Grey.2"}>
															{values?.storeImage ? "Change Image" : "Upload Image"}
														</Span>
														{loadingImage && uploadType=== "image"  ? <div className="loader"><LoaderIcon height="30" width="30" /></div> : null}
													</GenrealUploadBtnStyles>
												</div>
											</Flex>
											: visualType === "video" ? 
												<Flex width="auto" margin="0 auto 32px 0" justifyContent="flex-start">
													{ values?.storeVideo ? <LogoStyles> <video src={values?.storeVideo}  autoPlay={false}/> </LogoStyles> : null}
												
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
																		res?.data && setFieldValue("storeVideo" , res?.data);
																	}
																}} 
															/>
															<Span fontFamily='quicksand' weight="700" lineHeight="16" size="14" colour={"Grey.2"}>
																{values?.storeVideo ? "Change video" : "Upload video"}
															</Span>
															{loadingImage  && uploadType === "video"  ? <div className="loader"><LoaderIcon height="30" width="30" /></div> : null}
														</GenrealUploadBtnStyles>
													</div>
												</Flex>
												: null
									}
									


									


									<Grid gap="16px">
										<GeneralLabel> Custom Message  </GeneralLabel>
										<EditorContainer initialValue={values.storeCustomMessage || "<p>Enter message …</p>"}  handleOnChange={(e) => setFieldValue("storeCustomMessage", e)}/>
									</Grid>

									<CustomButton
										size="14"
										activeBgColor={"Orange.default"}
										activeBorderColor={"Orange.default"}
										activeColor={"common.white"}
										type="submit"
										pad="padding.smaller"
										isLoading={loading}
										disabled={loadingImage}
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