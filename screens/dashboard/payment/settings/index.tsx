/* eslint-disable max-lines */
 
import React, { useState }    from "react";
import { Bold,   Grid,  Span,   } from "../../../../components";
import {     CheckStyles, Container1, HeaderSTyles,   IconStyle,   Main,  } from "./styles";
import CustomButton from "../../../../components/Button";
import { PRIMARY_COLOR } from "../../../../hooks/colors";
import { Spacer } from "../../../../components/Spacer";
import { Checkbox } from "../../../../components/CheckMark";
import { GeneralDivider, GeneralLabel } from "../../../../components/styles";
import { BankIcon, EditIcon, LoaderIcon, TrashIcon,  } from "../../../../public/assets/svg";
import AddBank from "./addBank";
import { HandleScrollTypes } from "devs-react-component-library";
import { UseContext } from "../../../../state/provider";
import { useGetBanks } from "../../../../hooks/usePayment";
import { useGetAdminGeneralSettings, useUpdateAccountSettings } from "../../../../hooks/useSettigs";
import AutomaticPayout from "./autoPayout";
import { useGetetUserRoleModule } from "../../../../hooks/handlers/useRole";
import DeleteModal from "../../../../components/DeleteModal";
import Tooltip from "../../../../components/Tooltip";
import { singleSpace } from "../../../../lib";


 

