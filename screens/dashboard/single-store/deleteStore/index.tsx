 

import React  from "react";
import {    TrashContainer,  } from "./styles";
import { Bold,        Flex,    Modal,    Span,   } from "../../../../components";
import { Spacer } from "../../../../components/Spacer";
import CustomButton from "../../../../components/Button";
import { GenericObjTypes } from "../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import {  TrashIcon } from "../../../../public/assets/svg";



interface  PropType {
	setOpen: React.Dispatch<React.SetStateAction<GenericObjTypes & {type: string}>>;
	open: GenericObjTypes;
	modalRef: React.RefObject<HandleScrollTypes>;
}

 



const DeleteStore = ({	open,modalRef, setOpen, } : PropType) => {


	
	const closeModal = () => {
		setOpen({type: ""});
		modalRef?.current?.addBodyScroll();
	};
	
 


	return (
		<Modal
			show={open?.type === "delete"}
			handleClose={() => closeModal()}
			innerRef={modalRef}
			direction={"up"}
			width={"400px"}
			noHeader
			noCancel
		> 
			<Flex direction="column" wrap="nowrap" >
				<TrashContainer width="145px" height="145px">
					<TrashIcon height="50" width="50" colour="Error.default"/>
				</TrashContainer>

				<Flex height="auto"   margin="40px 0 24px" direction="column" >
					<Bold fontFamily='medium' weight="400" lineHeight="30" size="24" colour={"Error.default"}>
						Delete Store?
					</Bold>
					<Spacer height="16px"/>
					<Span fontFamily='regular' weight="700" lineHeight="19" size="16" colour={"Grey.3"}>
						You are about to remove this store
					</Span>
				</Flex>

				<CustomButton
					size="14"
					activeBgColor="Error.default"
					activeBorderColor="Error.default"
					activeColor={"common.white"}
					fullwidth
					type="submit"
					nonActiveBgColor="Black.20"
					text={  "Delete"  }
				/>
				<Spacer height="16px"/>
				<CustomButton
					size="14"
					activeBgColor="common.transparent"
					activeBorderColor="common.transparent"
					activeColor={"Grey.1"}
					type="submit"
					nonActiveBgColor="Black.20"
					pad="padding.smallest"
					text={  "Cancel  "  }
				/>


			</Flex>
		</Modal>
	);
};
export default DeleteStore;

 
 
 