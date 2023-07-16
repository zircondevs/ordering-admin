/* eslint-disable max-lines */

import React, {   useState }    from "react";
import {  Bold, Dropdown,  Grid,   Span,  } from "../../../../components";
import {   Card, Card2, ControlHead, Controls, HeaderSTyles,   Main, SelectControlStyle,  } from "./styles";
import CustomButton from "../../../../components/Button";
import { HandleScrollTypes } from "devs-react-component-library";
// import AddUser from "./addUser";
import { Check2Icon,   } from "../../../../public/assets/svg";
// import {  useGetAdminRoles, useGetAdminUsers } from "../../../../hooks/useSettigs";
import { Spacer } from "../../../../components/Spacer";





const UserManagemnt = () => {
	const [ , setModal] = useState({type: ""});
	const [hidden, setHidden] = useState<number[]>([]);
	const modalRef = React.useRef<HandleScrollTypes>(null); 


	// const  { users, loading, mutate } = useGetAdminUsers();
	// const { roles,   loading: loadingRoles} = useGetAdminRoles();


	const openModal = (obj: {[e: string]: any, type: string}) => {
		setModal(obj);
		modalRef.current && modalRef.current.preventBodyScroll();
	};

 
	const controls = ["Payment", "Orders", "Transactions", "Customers", "Loyalty Rewards", "Stores", "Products", "Settings"];
	const options = [
		{
			role: "Manager",
			name: "Chinedu",
			email: "chenedu@gmail.com",
		},
		{
			role: "Manager",
			name: "Jude Okoro",
			email: "Okoro@gmail.com",
			controls: [
				{
					control: "Payment",
					type: "edit",
				},
				{
					control: "Transactions",
					type: "view",
				},
				{
					control: "Transactions",
					type: "view",
				},
			]
		},
	];
	const Controls2 = [
		{ name: "View", color: "Yellow.default" },
		{ name: "Edit", color: "Grey.2" },
		{ name: "Remove access", color: "Error.default" },
	];

	
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
					text={ "Add New User" }
					onClick={() => openModal({type: "addNew"})}
				/>
			</HeaderSTyles>


 
			<Grid gap="40px">
				{
					options?.map((option, idx) => (
						<Card key={option?.email}>
							<ControlHead height="auto" justifyContent="space-between">
								<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="16" colour={"Grey.2"}>
									{option.name} - {option.role}
								</Span>
								<button onClick={() => hidden.includes(idx) ? setHidden(hidden.filter(_ => _ !== idx)) : setHidden([...hidden, idx])}>
									<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="14" colour={"Orange.default"}>
										{ hidden.includes(idx) ? "Open" : "Collapse" }
									</Span>
								</button>
							</ControlHead>
							{
								hidden.includes(idx) ? null :
									<>
										<Controls>
											<Span fontFamily='ubuntu' weight="400" lineHeight="21" size="14" colour={"Orange.default"}>
												Dashboard Controls
											</Span>
										</Controls>
										<Grid gap="0 16px" columns="repeat(auto-fit, minmax(360px, 1fr))">
											{
												controls?.map(control => (
													<Card2 key={control} justifyContent="space-between">
														<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="14" colour={"Grey.2"}>
															<Check2Icon colour="Grey.2" width="12" height="12"/>
															{control}
														</Span>
														<SelectControlStyle width="auto" height="auto" justifyContent="flex-end" className="View">
															<Dropdown
																weight='600'
																colour='Grey.2'
																hovBgColor='Black.10'
																dropHovColor='Grey.2'
																dropColor='Grey.2'
																direction='end'
																searchField={false}
																clearSelected
																initial={ "View"}
																data={Controls2?.map(_ => ({
																	returnedValue: _.name,
																	displayedValue: _.name,
																	dropdownValue: _.name,
																}))}
																handleSelect={(e: string) => console.log("position", e)}
															/>
														</SelectControlStyle>
													</Card2>
												))
											}
										</Grid>
									</>
							}
						</Card>
					))
				}  
			</Grid>

			
			<Spacer height="30px"/>
			<CustomButton
				size="14"
				type="submit"
				nonActiveBgColor="Black.20"
				borderRadius="8"
				activeBgColor="Orange.default"
				activeBorderColor="Orange.default"
				activeColor="common.white"
				text={  "Save Changes"}
				pad="padding.smaller"
			/>
			{/* <AddUser   open={modal} setOpen={setModal} modalRef={modalRef} onDOne={mutate}  roles={roles} /> */}

		</Main>
	);
};
export default UserManagemnt;
 
 