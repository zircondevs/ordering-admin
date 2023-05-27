/* eslint-disable max-lines */
 
import React, { useEffect, useState }    from "react";
import { Bold, Flex, Input, Span,   } from "../../../../components";
import {     COlorFields, FormStyles, HeaderSTyles, LogoStyles, Main, UploadBtnStyles,  } from "./styles";
import Image from "next/image";
import CustomButton from "../../../../components/Button";
import { Spacer } from "../../../../components/Spacer";
import {  GeneralInputWrap, GeneralLabel } from "../../../../components/styles";
import {   useGetAdminGeneralSettings, useUpdateAccountSettings } from "../../../../hooks/useSettigs";
import { useUploadImage } from "../../../../hooks/imgeUpload";
import { LoaderIcon } from "../../../../public/assets/svg";
import { PRIMARY_COLOR } from "../../../../hooks/colors";



 interface FormTypes {
	companyName: string,
	companyLogo: string,
	primaryColor: string,
	secondaryColor: string,
	deliveryCharge: number
	fontFamily: string
 }


const AccountInfo = () => {
	const { handleUpdateAccSettings, loading } = useUpdateAccountSettings();
	const { handleImageUpload,  loading: loadingImage } = useUploadImage();
	const { settings , mutate} = useGetAdminGeneralSettings();



	const [formData, setFormData] = useState<FormTypes>({ companyName: "", companyLogo: "", primaryColor: "", secondaryColor: "", deliveryCharge: 0 , fontFamily: ""});


	useEffect(() => {
		setFormData({
			companyName:  settings?.companyName ||  "",
			companyLogo:  settings?.companyLogo ||  "",
			primaryColor:  settings?.primaryColor || "",
			secondaryColor:  settings?.secondaryColor || "",
			deliveryCharge:  settings?.deliveryCharge || 0,
			fontFamily:  settings?.fontFamily || 0
		});
	}, [ settings]);



	const handleSubmit = async() => {
		await handleUpdateAccSettings(formData);
		mutate();
	};

	return (
		<Main>
			<HeaderSTyles height="auto" justifyContent="space-between" margin='40px 0 40px'>
				<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="24" size="18" colour={"Black.80"}>
					Update Information
				</Bold>
			</HeaderSTyles>


			<Flex width="auto" margin="0 auto 32px 0" justifyContent="flex-start">
				{
					formData?.companyLogo ?
						<LogoStyles>
							<Image
								src={formData?.companyLogo}
								alt=""
								layout="fill"
								objectFit="contain"
							/>
						</LogoStyles>
						: null
				}
			
				<div>
					<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="21" size="16" colour={"Grey.2"}>
						Company Logo
					</Bold>
					<Spacer height="4px" />
					<Span fontFamily='quicksand' weight="700" lineHeight="16" size="12" colour={"Grey.3"}>
						NB. Approved image size is 512x512px. Image should not exceed 900KB
					</Span>
					<Spacer height="24px" />
					<UploadBtnStyles isLoading={loadingImage}>
						<input type="file"  
							onChange={ async (e) => {
								const target = e.target ;
								if(target.files && target.files[0]) {
									const form = new FormData();
									form.append("image", target.files[0] );
									const res = await handleImageUpload(form);
									res?.data && setFormData({  ...formData,  companyLogo:  res?.data});
								}
							}} 
						/>
						<Span fontFamily='quicksand' weight="700" lineHeight="16" size="14" colour={"Grey.2"}>
							{formData?.companyLogo ? "Change Image" : "Upload Image"}
						</Span>
						{loadingImage ? <div className="loader"><LoaderIcon height="30" width="30" /></div> : null}
					</UploadBtnStyles>
				</div>
			</Flex>
 

			<FormStyles gap="32px">
				<GeneralInputWrap margin="8px 0 0">
					<GeneralLabel> Company Name</GeneralLabel>
					<Input
						value={formData.companyName}
						name="name" 
						type={"text"} 
						handleChange={(e) => setFormData({...formData, companyName: (e.target as HTMLInputElement).value})}
						borderCol={"Black.20"}
						activeBorderCol={"Blue.base.default"}
						placeholder="Enter company name"
						borderRadius="8px"
					/>
				</GeneralInputWrap>

				<Flex margin="8px 0 0" justifyContent="flex-start"> 
					<GeneralLabel>Choose a primary color</GeneralLabel>
					<COlorFields>
						<input type={"color"} value={formData.primaryColor}  onChange={(e) => setFormData({...formData, primaryColor: (e.target as HTMLInputElement).value})}/>
					</COlorFields>
				</Flex>

				<Flex margin="8px 0 0" justifyContent="flex-start">
					<GeneralLabel>Choose a secondary color</GeneralLabel>
					<COlorFields>
						<input type={"color"}  value={formData.secondaryColor} onChange={(e) => setFormData({...formData, secondaryColor: (e.target as HTMLInputElement).value})} />
					</COlorFields>
				</Flex>

				<GeneralInputWrap margin="8px 0 0">
					<GeneralLabel> Add font family</GeneralLabel>
					<Input
						value={formData?.fontFamily}
						name="fontFamily" 
						type={"text"} 
						handleChange={(e) => setFormData({...formData, fontFamily: (e.target as HTMLInputElement).value})}
						borderCol={"Black.20"}
						activeBorderCol={"Blue.base.default"}
						placeholder="Enter a font family"
						borderRadius="8px"
					/>
				</GeneralInputWrap>

				<GeneralInputWrap margin="8px 0 0">
					<GeneralLabel>  Delivery Charge (₦)</GeneralLabel>
					<Input
						value={formData?.deliveryCharge?.toString()}
						name="deliveryCharge" 
						type={"number"} 
						handleChange={(e) => setFormData({...formData, deliveryCharge: +(e.target as HTMLInputElement).value})}
						borderCol={"Black.20"}
						activeBorderCol={"Blue.base.default"}
						placeholder="Enter delivary charge"
						borderRadius="8px"
					/>
				</GeneralInputWrap>

				<CustomButton
					size="14"
					activeColor={"common.white"}
					type="submit"
					activeBorderColor={"common.white"}
					fullwidth
					borderRadius="8"
					bgColour={PRIMARY_COLOR[0]}
					isLoading={loading}
					onClick={handleSubmit}
					text={"Update changes" }
				/>
			</FormStyles>

 
 
		</Main>
	);
};
export default AccountInfo;
 
 