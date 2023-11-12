 
import React, { useEffect, useState }    from "react";
import { Bold,   } from "../../components";
import {     StoreLinkStyles,     } from "./styles";
import {  StoreIcon } from "../../public/assets/svg";
import { UseContext } from "../../state/provider";





const StoreLink = () => {
	const { state: { client }} = UseContext();

	
	const [copied, setCopied] = useState(false);


	useEffect(() => {
		copied && setTimeout(() => setCopied(false),  2000);
	}, [ copied ]);
 
	if(!client?.companyName ) return null;
	return (
		<StoreLinkStyles wrap="nowrap" copied={copied}>
			<StoreIcon height="16" width="16"  colour={"Blue.default"}/>
			<a href={`${process.env.PORTL_URL}${client?.companyName}`} 	rel="noopener noreferrer" target="_blank" >
				<Bold fontFamily='ubuntuMedium' weight="600" lineHeight="19" size="14" colour={"Blue.default"}>
					{`${process.env.PORTL_URL}${client?.companyName}`}
				</Bold>
			</a>
			<button
				onClick={() => {
					setCopied(true);
					navigator.clipboard.writeText(`${process.env.PORTL_URL}${client?.companyName}`);
				}}
			>
				{copied ? "Copied" : "Copy Store Link"}
			</button>
		</StoreLinkStyles>
 
	);
};
export default StoreLink;
 

 