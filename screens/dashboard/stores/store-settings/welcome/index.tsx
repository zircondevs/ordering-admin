/* eslint-disable max-lines */
 


import React, { useEffect, useState }   from "react";
import {    LogoStyles,   } from "./styles";
import { Bold,  Flex, Grid,         Span,   } from "../../../../../components";
import { Spacer } from "../../../../../components/Spacer";
import CustomButton from "../../../../../components/Button";
import {  GeneralLabel,      } from "../../../../../components/styles";
import { Form, Formik } from "formik";
import Image from "next/image";
import EditorContainer from "../../../../../components/Editor";
import { useGetAdminGeneralSettings, useSetUpStore } from "../../../../../hooks/useSettigs";
import { removeEmptyValuesFromObj } from "../../../../../lib";
import { SetUpStoreTypes } from "../../../../../constants/types";
import { Main } from "../cart-type/styles";
import { Checkbox } from "../../../../../components/CheckMark";
import { SettingsUpload } from "../../../../../components/Upload";


 


const Welcome = () => {
	const [visualType, setVisualType] = useState("");


	const { handleSetUpStore, loading} = useSetUpStore();
	const { settings,   mutate } = useGetAdminGeneralSettings();

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
					<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="21" size="16" colour={"Grey.2"}>
						Introductory content
					</Bold>
					<Spacer height="8px"/>
					<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="14" colour={"Grey.3"}>
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
						res?.data && mutate();
					}}
				>
					{({ values, setFieldValue,  }) => {

						return (
							<Form>
								<Grid gap="32px">
									<div>
										<Span fontFamily='ubuntuMedium' weight="400" lineHeight="16" size="12" colour={"Grey.3"}>
											Select a media type to upload
										</Span>
										<Spacer height="8px"/>
										<Main gap="20px" columns="repeat(auto-fit, minmax(100px, 170px))">
											<Flex height="auto" width="auto"   justifyContent="flex-start" >
												<GeneralLabel>Image</GeneralLabel>
												<Checkbox checked={visualType === "image"}  onClick={() => setVisualType("image")} type="radio"/>
											</Flex>
											<Flex height="auto" width="auto"  justifyContent="flex-start"	>
												<GeneralLabel>Video</GeneralLabel>
												<Checkbox checked={visualType === "video"} onClick={() => setVisualType("video")} type="radio"/>
											</Flex>
										</Main>
									</div>

									{
										visualType === "image" ?

											<Flex width="auto" margin="0 auto 32px 0" justifyContent="flex-start">
												{ values?.storeImage ? <LogoStyles> <Image src={values?.storeImage} alt="" layout="fill" objectFit="contain"/> </LogoStyles> : null }
											
												<SettingsUpload title="Video Upload " onSuccess={(e) =>  setFieldValue("storeImage" , e) }/>
											</Flex>
											: visualType === "video" ? 
												<Flex width="auto" margin="0 auto 32px 0" justifyContent="flex-start">
													{ values?.storeVideo ? <LogoStyles> <video src={values?.storeVideo}  autoPlay={false}/> </LogoStyles> : null}
												
													<SettingsUpload title="Video Upload " onSuccess={(e) =>  setFieldValue("storeVideo" , e) }/>
												</Flex>
												: null
									}
									


									


									<Grid gap="16px">
										<GeneralLabel> Custom Message  </GeneralLabel>
										<EditorContainer initialValue={values.storeCustomMessage || "<p>Enter message …</p>"}  handleOnChange={(e) => setFieldValue("storeCustomMessage", e)}/>
									</Grid>

									<CustomButton
										size="14"
										activeBgColor={"common.white"}
										activeBorderColor={"Orange.default"}
										activeColor={"Orange.default"}
										type="submit"
										pad="padding.smaller"
										isLoading={loading}
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