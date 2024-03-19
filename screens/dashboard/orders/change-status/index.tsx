 
import React   from "react";
import {  Container1, Footer, ModalContainer, } from "./styles";
import {   Dropdown, Flex,        Modal, Span,    } from "../../../../components";
import {   GenericObjTypes, StatusType } from "../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library"; 
import CustomButton from "../../../../components/Button";



interface  PropType {
	setModal: React.Dispatch<React.SetStateAction< GenericObjTypes & { type: string}>>;
	modal: GenericObjTypes & { type: string};
	modalRef: React.RefObject<HandleScrollTypes>;
}
 



const ChangeModalStatus = ({	setModal, modal ,modalRef,  } : PropType) => {

 

	const closeModal = () => {
		setModal({type: ""});
		modalRef?.current?.addBodyScroll();
	};

	
	const handleContinue = () => {
		closeModal();
	};

	
 
 

	return (
		<ModalContainer >
			<Modal
				show={modal.type === "CHANGE_ORDER_STATUS"}
				handleClose={() => closeModal()}
				innerRef={modalRef}
				direction={"right"}
				width={"400px"}
				// noHeader
				title={"Change Order Status"}
			>

				<Flex direction="column" wrap="nowrap" alignItems='stretch'>
 

					<Span as="label" fontFamily='medium' weight="400" lineHeight="21" size="14" colour={"Black.80"}>
						Select Status
					</Span>
					<Flex margin="10px 0 50px" justifyContent="flex-start">
						<Container1>
							<Dropdown
								weight="300"
								direction="start"
								colour="Black.80"
								dropColor="Black.80"
								dropHovColor="Black.default"
								hovBgColor="Black.20"
								searchField={false}
								initial="Select status"
								handleSelect={(selected: StatusType) => console.log(selected)}
								data={[
									{ displayedValue: "Processing",  returnedValue: "PROCESSING", dropdownValue: "Processing" }, 
									{ displayedValue: "Delivered",  returnedValue: "DELIVERED", dropdownValue: "Delivered" }, 
									{ displayedValue: "Opened",  returnedValue: "OPENED", dropdownValue: "Opened" }, 
									{ displayedValue: "On Delivery",  returnedValue: "ON DELIVERY", dropdownValue: "On Delivery" }, 
									{ displayedValue: "Cancelled",  returnedValue: "CANCELLED", dropdownValue: "Cancelled" }, 
								]}
							/>
						</Container1>
					</Flex>
 
 
 
					<Footer   >
						<CustomButton
							size="14"
							activeBgColor="Orange.default"
							activeBorderColor="Orange.default"
							activeColor={"common.white"}
							fullwidth
							type="button"
							nonActiveBgColor="Grey.5"
							nonActiveColor="Grey.3"
							borderRadius="0"
							text={ "Save"  }
							pad="padding.small"
							onClick={() =>   handleContinue() }
						/>
					</Footer>

				</Flex>
			</Modal>
		</ModalContainer>
	);
};
export default ChangeModalStatus;

 
 
 