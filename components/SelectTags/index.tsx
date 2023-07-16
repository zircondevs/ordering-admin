/* eslint-disable no-unused-vars */

import {   CancelStyles, Layout, SelectTagStyles,   } from "./styles";
import {  Span  } from "..";
import React   from "react";
import { CancelIcon } from "../../public/assets/svg";




interface PropTypes {
	options: string[]
	active: string[]
	setActive: (e: string[]) => void
}
const SelectTags = ({options, active, setActive}: PropTypes) => {
 
	
	return (
		<Layout justifyContent="flex-start">
			{
				options.map(option => (
					<SelectTagStyles key={option} active={active.includes(option)}
						onClick={() => {
							active.includes(option) ?
								setActive(active.filter(_ => _!== option))
								:setActive([...active, option]);
						}}
					>
						<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="14" colour={ active.includes(option) ? "Grey.2" :"Grey.3"}>
							{option}
						</Span>
						{
							active.includes(option) ?
								<CancelStyles>
									<CancelIcon height="5" width="5" colour="common.white" /> 
								</CancelStyles>
								: null
						}
					</SelectTagStyles>
				))
			}
		</Layout>
	);
};
export default SelectTags;
 