

import React, { useState }   from "react";
import { Bold,   Tabs,  } from "../../../components";
import {     HeaderSTyles,   Main,  TabsStyles,      } from "./styles";
import {  GeneralTabStyle } from "../../../components/styles";
import {   PlusIcon, } from "../../../public/assets/svg";
import CustomButton from "../../../components/Button";
import { PRIMARY_COLOR } from "../../../hooks/colors";
import AddStore from "./addStore";
import { HandleScrollTypes } from "devs-react-component-library";
import DeleteStore from "./deleteStore";
import { useGetStores } from "../../../hooks/useStores";
import AllStores from "./all-stores";
import StoreSettings from "./store-settings";
 
const Stores = () => {
	const { stores , loading, mutate  } = useGetStores();
	const [modal, setModal] = useState({type: ""});
	const modalRef = React.useRef<HandleScrollTypes>(null); 

	

	const openModal = (obj: {[e: string]: any, type: string}) => {
		setModal(obj);
		modalRef.current && modalRef.current.preventBodyScroll();
	};

 
	const tabData = [
		{
			head: "All Stores",
			body: <AllStores {...{openModal, stores, loading}} />,
			key: "Account Information"
		},
		{
			head: "Store Settings",
			body:  <StoreSettings />,
			key: "User Management"
		},
	];
	
 
 

	return (
		<Main>

			<HeaderSTyles height="auto" justifyContent="space-between">
				<Bold fontFamily='ubuntuSemiBold' weight="700" lineHeight="28" size="24" colour={"Grey.2"}>
					Stores
				</Bold>
				<CustomButton
					size="14"
					type="button"
					pad="padding.smaller"
					text={  "Add Store"}
					activeBorderColor="Grey.3"
					bgColour={PRIMARY_COLOR[0]}
					bodColour={PRIMARY_COLOR[0]}
					activeColor={"common.white"}
					onClick={() =>   openModal({type: "add"}) }
					icon={<PlusIcon colour="common.white" height="15px" width="15px"/>}
				/>
			</HeaderSTyles>


			<TabsStyles>
				<GeneralTabStyle>
					<Tabs
						nonActiveColor="Grey.4"
						activeColor="grey.2"
						click={() => []}
						data={tabData}
					/>
				</GeneralTabStyle>
			</TabsStyles>

		
			<DeleteStore  open={modal} setOpen={setModal} modalRef={modalRef} onDOne={mutate} />
			<AddStore  open={modal} setOpen={setModal} modalRef={modalRef} onDOne={mutate}  />

		</Main>
	);
};
export default Stores;