const Settings = () => {
	const [modal, setModal] = useState({type: ""});
	const modalRef = React.useRef<HandleScrollTypes>(null); 
	const { state: { client }} = UseContext();
	const { mutate } = useGetAdminGeneralSettings();
	const { handleUpdateAccSettings , loading} = useUpdateAccountSettings();
	const {EDIT, DELETE } = useGetetUserRoleModule( "payment");
	const {banks, loading: loadingBanks } = useGetBanks();


	const openModal = (obj: {[e: string]: any, type: string}) => {
		setModal(obj);
		modalRef.current && modalRef.current.preventBodyScroll();
	};
	const [paymentStructure, setPaymentStructure] = useState(client?.withdrawalProcessType ||  "MANUAL");
	
	const handleUpdate = async (type: string, interval?: string) => {
		setPaymentStructure(type);
		await handleUpdateAccSettings({withdrawalProcessType: type, ...(interval && {withdrawalInterval: interval  })});
		const res = await mutate();
		setPaymentStructure(res?.data?.data?.withdrawalProcessType);
	};

	return (
		<Main>
			<HeaderSTyles height="auto" justifyContent="space-between" margin='40px 0 40px'>
				<Bold fontFamily='ubuntuMeduim' weight="700" lineHeight="24" size="18" colour={"Grey.1"}>
					Withdrawal Accounts
				</Bold>
				<Spacer height="4px"/>
				<Span fontFamily='ubuntu' weight="400" lineHeight="24" size="14" colour={"Grey.3"}>
					Setup account to withdraw funds  after sales
				</Span>
			</HeaderSTyles>

			{
				loadingBanks ?
					<LoaderIcon  height="30" width="30" colour="Black.40"/>
					:client?.companyDepositAccountName ?
						<Container1 justifyContent="flex-start">
							<IconStyle width="auto" margin="0 15px 0 0" >
								<BankIcon height="22" width="22"/>
							</IconStyle>
							<div>
								<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="21" size="16" colour={"Grey.2"}>
									{ client?.companyDepositBank}
								</Bold>
								<Spacer height="4px"/>
								<Span fontFamily='ubuntu' weight="400" lineHeight="16" size="12" colour={"Grey.3"}>
									*********{client?.companyDepositAccountNumber.substring(0, 3)}. {client?.companyDepositAccountName}
								</Span>
							</div>
							{
								EDIT ?
									<Tooltip message={"Edit bank details"} top="-20px">
										<IconStyle margin="0  0 0 15px" bgColor="Black.20" pointer onClick={() => openModal({type: "editBank"})}>
											<EditIcon height="20" width="20" colour="Black.80"/>
										</IconStyle>
									</Tooltip>
									: null
							}
							{
								DELETE ?
									<Tooltip message={"Delete bank details"} top="-20px">
										<IconStyle margin="0  0 0 15px" bgColor="Error.20" pointer onClick={() => setModal({type: "deleteBank"})}>
											<TrashIcon height="20" width="20" colour="Error.default"/>
										</IconStyle>
									</Tooltip>
									: null
							}
						</Container1>
						:
						loadingBanks || !(banks?.length > 0) ? null :
							<CustomButton
								size="14"
								activeBgColor={"common.white"}
								type="submit"
								borderRadius="8"
								pad="padding.smaller"
								bodColour={PRIMARY_COLOR[0]}
								txtColour={PRIMARY_COLOR[0]}
								text={"Add Bank" }
								onClick={() => openModal({type: "addBank"})}
							/>
			}


			

			<Spacer height="30px"/>





			<GeneralDivider />

			<Spacer height="30px"/>

			<Container1 justifyContent="flex-start"   >
				<div>
					<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="21" size="16" colour={"Grey.2"}>
						Payout Structure
					</Bold>
				</div>

				<Grid gap="20px" columns="repeat(auto-fit, minmax(110px, 120px))" className="checkbox">
					<CheckStyles height="auto" width="auto"   justifyContent="flex-start" >
						<Checkbox checked={paymentStructure === "MANUAL"}  
							onClick={  () => paymentStructure === "MANUAL" ? [] :  handleUpdate("MANUAL")} 
							type="radio"
						/>
						<GeneralLabel>Manual</GeneralLabel>
					</CheckStyles>
					<CheckStyles height="auto" width="auto"  justifyContent="flex-start">
						<Checkbox checked={paymentStructure === "AUTOMATED"} 
							onClick={() => paymentStructure === "AUTOMATED" ? [] :  setModal({type: "withdrawalInterval"})} 
							type="radio"
						/>
						<GeneralLabel>Automated</GeneralLabel>
					</CheckStyles>
				</Grid>
			</Container1>

			<Spacer height="20px"/>


			{
				client?.withdrawalProcessType === "AUTOMATED" ?
					<Container1  justifyContent="flex-start"  >
						<div>
							<Span fontFamily='ubuntu' weight="400" lineHeight="16" size="12" colour={"Grey.3"}>
								Widthdrawal interval:
							</Span>
							{singleSpace()}
							<Bold fontFamily='ubuntu' weight="600" lineHeight="21" size="14" colour={"Orange.default"}>
								{client?.withdrawalInterval}
							</Bold>
						</div>

						<Tooltip message={"Change withdrawal interval"} top="-20px">
							<button onClick={() =>  setModal({type: "withdrawalInterval"})}>

								<IconStyle margin="0  0 0 15px" bgColor="Black.20" pointer onClick={() => openModal({type: "editBank"})}>
									<EditIcon height="20" width="20" colour="Black.80"/>
								</IconStyle>
							</button>
						</Tooltip>
					</Container1>
					: null
			}


			<AddBank  open={modal} setOpen={setModal} modalRef={modalRef} onDOne={mutate}  banks={banks} />
			<AutomaticPayout  
				open={modal} setOpen={setModal} modalRef={modalRef} 
				onDOne={(e) => handleUpdate("AUTOMATED", e)}  
				loading={loading} 
			/>
			<DeleteModal 
				state={modal.type === "deleteBank"} 
				setState={setModal} 
				initial={{type: ""}}
				modalRef={modalRef}   
				title="Delete Bank Details"
				loading={loading} 
				onSubmit={() => {
					handleUpdateAccSettings({ companyDepositBank: "", companyDepositAccountNumber: "", withdrawalInterval: "", withdrawalProcessType: ""});
				}}
			/>

 
		</Main>
	);
};
export default Settings;