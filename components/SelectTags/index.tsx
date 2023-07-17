/* eslint-disable no-unused-vars */

import {   CancelStyles, Layout, SelectTagStyles,   } from "./styles";
import {  Span  } from "..";
import React   from "react";
import { CancelIcon } from "../../public/assets/svg";




interface PropTypes {
	options: string[]
	active: string[]
	disable?: string[]
	setActive: (e: string[], option?: string | number, state?: boolean) => void
}
const SelectTags = ({options, active, setActive, disable}: PropTypes) => {
 
	
	return (
		<Layout justifyContent="flex-start">
			{
				options.map(option => (
					<SelectTagStyles 
						key={option} 
						active={active.includes(option)}
						disable={disable?.includes(option)}
						onClick={() => {
							disable?.includes(option) ? [] :
								active.includes(option) ?
									setActive(active.filter(_ => _!== option), option, false)
									:setActive([...active, option], option, true);
						}}
					>
						<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="14" colour={ active.includes(option) ? "Grey.2" :"Grey.3"}>
							{option}
						</Span>
						{
							active.includes(option) ?
								<CancelStyles disable={disable?.includes(option)}>
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
 