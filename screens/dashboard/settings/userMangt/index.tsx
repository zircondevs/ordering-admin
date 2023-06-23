/* eslint-disable max-lines */

import React, {   useState }    from "react";
import { Bold, Flex,   Span, Table,   } from "../../../../components";
import {   HeaderSTyles,   Main,  } from "./styles";
import CustomButton from "../../../../components/Button";
import {  GeneralTableStyle } from "../../../../components/styles";
import { formatAMPM, formateDate } from "../../../../lib";
import { HandleScrollTypes } from "devs-react-component-library";
import AddUser from "./addUser";
import { EditIcon, LoaderIcon,   } from "../../../../public/assets/svg";
import {  useGetAdminRoles, useGetAdminUsers } from "../../../../hooks/useSettigs";
import { GenericObjTypes } from "../../../../constants/types";





const UserManagemnt = () => {
	const [modal, setModal] = useState({type: ""});
	const modalRef = React.useRef<HandleScrollTypes>(null); 

	const  { users, loading, mutate } = useGetAdminUsers();
	const { roles,   loading: loadingRoles} = useGetAdminRoles();


	const openModal = (obj: {[e: string]: any, type: string}) => {
		setModal(obj);
		modalRef.current && modalRef.current.preventBodyScroll();
	};

 
	const tableHead = ["name", "Date","Time", "Email","Position" , "Action" ];
	const tableBody = users?.data?.map((user: GenericObjTypes) => (
		{
			name: user?.fullname,
			date: `${formateDate(new Date(user?.createdAt)).date} ${formateDate(new Date(user?.createdAt)).shortMonth}, ${formateDate(new Date(user?.createdAt)).year}` ,
			time: `${formatAMPM(new Date(user?.createdAt))}`,
			amount:  user?.email,
			position: roles?.find((role: any) => role?._id === user?.position)?.roleName,
			action: 	(
				<Flex justifyContent="flex-start">
					{/* <Flex width="auto" height="auto" margin="0 8px 0 0" as="button">
						<TrashIcon colour="Error.default" height="20" width="20"/>
					</Flex> */}
					<Flex width="auto" height="auto" as="button" onClick={() => openModal({type: "editUser", ...user})}>
						<EditIcon colour="Grey.2" height="20" width="20"/>
					</Flex>
				</Flex>
			)
		}
	));
 
	return (
		<Main>
			<HeaderSTyles height="auto" justifyContent="space-between" margin='40px 0 40px'>
				<Bold fontFamily='ubuntuSemiBold' weight="700" lineHeight="24" size="18" colour={"Grey.2"}>
					User Information
				</Bold>
 
				<CustomButton
					size="14"
					activeColor={"Grey.1"}
					type="button"
					nonActiveBgColor="Black.20"
					borderRadius="8"
					pad="padding.smaller"
					text={ "Add New" }
					onClick={() => openModal({type: "addNew"})}
				/>
			</HeaderSTyles>

			{
				loading  || loadingRoles ?
					<Flex><LoaderIcon height="40" width="40"/></Flex>
					:
					tableBody?.length > 0 ?
						<GeneralTableStyle height="auto" justifyContent="flex-start">
							<Table
								gap={"0"}
								headBgColor="common.transparent"
								bodyColor="Grey.2"
								headColor="Grey.2"
								tableHead={tableHead}
								tableBodys={tableBody}
							/>
						</GeneralTableStyle>
						: 	
						<Flex margin="40px 0">
							<Span fontFamily='ubuntu' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
								There are no user  found here!.
							</Span>
						</Flex>
			}


			<AddUser   open={modal} setOpen={setModal} modalRef={modalRef} onDOne={mutate}  roles={roles} />

		</Main>
	);
};
export default UserManagemnt;
 
 