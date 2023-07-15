

import React   from "react";
import {    Main,     } from "./styles";
import { Bold,    Flex,  Modal,     } from "../../../../components";
import {  GeneralModalHeader, GeneralModalStyle,  ModalSpacer } from "../../../../components/styles";
import { GenericObjTypes } from "../../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import CreateProduct from "../../../on-boarding/create-product";



interface  PropType {
	setOpen: React.Dispatch<React.SetStateAction<GenericObjTypes & {type: string}>>;
	open: {type: string, [e: string]: any };
	modalRef: React.RefObject<HandleScrollTypes>;
	onDOne: () => any;
	categories: GenericObjTypes[]
}

 



const AddProduct = ({	open,modalRef, setOpen,onDOne,   categories } : PropType) => {
	
	const closeModal = () => {
		setOpen({type: ""});
		modalRef?.current?.addBodyScroll();
		onDOne();
	};


	
 
	return (
		<GeneralModalStyle>
			<Modal
				show={open?.type === "addProduct" || open.type === "editProduct"}
				handleClose={() => closeModal()}
				innerRef={modalRef}
				direction={"right"}
				width={"700px"}
				noHeader
			>
				<Main>

					<GeneralModalHeader>
						<Flex height="auto"   margin="0 0 0px" direction="column" alignItems="flex-start">
							<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="40" size="36" colour={"Black.default"}>
								{ open?.type === "addProduct"  ? "Add ": "Update "}  Product
							</Bold>
						</Flex>
					</GeneralModalHeader>



					<ModalSpacer direction="column" wrap="nowrap" alignItems='stretch'  margin="20px 0 64px">

						<CreateProduct 
							onDone={closeModal}
							categories={categories as {name: string, _id: string}[]}
							product={{
								name: open?.name ||  "" ,
								description: open?.description ||  "" ,
								quantity: open?.quantity ||  "" ,
								category:  {_id: open?.category?._id , name: open?.category?.name },
								amount: open?.amount ||  "" ,
								productImage: open?.productImage ||  [] ,
								type: open?.type as "addProduct" | "editProduct",
								isAvailable: open.isAvailable,
								_id: open?._id
							}}
						/>
					</ModalSpacer>
				</Main>

			</Modal>
		</GeneralModalStyle>
	);
};
export default AddProduct;
