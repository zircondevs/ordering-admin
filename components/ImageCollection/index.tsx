import React from "react";
import {  Image, Span } from "..";
import { ImageIcon,   } from "../../public/assets/svg";
import { EmptyCard, Frame, Styles } from "./styles";





const ImageCollection = ({images}: {images: string[]}) => {

	


	return (
		<Styles width="auto" wrap={"nowrap"}> 
			{
				images?.length > 3 ?
 
					<EmptyCard   width="40px" height="40px" index={images.length + 1}>
						<Span 
							fontFamily='quicksand'
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
							loader={<ImageIcon height="44" width="44"  colour="Grey.5"/>}
							width="44px"
							height="44px"
							radius="100%"
						/>
					</Frame>
				))
			}
		</Styles>
	);

};
export default ImageCollection;