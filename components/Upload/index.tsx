/* eslint-disable no-unused-vars */
/* eslint-disable max-lines */
 
import React, { useState }    from "react";
import {   SettingsUploadBtnStyles,   UploadBtnStyles,    } from "./styles";
import {  Bold, Flex,  Span,   } from "../../components";
import {  LoaderIcon,   UploadIcon } from "../../public/assets/svg";
import { useUploadImage } from "../../hooks/imgeUpload";
import { Spacer } from "../Spacer";




 

interface PropType {
	onSuccess: (e: string) => void
}

const Upload = ({	onSuccess , } : PropType) => {
 

	const { handleImageUpload,  loading: loadingImage } = useUploadImage();
 
	return (
		
		<UploadBtnStyles loadingImage={loadingImage}>
			<input type="file"  
				onChange={ async (e) => {
					if(loadingImage) return;
					const target = e.target ;
					if(target.files && target.files[0]) {
						const form = new FormData();
						form.append("image", target.files[0] );
						const res = await handleImageUpload(form);
						res?.data && onSuccess( res?.data);
					}
				}} 
			/>
			<Flex className="icon" width="60px" height="60px">
				{
					loadingImage ?
						<LoaderIcon colour="Grey.4" height="35" width="35" />
						:<UploadIcon colour="Grey.4" height="21" width="21"/>
				}
			</Flex>
			<div>
				<Span fontFamily='regular' weight="400" lineHeight="19" size="16" colour={"Grey.2"}>
					Upload Images
				</Span>
				<br />
				<Span fontFamily='regular' weight="400" lineHeight="14" size="12" colour={"Grey.2"}>
					You can only upload at most 5 images
				</Span>
				
				<Spacer height="8px"/>
				<Span fontFamily='regular' weight="400" lineHeight="14" size="10" colour={"Grey.3"}>
					File size must not exceed 2MB. JPG, PNG supported
				</Span>
			</div>
		</UploadBtnStyles>
	);
};
export default Upload;




interface PropTypes {
	title?: string
	size?: string
	onSuccess: (e: string) => void;
	type?: "image" | "video"
}

export const SettingsUpload = ({title, size, onSuccess, type = "image" }: PropTypes) => {
 
	const [imgUrl, setImgUrl] = useState("");
	const { handleImageUpload,  loading: loadingImage } = useUploadImage();


	return (
		<div>
			<Bold fontFamily='semiBold' weight="700" lineHeight="21" size="16" colour={"Grey.2"}>
				{title || "Upload Image"}
			</Bold>
			<Spacer height="4px" />
			<Span fontFamily='regular' weight="400" lineHeight="16" size="12" colour={"Grey.3"}>
				NB. Approved image size is {size || "512x512px"}.<br /> Image should not exceed 900KB
			</Span>
			<Spacer height="24px" />
			<SettingsUploadBtnStyles isLoading={loadingImage  }>
				<input type="file"  
					onChange={ async (e) => {
						const target = e.target ;
						if(target.files && target.files[0]) {
							const form = new FormData();
							form.append(type, target.files[0] );
							const res = await handleImageUpload(form);
							if(res?.data) {
								setImgUrl(res?.data);
								onSuccess( res?.data);
							}
						}
					}} 
				/>
				<Span fontFamily='regular' weight="400" lineHeight="16" size="14" colour={"Grey.2"}>
					<UploadIcon height="12" width="12" colour="Grey.3" />	{imgUrl ? "Change" : "Upload"}
				</Span>
				{loadingImage  ? <div className="loader"><LoaderIcon height="30" width="30" /></div> : null}
			</SettingsUploadBtnStyles>
		</div>
	);
};