import React from "react";
import {   Span } from "..";
import { EmptyCard, Frame, Styles } from "./styles";
import Image from "next/image";





const ImageCollection = ({images}: {images: string[]}) => {

	


	return (
		<Styles width="auto" wrap={"nowrap"}> 
			{
				images?.length > 3 ?
 
					<EmptyCard   width="40px" height="40px" index={images.length + 1}>
						<Span 
							fontFamily='ubuntu'
							weight="600"
							lineHeight="24"
							size="14"
							colour={"common.white"}
						>
							+{images?.length - 3}
						</Span>
					</EmptyCard>
					: null
			}
			{
				images.slice(0, 3).map((image, index) => (
					<Frame key={index} width="44px" height="44px" index={images.length - index}>
						<Image
							src={image} 
							width="44px"
							height="44px"
						/>
					</Frame>
				))
			}
		</Styles>
	);

};
export default ImageCollection;