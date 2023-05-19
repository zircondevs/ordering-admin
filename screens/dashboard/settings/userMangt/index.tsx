/* eslint-disable max-lines */

import React, {   useState }    from "react";
import { Bold, Flex,   Span, Table,   } from "../../../../components";
import {   HeaderSTyles,   Main,  } from "./styles";
import CustomButton from "../../../../components/Button";
import {  GeneralTableStyle } from "../../../../components/styles";
import { formatAMPM, formateDate } from "../../../../lib";
import { HandleScrollTypes } from "devs-react-component-library";
import AddUser from "./addUser";
import { EditIcon, TrashIcon } from "../../../../public/assets/svg";





const UserManagemnt = () => {
	const [modal, setModal] = useState({type: ""});
	const modalRef = React.useRef<HandleScrollTypes>(null); 

 

	const openModal = (obj: {[e: string]: any, type: string}) => {
		setModal(obj);
		modalRef.current && modalRef.current.preventBodyScroll();
	};

	const status = {
		pending:  ["Blue.dark.20", "Blue.dark" ],
		failed:  ["Error.20", "Error.default" ],
		success: ["Success.20", "Success.default" ],
	};
	const tableHead = ["Date","Time", "Amount", "Status", "Action"];
	const tableBody = [
		{
			date: `${formateDate(new Date()).date} ${formateDate(new Date()).shortMonth}, ${formateDate(new Date()).year}` ,
			time: `${formatAMPM(new Date())}`,
			amount:  "sda",
			status: <Flex bgColor={status["failed"][0]} width="max-content" pad="3px 8px" margin="0">
				<Span fontFamily='quicksand' weight="400" lineHeight="19" size="12" colour={status["pending"][1]}>
					failed
				</Span>
			</Flex>,
			action: 	(
				<Flex justifyContent="flex-start">
					<Flex width="auto" height="auto" margin="0 8px 0 0" as="button">
						<TrashIcon colour="Error.default" height="20" width="20"/>
					</Flex>
					<Flex width="auto" height="auto" as="button">
						<EditIcon colour="Grey.2" height="20" width="20"/>
					</Flex>
				</Flex>
			)
		},
	];
 
	return (
		<Main>
			<HeaderSTyles height="auto" justifyContent="space-between" margin='40px 0 40px'>
				<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="24" size="18" colour={"Black.80"}>
					Update Information
				</Bold>
 
				<CustomButton
					size="14"
					activeColor={"Grey.1"}
					type="button"
					nonActiveBgColor="Black.20"
					borderRadius="8"
					text={ "Add New" }
					onClick={() => openModal({type: "addNew"})}
				/>
			</HeaderSTyles>

			<GeneralTableStyle height="auto" justifyContent="flex-start">
				<Table
					gap={"0"}
					headBgColor="common.transparent"
					bodyColor="Black.80"
					headColor="Black.60"
					tableHead={tableHead}
					tableBodys={tableBody}
				/>
			</GeneralTableStyle>


			<AddUser   open={modal} setOpen={setModal} modalRef={modalRef} onDOne={() => []}  />

		</Main>
	);
};
export default UserManagemnt;
 
 