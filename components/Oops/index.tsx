

import { Container } from "./styles";
import { Spacer } from "../Spacer";
import { Header3,   Paragraph, Button } from "..";
import React from "react";


interface PropType {
	errorMessage?: string | JSX.Element, 
	click?: () => void, 
	icon?: any, 
	title?: string, 
	btnText?: string;
	loading?: boolean;
}

const Oops = ({ errorMessage, click, icon, title, btnText, loading = false}: PropType) => {

	return (
		<Container 
			direction="column"
		>
			<Spacer height="20px"></Spacer>

			{icon ? icon : null}

			

			{
				title ?
					<>
						<Spacer height="20px"></Spacer>
						<Header3 
							colour={"Grey.2"}
							size="font20" 
							lineHeight="lineHeight24" 
							weight="fontWeightBold" 
							fontFamily="sagoe"
							center
						>
							{title }
						</Header3>
					</>
					: null
			}

			<Spacer height="10px"></Spacer>
			{
				errorMessage ?
					typeof(errorMessage) === "string" ?
						<Paragraph 
							colour={"Grey.2"} size="14" lineHeight="21" 
							weight="fontWeightNormal" fontFamily="sagoe" center
						>
							{errorMessage}
						</Paragraph>
						: errorMessage
					: null
			}

			<Spacer height="10px"></Spacer>

			{
				click ? 
					<Button 
						size='14'
						nonActiveColor="Black.20"
						activeColor="Black.default"
						nonActiveBgColor={"Black.5"}
						nonActiveBorderColor={"Black.5"}
						activeBgColor="transparent.default"
						activeBorderColor="Black.default"
						text={btnText}
						borderRadius="8"
						pad={"padding.smaller"}
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
