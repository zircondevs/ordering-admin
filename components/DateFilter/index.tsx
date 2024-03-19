
import { Bold, Flex, Small } from "..";
import { dateDiff, formateDate, getYYYYMMDD } from "../../lib";
import { EditIcon, LongArrowicon } from "../../public/assets/svg";
import {   Container1, MainContainer, DatePicker, DateStyle,   } from "./styles";
import React    from "react";


const DateFilter = ({
	date, setDate, mutate, title
}: {
	date: {from: string, to: string},
	setDate: React.Dispatch<React.SetStateAction<{from: string , to: string}>>;
	mutate: () => void,
	title?: string
}) => {
 

	
	return (
		<MainContainer className="MainContainer" height="auto" width="auto" alignItems="flex-start" direction="column">

			<Flex justifyContent="flex-start" height="auto" >
				<Small fontFamily='regular'
					weight="600"
					lineHeight="19"
					size="12"
					colour={"Black.default"}
				>{title || "Last"} {dateDiff(date.from, date.to)} days</Small>

				<Container1 justifyContent="flex-start" height="auto" width="auto">
					<DateStyle justifyContent="space-between"  height="auto" margin="0 0 0 8px">
						<Bold fontFamily='regular'
							weight="400"
							lineHeight="24"
							size="14"
							colour={"Black.default"}
						>
							{`${formateDate(date.from).day}  ${formateDate(date.from).shortMonth} ${formateDate(date.from).date }, ${formateDate(date.from).year}` }
						</Bold>
						<DatePicker width="15px" height="15px">
							<input 
								type="date" 
								value={date.from}
								max={getYYYYMMDD(new Date(date.to))} 
								onChange={(e) => {
									setDate({...date, from: (e.target as HTMLInputElement).value});
									setTimeout(() => mutate(), 1000);
								}}
							/>
							<EditIcon height="15" width="15"  colour="Black.default"/>
						</DatePicker>
					</DateStyle>

					<Flex  width="30px" height="30px" margin="0 4px" className="arrow">
						<LongArrowicon height="30" width="20" colour="Black.40"/>
					</Flex>

					<DateStyle justifyContent="space-between"   height="auto">
						<Bold fontFamily='regular'
							weight="400"
							lineHeight="24"
							size="14"
							colour={"Black.default"}
						>
							{`${formateDate(date.to).day}  ${formateDate(date.to).shortMonth} ${formateDate(date.to).date }, ${formateDate(date.to).year}` }
						</Bold>
						<DatePicker width="15px" height="15px">
							<input type="date" 
								min={getYYYYMMDD(new Date(date.from))}  
								onChange={(e) => {
									setDate({...date, to: (e.target as HTMLInputElement).value});
									setTimeout(() => mutate(), 1000);
								}}
							/>
							<EditIcon height="15" width="15" colour="Black.default"/>
						</DatePicker>
					</DateStyle>
				</Container1>
			</Flex>

		</MainContainer>
	
	);
};
export default DateFilter;



