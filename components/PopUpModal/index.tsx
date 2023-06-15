
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import {  DotsIcon } from "../../public/assets/svg";
import { Content, Wrapper } from "./styles";


export type PopUpRefType = {
	handleCloseModal: () => void,
}

 
interface InitialType {
	x: number,
	y: number,
	width: number,
	height: number,
}
interface PropsType {
	children: JSX.Element,
	icon?: JSX.Element | number | string,
	innerRef?: React.Ref<PopUpRefType>
	top?: number
}

const initial: InitialType = {
	x: 0,
	y: 0,
	width: 0,
	height: 0
};

const PopUpModal:React.ForwardRefRenderFunction<PopUpRefType, PropsType>  = (props: PropsType, forwardedRef) => {
	const { icon, children, top = 0 } = props;
	const [openModal, setOpenModal] = useState<boolean>(false);
	// holds getBoundingClientRect details of the clicked icon
	const [targetDimensions, setTargetDimensions] = useState<InitialType>(initial);
	// holds getBoundingClientRect details of the popup section icon
	const [childrenDimension, setChildrenDimension] = useState<InitialType>(initial);
	const childrenRef = useRef<HTMLDivElement>(null);
	const containerRef = React.createRef<HTMLDivElement>();

	
	const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
		setOpenModal(!openModal);
		const target = e.target as HTMLButtonElement;
		setTargetDimensions(target.getBoundingClientRect());
	};

	
	const handleCloseModal = () => {
		setOpenModal(false);
		setTargetDimensions(initial);
	};
    

	useImperativeHandle(forwardedRef, () => ({
		handleCloseModal: () =>  handleCloseModal() 
	}));


	useEffect(() => {
		if( childrenRef.current ) {
			setChildrenDimension(childrenRef.current.getBoundingClientRect());
		}
	}, [ targetDimensions.width, openModal ]);

	return (
		<Wrapper className={"wrapper"} ref={containerRef}>
			<button className={"layout"} onClick={(e) =>  handleOpenModal(e)} >
				{ icon || <DotsIcon width="3" height="16" />}
			</button>

			<div >
				{
					openModal && 
						<>
							<div className={"overlay"} onClick={() =>  handleCloseModal()} />
							<Content 
								className="popUp-Content"
								ref={childrenRef}
								style={{
									top: getVerticalPosition(targetDimensions.y, childrenDimension.height, top),
									left: getHorizontalPosition(targetDimensions.x, childrenDimension.width)
								}}
							>
								{children}
							</Content>
						</>
				}
			</div>

		</Wrapper>
	);
};

PopUpModal.displayName = "PopUpModal";

 
export default React.forwardRef(PopUpModal);

 

const getVerticalPosition = (targetYPosition: number, childrenHeight: number, top: number) => {
	const browserViewHiehgt = document.documentElement.clientHeight;
	return (targetYPosition + top + childrenHeight  > browserViewHiehgt) ?
		(targetYPosition  - (targetYPosition  + childrenHeight - browserViewHiehgt))
		: targetYPosition + top;
	// return (targetYPosition + childrenHeight  > browserViewHiehgt) ?
	// 	(targetYPosition  - (targetYPosition +  childrenHeight - browserViewHiehgt))
	// 	: targetYPosition ;
};

const getHorizontalPosition = (targetXPosition: number, childrenWidth: number) => {
	const browserViewWidth = document.documentElement.clientWidth;
	return (targetXPosition + childrenWidth  > browserViewWidth) ?
		(targetXPosition  - (targetXPosition +  childrenWidth - browserViewWidth))
		: targetXPosition;
};
