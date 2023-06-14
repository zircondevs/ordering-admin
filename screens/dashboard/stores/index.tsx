/* eslint-disable max-lines */

import React, { useState }   from "react";
import { Bold, Dropdown, Flex, Grid, Span,  } from "../../../components";
import {     Container1,  DropdownContentStyles,  HeaderSTyles, IconStyles, Main, StoreStyles,      } from "./styles";
import { GeneralCountStyles } from "../../../components/styles";
import { DotsIcon, EditIcon, LoaderIcon, PasswordEyeIcon, PlusIcon, StoreIcon, TrashIcon } from "../../../public/assets/svg";
import CustomButton from "../../../components/Button";
import { PRIMARY_COLOR } from "../../../hooks/colors";
import AddStore from "./addStore";
import { HandleScrollTypes } from "devs-react-component-library";
import DeleteStore from "./deleteStore";
import { useRouter } from "next/router";
import { useGetStores } from "../../../hooks/useStores";
import { GenericObjTypes } from "../../../constants/types";
 
const Stores = () => {
	const { stores , loading, mutate  } = useGetStores();
	const [modal, setModal] = useState({type: ""});
	const modalRef = React.useRef<HandleScrollTypes>(null); 
	const { push } = useRouter();


	const openModal = (obj: {[e: string]: any, type: string}) => {
		setModal(obj);
		modalRef.current && modalRef.current.preventBodyScroll();
	};


	
 
 

	return (
		<Main>

			<HeaderSTyles height="auto" justifyContent="space-between">
				<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="28" size="24" colour={"Grey.2"}>
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

			<Container1>
				<Flex justifyContent="space-between" margin="0 0 24px" height="auto">
					<div>
						<Bold fontFamily='quicksand' weight="700" lineHeight="24" size="18" colour={ "Grey.2"}>
							All Stores
						</Bold>
						<GeneralCountStyles>
							<Bold fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
								{stores?.count || 0}
							</Bold>
						</GeneralCountStyles>
					</div>
				</Flex>

				{
					loading ?
						<LoaderIcon height="40 " width="40"/>
						:
						<Grid gap="24px" columns="repeat(auto-fit, minmax(200px, 300px))" justifyContent="flex-start">
							{
								stores?.data?.map((store: GenericObjTypes, idx: number) => (
									<StoreStyles key={store?._id || idx} justifyContent="space-between" wrap="nowrap">
										<Flex width="auto" wrap="nowrap">
											<IconStyles height="50px" width="50px" margin="0 16px 0 0">
												<StoreIcon colour="Grey.2" height="20" width="20"/>
											</IconStyles>
											<div>
												<Span fontFamily='quicksand' weight="400" lineHeight="14" size="10" colour={ "Grey.3"}>
													{store?.address}
												</Span>
												<br />
												<Bold fontFamily='quicksand' weight="&00" lineHeight="24" size="18" colour={ "Grey.2"}>
													{store?.name}
												</Bold>
											</div>
										</Flex>

										<Dropdown
											weight='400'
											colour='Blue.base.default'
											hovBgColor='Black.10'
											dropHovColor='Grey.2'
											dropColor='Grey.2'
											direction='end'
											searchField={false}
											type="showmore"
											icon={<DotsIcon height="15" width="15"/>}
											data={[
												{
													returnedValue: "view",
													displayedValue: "",
													dropdownValue:(
														<DropdownContentStyles>
															<PasswordEyeIcon height="15" width="15" colour="Grey.1"/>
																View Store
														</DropdownContentStyles>
													)
												},
												{
													returnedValue: "edit",
													displayedValue: "",
													dropdownValue:(
														<DropdownContentStyles>
															<EditIcon height="15" width="15" colour="Grey.3"/>
																Edit
														</DropdownContentStyles>
													)
												},
												{
													returnedValue: "delete",
													displayedValue: "",
													dropdownValue:(
														<DropdownContentStyles>
															<TrashIcon height="15" width="15" colour="Error.default"/>
																Delete
														</DropdownContentStyles>
													),
												},
											]}
											handleSelect={(e) => {
												e === "view" ? 
													push({
														pathname: `/dashboard/stores/${store?._id}`,
														query: {state : store?.state},
													},
													`/dashboard/stores/${store?._id}` 
													)
													: openModal({type: e, store});
											}}
										/>
									</StoreStyles>
								))
							}
						</Grid>
				}

			</Container1>
		
			<DeleteStore  open={modal} setOpen={setModal} modalRef={modalRef} onDOne={mutate} />
			<AddStore  open={modal} setOpen={setModal} modalRef={modalRef} onDOne={mutate}  />

		</Main>
	);
};
export default Stores;
