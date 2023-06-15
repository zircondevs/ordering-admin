/* eslint-disable no-unused-vars */




import { RightArrowIcon } from "../../public/assets/svg";
import { OverFlowScrollBar } from "../OverflowContainer/styles";
import PopUpModal, { PopUpRefType } from "../PopUpModal";
import { BtnStyle, DropdownStylws, Footer, IconStyles,  TimePickerStyles, Times, TimesValue,   } from "./styles";
import React, { useRef, useState } from "react";
 



 interface Proptypes {
	click: (e: any) => void
 }


const TimePicker = (props: Proptypes) => {
	const [value, setValue] = useState({
		hrs: 0,
		mins: 0,
		secs: 0
	});

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
					<span>{ `${hrs % 12 || 12}:${mins}:${secs}` } {hrs < 12 ? "AM" : "PM"}</span>
					<RightArrowIcon height={"15"} width={"15"} colour={"Grey.4"}/>
				</IconStyles>
			)}
		>
			<TimePickerStyles>
				<DropdownStylws  wrap="nowrap">
					<OverFlowScrollBar  directions="hidden auto">
						<Times>{Array.from({length: 23}).map((hr, idx) => (
							<BtnStyle active={idx + 1 === hrs} key={idx} onClick={() => handleOnChange( "hrs", idx)}>
								<TimesValue >{idx + 1}</TimesValue>
							</BtnStyle>
						))}</Times>
					</OverFlowScrollBar>

					<OverFlowScrollBar  directions="hidden auto">
						<Times>{Array.from({length: 59}).map((hr, idx) => (
							<BtnStyle active={idx  === mins} key={idx} onClick={() => handleOnChange( "mins", idx - 1)}>
								<TimesValue >{idx }</TimesValue>
							</BtnStyle>
						))}</Times>
					</OverFlowScrollBar>

					<OverFlowScrollBar  directions="hidden auto">
						<Times>{Array.from({length: 59}).map((hr, idx) => (
							<BtnStyle active={idx   === secs} key={idx} onClick={() =>  handleOnChange( "secs", idx - 1)}>
								<TimesValue >{idx  }</TimesValue>
							</BtnStyle>
						))}</Times>
					</OverFlowScrollBar>
				</DropdownStylws>


				<Footer 
					onClick={() =>{
						if( popUpRef?.current){
							popUpRef?.current.handleCloseModal();
						}
					}}
				>
					<button>OK</button>
				</Footer>
			</TimePickerStyles>

		</PopUpModal>
 
	);
};




export default TimePicker;