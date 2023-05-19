/* eslint-disable max-lines */
import React from "react";
import {  DeskTopLoaderStyles, LoaderContainer,   
	LoaderContentsContainer, 
} from "./styles";
import { Flex, Span } from "..";
import { LoaderIcon } from "../../public/assets/svg";
 
 
 

 
 


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


export const  DesktopLoader = ({ isLoading }: {isLoading: boolean}) => {
 
	return (
		<DeskTopLoaderStyles isLoading={isLoading}>
			<Flex>
				<LoaderIcon height="30" width="30" colour="Blue.dark.default"/>
				<Span fontFamily='quicksand' weight="700" lineHeight="21" size="14" colour={"Black.default"}>
					Loading...
				</Span>
			</Flex>
		</DeskTopLoaderStyles>
	);
};
 

 