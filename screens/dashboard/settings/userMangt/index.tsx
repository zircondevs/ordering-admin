/* eslint-disable max-lines */

import React, {   useState }    from "react";
import {  Bold,   Flex,  Grid,   Small,   Span,  } from "../../../../components";
import {   Card, Card2, ControlHead, Controls, ControlsGrid, HeaderSTyles,   Main, SelectControlStyle,  } from "./styles";
import CustomButton from "../../../../components/Button";
import { HandleScrollTypes } from "devs-react-component-library";
import AddUser from "./addUser";
import { CancelIcon, Check2Icon, LoaderIcon, WarningIcon,   } from "../../../../public/assets/svg";
import {    useGetAdminStaff, useGetSettingsRoles, useUpdateAStaffRoles } from "../../../../hooks/useSettigs";
import SelectTags from "../../../../components/SelectTags";
import { MakeOnlyFirstLettersCapital,  singleSpace } from "../../../../lib";
import { Form, Formik } from "formik";





const UserManagemnt = () => {
	const [modal, setModal] = useState({type: ""});
	const [hidden, setHidden] = useState<number[]>([]);
	const modalRef = React.useRef<HandleScrollTypes>(null); 
	const [active, setActive] = useState("");

	const  {  loading, handleUpdateStaffRoles } = useUpdateAStaffRoles();
	const { avaliableModules,   loading: loadingRoles, error } = useGetSettingsRoles();
	const { staffs,   loading: loadingStaff, mutate, error: staffError} = useGetAdminStaff();


	const openModal = (obj: {[e: string]: any, type: string}) => {
		setModal(obj);
		modalRef.current && modalRef.current.preventBodyScroll();
	};


	
	const elementsOfArrIsInAnotherArr = (largeArr: string[], smallArr: string[]) =>   largeArr.some(role => smallArr.includes(role));

	const ifThereIsARoleThenAddView = (arr: string[]) =>   elementsOfArrIsInAnotherArr(arr, ["DELETE", "EDIT"]) ? arr.includes("VIEW") ? arr : [...arr, "VIEW"] :  arr;

	
 
	
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
					loadingRoles || loadingStaff ?
						<Flex><LoaderIcon height="40" width="40"/></Flex>
						:
						error || staffError ?
							<Flex>
								<WarningIcon colour="Error.default" height="20" width="20"/>
								<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="14" colour={"Grey.3"}>
									We are having issues fatching all staff
								</Span>
							</Flex>
							:
							staffs?.map((staff: any, idx : number) => (
								<Card key={staff?.email}>
									<Formik
										enableReinitialize
										initialValues={{
											moduleAccessible: Object.keys(avaliableModules)?.map((_) => ({
												name: _ || "",
												method: (staff?.moduleAccessible?.find((item: any )=> item?.name === _) )?.method    || ["VIEW"]
											})) 
											||
											[ { "name": "overview", "method": [ "VIEW" ] } ]
										}} 
										onSubmit={ async (values , options) => { 
											setActive( staff?._id);
											const res = await handleUpdateStaffRoles(values, staff?._id);
											if(res?.data ){
												mutate();
												options.resetForm();
												setActive("");
											}
										}}
									>
										{({ values, setFieldValue, dirty}) => {
											return (
												<Form>
													<ControlHead height="auto" justifyContent="space-between" wrap="nowrap">
														<div>
															<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="16" colour={"Grey.2"}>
																{staff?.fullname} 	
																<Small fontFamily='ubuntu' weight="400" lineHeight="14" size="12" colour={"Grey.3"}>
																	({staff?.email})
																</Small>
															</Span>
															<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="16" colour={"Grey.2"}>
																{singleSpace()}| {staff?.position} 
															</Span>
														</div>
														<button type="button" onClick={() => hidden.includes(idx) ? setHidden(hidden.filter(_ => _ !== idx)) : setHidden([...hidden, idx])}>
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

																	<CustomButton
																		size="10"
																		type="submit"
																		nonActiveBgColor="common.white"
																		nonActiveColor="Grey.3"
																		nonActiveBorderColor="Grey.6"
																		borderRadius="8"
																		activeBgColor="Success.default"
																		activeBorderColor="common.white"
																		activeColor="common.white"
																		text={  "Save Changes"}
																		disabled={!dirty}
																		isLoading={loading && active ===  staff?._id}
																		pad="padding.smallest"
																	/>
																</Controls>
																<ControlsGrid gap="0 16px" columns="1fr 1fr">
																	{
																		values.moduleAccessible.map((control, index) => (
																			<Card2 key={control.name + index} justifyContent="space-between" wrap="nowrap">
																				<Span fontFamily='ubuntu' weight="400" lineHeight="19" size="14" colour={"Grey.2"}>
																					{
																						values.moduleAccessible[index].method?.length > 0 ?
																							<Check2Icon colour="Grey.2" width="12" height="12"/>
																							:<CancelIcon colour="Error.default" width="10" height="10"/>
																					}
																					{MakeOnlyFirstLettersCapital(control.name)}
																				</Span>
																				<SelectControlStyle width="auto" height="auto" justifyContent="flex-end" className="View">
																					<SelectTags 
																						options={Object.values(avaliableModules)?.[index] as string[]} 
																						active={ values.moduleAccessible[index].method  } 
																						setActive={(e, option, state) => {
																							!state && option === "VIEW" ?
																								setFieldValue(`moduleAccessible.${index}.method`,  [] )
																								: setFieldValue(`moduleAccessible.${index}.method`,  ifThereIsARoleThenAddView(e) );
																						}}/>
																				</SelectControlStyle>
																			</Card2>
																		))
	
																	}
																</ControlsGrid>
															</>
													}
												</Form>
											);
										}}
									</Formik>
								
								</Card>

							))
				}  
			</Grid>

			
 
			
			<AddUser   open={modal} setOpen={setModal} modalRef={modalRef} onDOne={() => []}   />

		</Main>
	);
};
export default UserManagemnt;
 
 