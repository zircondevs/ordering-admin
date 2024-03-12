

import { Container } from "./styles";
import { Spacer } from "../Spacer";
import { Button, Flex, Span } from "..";
import React from "react";


interface PropType {
	errorMessage?: string | JSX.Element, 
	click?: () => void, 
	icon?: any, 
	btnText?: string;
	loading?: boolean;
}

const Oops = ({ errorMessage, click, icon, btnText, loading = false}: PropType) => {

	return (
		<Container 
			direction="column"
		>
			<Spacer height="20px"></Spacer>

			<Flex height="auto" >
				{icon ? <Flex height="auto" width="auto" margin="0 10px 0 0">{icon}</Flex> : null}

				
				{
					errorMessage ?
						typeof(errorMessage) === "string" ?
							<Span 
								colour={"Grey.2"} size="14" lineHeight="21" 
								weight="fontWeightNormal" fontFamily="sagoe" center
							>
								{errorMessage}
							</Span>
							: errorMessage
						: null
				}

			</Flex>

			<Spacer height="10px"></Spacer>


			{
				click ? 
					<Button 
						size='14'
						nonActiveColor="Black.20"
						activeColor="Blue.default"
						nonActiveBgColor={"Black.5"}
						nonActiveBorderColor={"common.white"}
						activeBgColor="transparent.default"
						activeBorderColor="common.white"
						text={btnText}
						borderRadius="8"
						pad={"padding.0"}
						onClick={() =>  click()}
						isLoading={loading}
					/>
					: null
			}
			<Spacer height="20px"></Spacer>
		</Container>
	);
};

export default Oops;
