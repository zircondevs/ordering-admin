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



 interface FormTypes {
	companyName: string,
	companyLogo: string,
	primaryColor: string,
	secondaryColor: string,
	deliveryCharge: number
 }


const AccountInfo = () => {
	const { handleUpdateAccSettings, loading } = useUpdateAccountSettings();
	const { handleImageUpload,  loading: loadingImage } = useUploadImage();
	const { settings } = useGetAdminGeneralSettings();



	const [formData, setFormData] = useState<FormTypes>({ companyName: "", companyLogo: "", primaryColor: "", secondaryColor: "", deliveryCharge: 0 });


	useEffect(() => {
		setFormData({
			companyName:  settings?.companyName ||  "",
			companyLogo:  settings?.companyLogo ||  "",
			primaryColor:  settings?.primaryColor || "",
			secondaryColor:  settings?.secondaryColor || "",
			deliveryCharge:  settings?.deliveryCharge || 0
		});
	}, [ settings]);


	
	const handleSubmit = () => {
		handleUpdateAccSettings(formData);
	};

	return (
		<Main>
			<HeaderSTyles height="auto" justifyContent="space-between" margin='40px 0 40px'>
				<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="24" size="18" colour={"Black.80"}>
					Update Information
				</Bold>
			</HeaderSTyles>


			<Flex width="auto" margin="0 auto 0 0" justifyContent="flex-start">
				<LogoStyles>
					<Image
						src={"https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png"}
						alt=""
						layout="fill"
						objectFit="contain"
					/>
				</LogoStyles>
			
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
									form.append("file", target.files[0] );
									const res = await handleImageUpload(form);
									console.log(res);
									setFormData({  ...formData,  companyLogo:  res?.data});
								}
							}} 
						/>
						<Span fontFamily='quicksand' weight="700" lineHeight="16" size="14" colour={"Grey.2"}>
							Upload Image
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
						placeholder="Enter your full name"
						borderRadius="8px"
					/>
				</GeneralInputWrap>

				<GeneralInputWrap margin="8px 0 0">
					<GeneralLabel>Choose a primary color</GeneralLabel>
					<COlorFields>
						<input type={"color"} value={formData.primaryColor}  onChange={(e) => setFormData({...formData, primaryColor: (e.target as HTMLInputElement).value})}/>
					</COlorFields>
				</GeneralInputWrap>

				<GeneralInputWrap margin="8px 0 0">
					<GeneralLabel>Choose a secondary color</GeneralLabel>
					<COlorFields>
						<input type={"color"}  value={formData.secondaryColor} onChange={(e) => setFormData({...formData, secondaryColor: (e.target as HTMLInputElement).value})} />
					</COlorFields>
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
						placeholder="Enter your full name"
						borderRadius="8px"
					/>
				</GeneralInputWrap>

				<CustomButton
					size="14"
					activeColor={"Grey.1"}
					type="submit"
					nonActiveBgColor="Black.20"
					fullwidth
					borderRadius="8"
					isLoading={loading}
					onClick={handleSubmit}
					text={"Update changes" }
				/>
			</FormStyles>

 
 
		</Main>
	);
};
export default AccountInfo;
 
 