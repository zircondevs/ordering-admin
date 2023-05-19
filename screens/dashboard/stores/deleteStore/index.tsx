 

import React  from "react";
import {    TrashContainer,  } from "./styles";
import { Bold,        Flex,    Modal,    Span,   } from "../../../../components";
import { UseContext } from "../../../../state/provider";
import { Spacer } from "../../../../components/Spacer";
import CustomButton from "../../../../components/Button";
import { GenericObjTypes } from "../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import {  TrashIcon } from "../../../../public/assets/svg";
import { useDeleteStore } from "../../../../hooks/useStores";



interface  PropType {
	setOpen: React.Dispatch<React.SetStateAction<GenericObjTypes & {type: string}>>;
	open: GenericObjTypes;
	modalRef: React.RefObject<HandleScrollTypes>;
	onDOne: () => any
}

 



const DeleteStore = ({	open,modalRef, setOpen, onDOne} : PropType) => {

	const { setModal, } = UseContext();

	const { handleDeleteStore , loading } = useDeleteStore();

	const closeModal = () => {
		setOpen({type: ""});
		modalRef?.current?.addBodyScroll();
		setModal("");
		onDOne();
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
					<Bold fontFamily='quicksandMedium' weight="400" lineHeight="30" size="24" colour={"Error.default"}>
						Delete Store?
					</Bold>
					<Spacer height="16px"/>
					<Span fontFamily='quicksand' weight="700" lineHeight="19" size="16" colour={"Grey.3"}>
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
					isLoading={loading}
					onClick={ async () => {
						const res = await handleDeleteStore(open?.store?._id);
						res?.data && closeModal();
					}}
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

 
 
 