import React, {  useState } from "react";
import { CancelIcon, CheckMarkIcon } from "../../public/assets/svg";
import { ChrkMarkContainer } from "./styles";
import { TERTIARY_COLOR } from "../../hooks/colors";

interface Props {
	borderRadius?: string; 
	size?: number;
	// eslint-disable-next-line no-unused-vars
	handleOnChange?: (e: boolean) => void; 
	initialState?: boolean;
	[key: string]: any;
	colour?: string,
	error? : boolean,
}


export const CheckMark = (
	{borderRadius, size, handleOnChange, initialState, colour, error, ...more}: Props
) =>  {
	const [ checked, setChecked ] = useState<boolean>( initialState || false  );

	const Color = (condition: boolean) => condition ?  
		colour ? colour : TERTIARY_COLOR[2]
		:	"white";


	return (
		<ChrkMarkContainer 
			bgColor={Color(checked)} 
			onClick={() => {
				if(handleOnChange){
					setChecked(!checked);
					handleOnChange(!checked);
				}
			}}
			width={`${(size || 20) + 2}px`} 
			height={`${(size || 20) + 2}px`}
			size={size}
			borderRadius={borderRadius}
			colour={colour}
			handleOnChange={handleOnChange}
			{...more}
		>
			{
				error ?
					<CancelIcon 
						colour={  Color(!checked)  }  
						width={`${((size || 20) -5)}px`} 
						height={`${((size || 20) -5)}px`}
					/>
					: <CheckMarkIcon 
						colour={Color(checked)}  
						colour2={ Color(!checked)}  
						width={`${size || 20}px`} 
						height={`${size || 20}px`}
					/>		 
			}
		</ChrkMarkContainer>
	);
};

 