
import {    BreadCrumStyles } from "./styles";
 
import React  from "react";
import {    Span } from "..";
import { LeftArrowIcon } from "../../public/assets/svg";
import { useRouter } from "next/router";


const BreadCrumb = ({
	list
}: {
	list: {name: string, link?: string}[]
}) => {

	const router = useRouter();
	return (
		<BreadCrumStyles id="BreadCrumb" width="fit-content">
			{
				list.map((item, index) => (
					<React.Fragment key={index}>
						<button 
							onClick={() =>item.link ? router.push(item.link) : []} 
							type='button' 
							role={"button"}
						>
							<Span 
								fontFamily='quicksandSemiBold'
								weight="400"
								lineHeight="20"
								size="14"
								colour={list.length === (index +1) ? "Grey.4" : "Grey.2"}
							>
								{item.name}
							</Span>
						</button>
						{
							list.length === (index +1) ? null :
								<LeftArrowIcon colour={"Grey.4"} width='10' height="10"/>
						}
					</React.Fragment>
				))
			}


		</BreadCrumStyles>
	);
};
export default BreadCrumb;
 