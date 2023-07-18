
import React   from "react";
import { Bold, Dropdown, Flex, Grid, Span,  } from "../../../../components";
import {     Container1,  DropdownContentStyles,   IconStyles, Main, StoreStyles,        } from "./styles"; 
import {  GeneralCountStyles,   } from "../../../../components/styles";
import { DotsIcon, EditIcon, LoaderIcon, PasswordEyeIcon,  StoreIcon, TrashIcon } from "../../../../public/assets/svg";
import { useRouter } from "next/router";
import { GenericObjTypes } from "../../../../constants/types";
 


interface PropTypes {
	// eslint-disable-next-line no-unused-vars
	openModal: (e: { type: string, store: GenericObjTypes}) => void
	stores: GenericObjTypes
	loading: boolean
}



const AllStores = ({openModal, stores, loading}: PropTypes) => {

	const { push } = useRouter();


 
	return (
		<Main>


			
			<Flex justifyContent="space-between" margin="40px 0 24px" height="auto">
				<div>
					<Bold fontFamily='ubuntu' weight="700" lineHeight="24" size="18" colour={ "Grey.2"}>
						Stores
					</Bold>
					<GeneralCountStyles>
						<Bold fontFamily='ubuntu' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
							{stores?.count || 0}
						</Bold>
					</GeneralCountStyles>
				</div>
			</Flex>

 
			<Container1>

				{
					loading ?
						<LoaderIcon height="40 " width="40"/>
						:
						<Grid gap="24px" columns="repeat(auto-fit, minmax(200px, 300px))" justifyContent="flex-start">
							{
								stores?.data?.map((store: GenericObjTypes, idx: number) => (
									<StoreStyles key={store?._id || idx} justifyContent="space-between" wrap="nowrap" >
										<Flex width="auto" wrap="nowrap">
											<IconStyles name={store?.address?.[0]?.toUpperCase()} height="50px" width="50px" margin="0 16px 0 0">
												<StoreIcon colour="Grey.2" height="20" width="20"/>
											</IconStyles>
											<div>
												<Span fontFamily='ubuntu' weight="400" lineHeight="14" size="14" colour={ "Grey.3"}>
													{store?.address}
												</Span>
												<br />
												<Bold fontFamily='ubuntu' weight="&00" lineHeight="24" size="16" colour={ "Grey.2"}>
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
		

		</Main>
	);
};
export default AllStores;
