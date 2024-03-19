
import {   Container1, Container2, DatePicker, DateStyle,   } from "./styles";
import React    from "react";
import { Bold,   Flex, Small,  } from "..";
import {   formateDate,   } from "../../lib";
import { CancelIcon, EditIcon } from "../../public/assets/svg";


const Filter = ({
	date, setDate, mutate
}: {
	date: string,
	setDate: React.Dispatch<React.SetStateAction<string>>;
	mutate: () => void
}) => {
 

	
	return (
		<Container2 height="auto" width="auto" alignItems="flex-start" >

			<Flex justifyContent="flex-start" height="auto" >
				<Small fontFamily='regular' weight="600" lineHeight="19" size="14" colour={"Black.default"}>Filter </Small>
 

				<Container1 justifyContent="flex-start" height="auto" width="auto">
					<DateStyle justifyContent="space-between"  height="auto" margin="0 0 0 8px">
						<Bold fontFamily='regular'
							weight="400"
							lineHeight="24"
							size="14"
							colour={"Black.default"}
						>

							{
								date ?
									`${formateDate(new Date(date)).day}  ${formateDate(date).shortMonth} ${formateDate(date).date }, ${formateDate(date).year}`
									: "-- -- -----"
							}
							
						</Bold>
						<DatePicker width="15px" height="15px">
							<input 
								type="date" 
								value={date}
								onChange={(e) => {
									setDate(  (e.target as HTMLInputElement).value );
									mutate();
								}}
							/>
							<EditIcon height="15" width="15"  colour="Black.default"/>
						</DatePicker>
					</DateStyle>

  
				</Container1>
			</Flex>
			{
				date ? 
					<Flex width="auto" height="auto" wrap="nowrap" className="clearFilter" as="button" type="button" onClick={() => setDate("")}>
						<CancelIcon colour="Error.default" width="10" height="10"/>
						<Small fontFamily='regular' weight="400" lineHeight="19" size="12" colour={"Error.default"}>Clear Filter </Small>
					</Flex>
					: null
			}
			
		</Container2>
	
	);
};
export default Filter;



