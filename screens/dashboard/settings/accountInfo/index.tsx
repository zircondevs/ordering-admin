/* eslint-disable max-lines */
 
import React, { useEffect, useState }    from "react";
import { Bold, Flex, Input, Span,   } from "../../../../components";
import {     COlorFields, Container1, FavStyles, FormStyles, HeaderSTyles, LogoStyles, Main,    } from "./styles";
import Image from "next/image";
import CustomButton from "../../../../components/Button";
import {  GeneralInputWrap, GeneralLabel,   } from "../../../../components/styles";
import {   useGetAdminGeneralSettings, useUpdateAccountSettings } from "../../../../hooks/useSettigs";
import { SettingsUpload } from "../../../../components/Upload";
import { useGetetUserRoleModule } from "../../../../hooks/handlers/useRole";




 interface FormTypes {
	companyName: string,
	companyLogo: string,
	favicon: string,
	primaryColor: string,
	secondaryColor: string,
	deliveryCharge: number
	fontFamily: {
		fontUrl?: string,
		fontName?: string
	}
 }


const AccountInfo = () => {
	const { handleUpdateAccSettings, loading } = useUpdateAccountSettings();
	const { settings , mutate} = useGetAdminGeneralSettings();

	const {EDIT } = useGetetUserRoleModule( "settings");

	const [formData, setFormData] = useState<FormTypes>({favicon: "", companyName: "", companyLogo: "", primaryColor: "", secondaryColor: "", deliveryCharge: 0 , fontFamily: {}});


	useEffect(() => {
		setFormData({
			companyName:  settings?.companyName ||  "",
			favicon:  settings?.favicon ||  "",
			companyLogo:  settings?.companyLogo ||  "",
			primaryColor:  settings?.primaryColor || "",
			secondaryColor:  settings?.secondaryColor || "",
			deliveryCharge:  settings?.deliveryCharge || 0,
			fontFamily:  settings?.fontFamily || {}
		});
	}, [ settings]);



	const handleSubmit = async() => {
		await handleUpdateAccSettings(formData);
		mutate();
	};

	return (
		<Main>
			<HeaderSTyles height="auto" justifyContent="space-between" margin='40px 0 40px'>
				<Bold fontFamily='semiBold' weight="400" lineHeight="24" size="18" colour={"Grey.2"}>
					Update Information
				</Bold>
			</HeaderSTyles>

 

 
			<Container1 height="auto">
				<Flex width="auto" margin="0 auto 32px 0" justifyContent="flex-start">
					{
						formData?.companyLogo ?
							<LogoStyles>
								<Image src={formData?.companyLogo} alt="" layout="fill" objectFit="contain"/>
							</LogoStyles>
							: null
					}
					{
						EDIT ? 
							<SettingsUpload title="Company Logo" onSuccess={(e) =>  setFormData({  ...formData,  companyLogo:  e})}/> 
							: <Bold fontFamily='medium' weight="400" lineHeight="24" size="18" colour={"Grey.2"}>
								Company Logo
							</Bold>
					}
				</Flex>

					


				<Flex width="auto" margin="0 auto 32px 0" justifyContent="flex-start">			
					{
						formData?.favicon ?
							<FavStyles>
								<Image src={formData?.favicon} alt="" layout="fill" objectFit="contain"/>
							</FavStyles>
							: null
					}
					{
						EDIT ? <SettingsUpload title="Favicon" onSuccess={(e) =>  setFormData({  ...formData,  favicon:  e})}/> 
							: <Bold fontFamily='medium' weight="400" lineHeight="24" size="18" colour={"Grey.2"}>
								Favicon
							</Bold>
					}

				</Flex>
			</Container1>
		
			<FormStyles gap="32px" columns="repeat(auto-fit, minmax(300px, 1fr))">
				<GeneralInputWrap >
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

				<GeneralInputWrap >
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

				<Flex  justifyContent="flex-start"> 
					<GeneralLabel>Choose a primary color</GeneralLabel>
					<COlorFields>
						<Span fontFamily='regular' weight="400" lineHeight="16" size="14" colour={"Grey.2"}>
							{formData.primaryColor}
						</Span>
						<div>
							<input type={"color"} value={formData.primaryColor}  onChange={(e) => setFormData({...formData, primaryColor: (e.target as HTMLInputElement).value})}/>
						</div>
					</COlorFields>
				</Flex>

				<Flex  justifyContent="flex-start" direction="column" alignItems="flex-start">
					<GeneralLabel>Choose a secondary color</GeneralLabel>
					<COlorFields>
						<Span fontFamily='regular' weight="400" lineHeight="16" size="14" colour={"Grey.2"}>
							{formData.secondaryColor}
						</Span>
						<div>
							<input type={"color"}  value={formData.secondaryColor} onChange={(e) => setFormData({...formData, secondaryColor: (e.target as HTMLInputElement).value})} />
						</div>
					</COlorFields>
				</Flex>

				<GeneralInputWrap >
					<GeneralLabel> Add font family</GeneralLabel>
					<Input
						value={formData?.fontFamily.fontUrl || ""}
						name="fontFamily" 
						type={"text"} 
						handleChange={(e) => setFormData({...formData, fontFamily: {...formData.fontFamily,  fontUrl: (e.target as HTMLInputElement).value}})}
						borderCol={"Black.20"}
						activeBorderCol={"Blue.base.default"}
						placeholder="Enter a font family"
						borderRadius="8px"
					/>
				</GeneralInputWrap>

				<GeneralInputWrap >
					<GeneralLabel> Add font family name</GeneralLabel>
					<Input
						value={formData?.fontFamily.fontName || ""}
						name="fontFamily" 
						type={"text"} 
						handleChange={(e) => setFormData({...formData, fontFamily: {...formData.fontFamily, fontName: (e.target as HTMLInputElement).value}})}
						borderCol={"Black.20"}
						activeBorderCol={"Blue.base.default"}
						placeholder="Enter a font family"
						borderRadius="8px"
					/>
				</GeneralInputWrap>

			</FormStyles>
			
			{
				EDIT ?
					<CustomButton
						size="14"
						activeColor={"common.white"}
						type="submit"
						activeBorderColor={"common.white"}
						borderRadius="8"
						activeBgColor={"Orange.default"}
						isLoading={loading}
						onClick={handleSubmit}
						text={"Update changes" }
					/>
					: null
			}
		

 
 
		</Main>
	);
};
export default AccountInfo;
 
 