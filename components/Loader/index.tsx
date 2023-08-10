/* eslint-disable max-lines */
import React from "react";
import {  Animate, LoaderContainer,   
	LoaderContentsContainer, 
} from "./styles";
import { Bold, Flex,   } from "..";
import {   OTHAIcon } from "../../public/assets/svg";
import { singleSpace } from "../../lib";
 
 
 

 
 


export const Loader = ({children}: any) => {
	return (
		<LoaderContainer>
			{children}
		</LoaderContainer>
	);
};

export const LoaderContents = (props: { width: string, height: string, [e: string]: any, radius?: string}) => {
	return (
		<LoaderContentsContainer 
			bgColor="Black.20" 
			{...props}
			wit={props.width} 
			height={props.height}  
			className="animate"
			radius={props?.radius || ""}
		></LoaderContentsContainer>
	);
};


 

export const IconLoader = () => {
	return (
		<Animate>
			<Flex>
				<Flex width="auto">
					<OTHAIcon height="30" width="30" colour="Orange.default"/>
					{singleSpace()}
					<Bold  weight="600" fontFamily='quicksandMedium' lineHeight="32" size="24" colour={"Grey.1"} center>
						Otha
					</Bold>
				</Flex>
				<Flex width="auto" className="fixed">
					<OTHAIcon height="30" width="30" colour="Grey.1"/>
					{singleSpace()}
					<Bold  weight="600" fontFamily='quicksandMedium' lineHeight="32" size="24" colour={"Grey.1"} center>
						Otha
					</Bold>
				</Flex>
			</Flex>
		</Animate>
	);
};