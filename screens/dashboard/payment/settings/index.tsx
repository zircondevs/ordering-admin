 
import React, { useState }    from "react";
import { Bold,   Grid,  Span,   } from "../../../../components";
import {   AutomaticStyle, CheckStyles, Container1, HeaderSTyles,   IconStyle,   Main,  } from "./styles";
import CustomButton from "../../../../components/Button";
import { PRIMARY_COLOR } from "../../../../hooks/colors";
import { Spacer } from "../../../../components/Spacer";
import { Checkbox } from "../../../../components/CheckMark";
import { GeneralDivider, GeneralLabel } from "../../../../components/styles";
import { BankIcon, TrashIcon } from "../../../../public/assets/svg";
import AddBank from "./addBank";
import { HandleScrollTypes } from "devs-react-component-library";
import { UseContext } from "../../../../state/provider";
import { useGetBanks } from "../../../../hooks/usePayment";
import { useGetAdminGeneralSettings, useUpdateAccountSettings } from "../../../../hooks/useSettigs";
import AutomaticPayout from "./autoPayout";


 

const Settings = () => {
	const [modal, setModal] = useState({type: ""});
	const modalRef = React.useRef<HandleScrollTypes>(null); 
	const { state: { client }} = UseContext();
	const { mutate } = useGetAdminGeneralSettings();
	const { handleUpdateAccSettings , loading} = useUpdateAccountSettings();

	const {banks, loading: loadingBanks } = useGetBanks();


	const openModal = (obj: {[e: string]: any, type: string}) => {
		setModal(obj);
		modalRef.current && modalRef.current.preventBodyScroll();
	};
	const [paymentStructure, setPaymentStructure] = useState(client?.withdrawalProcessType ||  "MANUAL");
	

	const handleUpdate = async (type: string, interval?: string) => {
		setPaymentStructure(type);
		await handleUpdateAccSettings({withdrawalProcessType: type, withdrawalInterval: interval || ""});
		mutate();
		setPaymentStructure(client?.withdrawalProcessType);
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
				client?.companyDepositAccountName ?
					<Container1 justifyContent="flex-start">
						<IconStyle width="auto" margin="0 15px 0 0" bgColor="Grey.6">
							<BankIcon height="22" width="22"/>
						</IconStyle>
						<div>
							<Bold fontFamily='ubuntuMedium' weight="400" lineHeight="21" size="16" colour={"Grey.2"}>
								{banks?.find((_: {code: string}) => _?.code === client?.companyDepositBank)?.name}
							</Bold>
							<Spacer height="4px"/>
							<Span fontFamily='ubuntu' weight="400" lineHeight="16" size="12" colour={"Grey.3"}>
								*********{client?.companyDepositAccountNumber.substring(0, 3)}. {client?.companyDepositAccountName}
							</Span>
						</div>
						<IconStyle margin="0  0 0 15px" bgColor="Error.20" pointer onClick={() => openModal({type: "editBank"})}>
							<TrashIcon height="20" width="20" colour="Error.default"/>
						</IconStyle>
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
					<Spacer height="4px"/>
					<Span fontFamily='ubuntu' weight="400" lineHeight="16" size="12" colour={"Grey.3"}>
						Select a media type to upload
					</Span>
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
					<AutomaticStyle onClick={() =>  setModal({type: "withdrawalInterval"})} >
						<Bold fontFamily='ubuntu' weight="600" lineHeight="21" size="14" colour={"Orange.default"}>
							Setup automatic payout
						</Bold>
					</AutomaticStyle>
					: null
			}


			<AddBank  open={modal} setOpen={setModal} modalRef={modalRef} onDOne={mutate}  banks={banks} />
			<AutomaticPayout  open={modal} setOpen={setModal} modalRef={modalRef} onDOne={(e) => handleUpdate("AUTOMATED", e)}  loading={loading} />

 
		</Main>
	);
};
export default Settings;