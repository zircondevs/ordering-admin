 
import React   from "react";
import {   Footer , ModalStyle, TabStyles,  } from "./styles";
import { Bold, Flex,     Modal,    } from "../../../../components";
import CustomButton from "../../../../components/Button";
import TotalCard from "./breakdownSummary";
import { GeneralModalHeader } from "../../../../components/styles";
import {   GenericObjTypes } from "../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import { useGetOrder } from "../../../../hooks/useOrders";
import Address from "./address";
import { LoaderIcon } from "../../../../public/assets/svg";
import { useGetetUserRoleModule } from "../../../../hooks/handlers/useRole";



interface  PropType {
	setSingleOrder: React.Dispatch<React.SetStateAction<GenericObjTypes>>;
	singleOrder: GenericObjTypes;
	modalRef: React.RefObject<HandleScrollTypes>;
}
 



const ViewOrderDetails = ({	setSingleOrder, singleOrder ,modalRef,  } : PropType) => {



	const { order, loading  } = useGetOrder(singleOrder?._id);
	const {EDIT} = useGetetUserRoleModule( "orders");

	const closeModal = () => {
		setSingleOrder({});
		modalRef?.current?.addBodyScroll();
	};

	
	const handleContinue = () => {
		console.log("sas");
	};

 
 

	return (
		<ModalStyle >
			<Modal
				show={singleOrder?._id?.length > 0}
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
								<Address  {...{order, ...singleOrder}}  />
								<TotalCard  {...{order}} />
							</TabStyles>
					}
 
					{
						EDIT ?
							<Footer>
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
									text={ "Continue"  }
									onClick={() =>   handleContinue() }
								/>
							</Footer>
							: null
					}

				</Flex>
			</Modal>
		</ModalStyle>
	);
};
export default ViewOrderDetails;

 
 
 