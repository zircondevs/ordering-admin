import React  from "react";
import { CheckboxStyles } from "./styles";
import { Check2Icon } from "../../public/assets/svg";
 
  
export const Checkbox = ({checked, ...props}: any ) => {
	return (
		<CheckboxStyles checked={ checked}>
			{
				props?.type === "radio" && checked ?
					<Check2Icon height="12" width="12" colour="common.white"/>
					: null
			}
			<input {...props}/>
		</CheckboxStyles>
	);
};