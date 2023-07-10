 
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


 



const Settings = () => {
	const [modal, setModal] = useState({type: ""});
	const modalRef = React.useRef<HandleScrollTypes>(null); 
	const { state: { client }} = UseContext();
	
	const {banks, loading: loadingBanks } = useGetBanks();


	const openModal = (obj: {[e: string]: any, type: string}) => {
		setModal(obj);
		modalRef.current && modalRef.current.preventBodyScroll();
	};
	const [paymentStructure, setPaymentStructure] = useState("Manual");
	
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
						<IconStyle margin="0  0 0 15px" bgColor="Error.20">
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
						<Checkbox checked={paymentStructure === "Manual"}  onClick={() => setPaymentStructure("Manual")} type="radio"/>
						<GeneralLabel>Manual</GeneralLabel>
					</CheckStyles>
					<CheckStyles height="auto" width="auto"  justifyContent="flex-start">
						<Checkbox checked={paymentStructure === "Automatic"} onClick={() =>  setPaymentStructure("Automatic")} type="radio"/>
						<GeneralLabel>Automatic</GeneralLabel>
					</CheckStyles>
				</Grid>
			</Container1>

			<Spacer height="20px"/>

			<AutomaticStyle>
				<Bold fontFamily='ubuntu' weight="600" lineHeight="21" size="14" colour={"Orange.default"}>
					Setup automatic payout
				</Bold>
			</AutomaticStyle>

			{/* <CustomButton
				size="14"
				activeColor={"common.white"}
				activeBorderColor={"common.white"}
				type="submit"
				nonActiveBgColor="Black.20"
				borderRadius="8"
				bgColour={PRIMARY_COLOR[0]}
				text={"Add Changes" }
			/> */}
			<AddBank  open={modal} setOpen={setModal} modalRef={modalRef} onDOne={() => []}  banks={banks} />

 
		</Main>
	);
};
export default Settings;
 
 