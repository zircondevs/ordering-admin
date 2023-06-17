/* eslint-disable no-unused-vars */
/* eslint-disable max-lines */
 
import React    from "react";
import {   UploadBtnStyles,    } from "./styles";
import {  Flex,  Span,   } from "../../components";
import {  LoaderIcon,   UploadIcon } from "../../public/assets/svg";
import { useUploadImage } from "../../hooks/imgeUpload";



 

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
						onSuccess( res?.data);
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
				<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="16" colour={"Grey.2"}>
					Upload Images
				</Span>
				<br />
				<Span fontFamily='ubuntu' weight="400" lineHeight="14" size="10" colour={"Grey.3"}>
					File size must not exceed 2MB. JPG, PNG supported
				</Span>
			</div>
		</UploadBtnStyles>
	);
};
export default Upload;
