 
import React   from "react";
import {   ModalStyle, TabStyles,  } from "./styles";
import { Bold, Flex,     Modal,    } from "../../../../../components";
import TotalCard from "./breakdownSummary";
import { GeneralModalHeader } from "../../../../../components/styles";
import {   GenericObjTypes } from "../../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import { useGetOrder } from "../../../../../hooks/useOrders";
import Address from "./address";
import { LoaderIcon } from "../../../../../public/assets/svg"; 



interface  PropType {
	setModal: React.Dispatch<React.SetStateAction< GenericObjTypes & { type: string}>>;
	modal: GenericObjTypes & { type: string};
	modalRef: React.RefObject<HandleScrollTypes>;
}
 



const ViewOrderDetails = ({	setModal, modal ,modalRef,  } : PropType) => {



	const { order, loading  } = useGetOrder(modal?.order?._id);
 

	const closeModal = () => {
		setModal({type: ""});
		modalRef?.current?.addBodyScroll();
	};

  

	return (
		<ModalStyle >
			<Modal
				show={modal.type === "VIEW_ORDER"}
				handleClose={() => closeModal()}
				innerRef={modalRef}
				direction={"right"}
				width={"600px"}
				noHeader
			>

				<Flex direction="column" wrap="nowrap" alignItems='stretch'>

					<GeneralModalHeader>
						<Flex height="auto" justifyContent="space-between" margin="0 0">
							<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="32" size="28" colour={"Black.default"}>
								View Order Details
							</Bold>
						</Flex>
					</GeneralModalHeader>
					
					{
						loading ?
							<Flex height="auto"><LoaderIcon height="40" width="40"/></Flex>
							:
							<TabStyles id="SUMMARY" justifyContent='flex-start'>
								<Address order={{...order, ...modal.order}}  />
								<TotalCard  order={order} />
							</TabStyles>
					}

				</Flex>
			</Modal>
		</ModalStyle>
	);
};
export default ViewOrderDetails;

 
 
 