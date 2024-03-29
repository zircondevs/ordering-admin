/* eslint-disable no-unused-vars */




 
import { LongArrowicon, RightArrowIcon } from "../../public/assets/svg";
import { OverFlowScrollBar } from "../OverflowContainer/styles";
import PopUpModal, { PopUpRefType } from "../PopUpModal";
import { BtnStyle, Container1, DropdownStylws, Footer, IconStyles,  TimeName,  TimePickerStyles, Times, TimesValue,   } from "./styles";
import React, { useEffect, useRef, useState } from "react";
 



 interface Proptypes {
	click: (e: any) => void
	defaultValue?: {
		hrs?: number,
		mins?: number,
		secs?: number
	}
 }


const addLeadingZeros = (value: number) =>  (value).toString().padStart(2, "0");

const TimePicker = (props: Proptypes) => {
	const [value, setValue] = useState({
		hrs: 0,
		mins: 0,
		secs: 0
	});


	useEffect(() => {
		props?.defaultValue && setValue({...value, ...props.defaultValue});
	}, [props?.defaultValue?.hrs, props?.defaultValue?.mins, props?.defaultValue?.secs]);


	const {hrs, mins, secs} = value;
	const popUpRef = useRef<PopUpRefType>(null);


	const handleOnChange = (name: string, index: number) => {
		setValue({...value, [name]: index + 1});
		props.click && props.click({...value, [name]: index + 1});
	};


	return (

		<PopUpModal
			top={30}
			ref={popUpRef}
			icon={(
				<IconStyles  wrap="nowrap" justifyContent="space-between">
					<span>{ `${addLeadingZeros(hrs % 12 || 12)}:${addLeadingZeros(mins)}` } {hrs < 12 ? "AM" : "PM"}</span>
					<RightArrowIcon height={"13"} width={"13"} colour={"Grey.4"}/>
				</IconStyles>
			)}
		>
			<TimePickerStyles>
				<DropdownStylws  wrap="nowrap">
					<Container1>
						<TimeName>Hrs
							<LongArrowicon colour="Grey.3" height="13" width="13"/>
						</TimeName>
						<OverFlowScrollBar  directions="hidden auto">
							<Times>{Array.from({length: 23}).map((hr, idx) => (
								<BtnStyle type="button" active={idx + 1 === hrs} key={idx} onClick={() => handleOnChange( "hrs", idx)}>
									<TimesValue >{idx + 1}</TimesValue>
								</BtnStyle>
							))}</Times>
						</OverFlowScrollBar>
					</Container1>
					
					<Container1>
						<TimeName>Mins
							<LongArrowicon colour="Grey.3" height="13" width="13"/>
						</TimeName>
						<OverFlowScrollBar  directions="hidden auto">
							<Times>{Array.from({length: 59}).map((hr, idx) => (
								<BtnStyle type="button" active={idx  === mins} key={idx} onClick={() => handleOnChange( "mins", idx - 1)}>
									<TimesValue >{idx }</TimesValue>
								</BtnStyle>
							))}</Times>
						</OverFlowScrollBar>
					</Container1>

					<Container1>
						<TimeName>Secs
							<LongArrowicon colour="Grey.3" height="13" width="13"/>
						</TimeName>
						<OverFlowScrollBar  directions="hidden auto">
							<Times>{Array.from({length: 59}).map((hr, idx) => (
								<BtnStyle type="button" active={idx   === secs} key={idx} onClick={() =>  handleOnChange( "secs", idx - 1)}>
									<TimesValue >{idx }</TimesValue>
								</BtnStyle>
							))}</Times>
						</OverFlowScrollBar>
					</Container1>
				</DropdownStylws>


				<Footer 
					onClick={() =>{
						if( popUpRef?.current){
							popUpRef?.current.handleCloseModal();
						}
					}}
				>
					<button type="button">OK</button>
				</Footer>
			</TimePickerStyles>

		</PopUpModal>
 
	);
};




export default TimePicker;