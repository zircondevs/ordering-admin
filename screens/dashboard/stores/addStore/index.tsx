 

import React  from "react";
import {     Wrapper,  } from "./styles";
import {  Bold, Flex,   Modal,    Span,   } from "../../../../components";
import {  GeneralModalHeader, GeneralModalStyle,  ModalSpacer } from "../../../../components/styles";
import { GenericObjTypes } from "../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import { LongArrowicon } from "../../../../public/assets/svg";
import CreateStore from "../../../on-boarding/create-store";
import { Spacer } from "../../../../components/Spacer";



interface  PropType {
	setOpen: React.Dispatch<React.SetStateAction<GenericObjTypes & {type: string}>>;
	open: GenericObjTypes;
	modalRef: React.RefObject<HandleScrollTypes>;
	onDOne: () => any
}

 


const AddStore = ({	open,modalRef, setOpen,onDOne } : PropType) => {
	
	const closeModal = () => {
		setOpen({type: ""});
		modalRef?.current?.addBodyScroll();
		onDOne();
	};

	return (
		<GeneralModalStyle>
			<Modal
				show={open?.type === "add" || open?.type === "edit"}
				handleClose={() => closeModal()}
				innerRef={modalRef}
				direction={"right"}
				width={"500px"}
				noHeader
			>

				<Wrapper>
					<GeneralModalHeader>
						<button onClick={() => closeModal()}>
							<Flex height="auto" justifyContent="flex-start">
								<LongArrowicon width="20" height="20"/>
								<Span fontFamily='ubuntu' weight="700" lineHeight="16" size="14" colour={"Black.default"}>
									Go Back
								</Span>
							</Flex>
						</button>
					</GeneralModalHeader>


					<ModalSpacer direction="column" wrap="nowrap" alignItems='stretch'  margin="64px 0">
						<Flex height="auto"   margin="0 0 70px" direction="column" alignItems="flex-start">
							<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="40" size="36" colour={"Black.default"}>
								{open?.type === "edit" ? "Edit" : "Create"} Store
							</Bold>
							<Spacer height="16px"/>
							<Span fontFamily='ubuntu' weight="700" lineHeight="19" size="16" colour={"Grey.2"}>
							Create a new store location for your business
							</Span>
						</Flex>

						<CreateStore 
							onDone={closeModal}
							store={{
								name: open?.store?.name ||  "" ,
								address:  open?.store?.address ||   "",
								state:  open?.store?.state || "",
								customerCareLine:  open?.store?.customerCareLine || "",
								dialCode: open?.store?.dialCode || "",
								_id: open?.store?._id,
								type: open.type
							}}
						/>
					</ModalSpacer>
				</Wrapper>
			</Modal>
		</GeneralModalStyle>
	);
};
export default AddStore;

 
 
 