/* eslint-disable max-lines */

import React, {  useRef, useState }   from "react";
import { Bold, Dropdown, Flex,  Span, Table,      } from "../../../components";
import {     AddBtn, BtnsStyles, Container1, FoodStyles, HeaderSTyles, Main,    SearchStyles,   } from "./styles";
import { formatAMPM, formatNumber, formateDate,   } from "../../../lib";
import Search from "../../../components/Search";
import { GeneralCountStyles, GeneralTableStyle } from "../../../components/styles";
import CustomButton from "../../../components/Button";
import { DownloadIcon, LoaderIcon } from "../../../public/assets/svg";
import Image from "next/image";
import PopUpModal, { PopUpRefType } from "../../../components/PopUpModal";
import { useGetMenu } from "../../../hooks/useMenu";
import { useGetStores } from "../../../hooks/useStores";
import { GenericObjTypes } from "../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import AddCategory from "./addCategory";
import AddFood from "./addFood";





const FoodMenu = () => {
	const { stores, loading:loadingStores } = useGetStores();
	const [store, setStore] = useState("");

	const { menu, loading: loadingmenu } = useGetMenu(store || stores?.data[0]?._id);
	const [modal, setModal] = useState({type: ""});
	const modalRef = React.useRef<HandleScrollTypes>(null); 

	

	const openModal = (obj: {[e: string]: any, type: string}) => {
		setModal(obj);
		modalRef.current && modalRef.current.preventBodyScroll();
	};

	const popUpRef = useRef<PopUpRefType>(null);
	// const handleCloseModal = () => popUpRef.current && popUpRef.current.handleCloseModal();

 
	

	const status = {
		pending:  ["Blue.dark.20", "Blue.dark" ],
		failed:  ["Error.20", "Error.default" ],
		success: ["Success.20", "Success.default" ],
	};
	const tableHead = [ "Food", "Date","Time", "Amount", "Status", "Action"];
	const tableBody = menu?.data?.map((menuItem: GenericObjTypes) => (
		{
			name: (
				<Flex width="auto" justifyContent="flex-start">
					<FoodStyles>
						<Image
							src={"https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png"}
							alt="Logo"
							objectFit="contain"
							layout="fill"
						/>
					</FoodStyles>
					<Bold fontFamily='quicksand' weight="700" lineHeight="19" size="12" colour={status["pending"][1]}>
						{menuItem?.name}
					</Bold>
				</Flex>
			),
			date: `${formateDate(new Date()).date} ${formateDate(new Date()).shortMonth}, ${formateDate(new Date()).year}` ,
			time: `${formatAMPM(new Date())}`,
			amount: "₦" + formatNumber(3212),
			status: <Flex bgColor={status["failed"][0]} width="max-content" pad="3px 8px" margin="0">
				<Span fontFamily='quicksand' weight="400" lineHeight="19" size="12" colour={status["pending"][1]}>
					failed
				</Span>
			</Flex>,
			action: (
				<PopUpModal 
					innerRef={popUpRef}
					icon={
						<Span fontFamily='quicksand' weight="400" lineHeight="19" size="12" colour={"Error.default"}>View</Span>
					}>
					<div>Lorem ipsum, d !</div>
				</PopUpModal>
			)
		}
	));
 

	return (
		<Main>


			<HeaderSTyles height="auto" justifyContent="space-between">
				<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="28" size="24" colour={"Black.80"}>
					Menu
				</Bold>

				<BtnsStyles width="auto">
					{
						stores?.data?.length > 0 ?
							<Dropdown
								weight="300"
								direction="end"
								colour="Black.default"
								dropColor="Black.80"
								dropHovColor="Black.default"
								hovBgColor="Black.20"
								searchField={false}
								initial={stores?.data?.[0]?.name }
								handleSelect={(selected: string) => setStore(selected)}
								data={stores?.data?.map((store: any) => (
									{
										displayedValue: store?.name, 
										returnedValue: store?._id,
										dropdownValue: store?.name
									}
								))|| ({
									displayedValue: "No data", 
									returnedValue: "No data",
									dropdownValue: "No data",
								}) }
							/>
							: null
					}
					<AddBtn>
						<Dropdown
							weight="300"
							direction="end"
							colour="common.white"
							dropColor="Black.80"
							dropHovColor="Black.default"
							hovBgColor="Black.20"
							searchField={false}
							initial={ "Add New"}
							handleSelect={(selected: string) => openModal({type: selected})}
							data={ [
								{
									displayedValue: "Add New Food", 
									returnedValue: "addFood",
									dropdownValue: "Add New Food",
								},
								{
									displayedValue: "Add Category", 
									returnedValue: "addCategory",
									dropdownValue: "Add Category",
								},
							] }
						/>
					</AddBtn>
				</BtnsStyles>
			</HeaderSTyles>

			{
				loadingmenu || loadingStores ?
					<Flex margin="40px 0"><LoaderIcon height="40" width="40"/> </Flex>
					: tableBody?.length > 0 ?
						<Container1>
							<Flex justifyContent="space-between" margin="0 0 24px" height="auto">
								<div>
									<Bold fontFamily='quicksand' weight="700" lineHeight="24" size="18" colour={ "Black.80"}>
										All Food
									</Bold>
									<GeneralCountStyles>
										<Bold fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={ "Black.80"}>
											23
										</Bold>
									</GeneralCountStyles>
								</div>
								<SearchStyles wrap="nowrap" alignItems="stretch" width="auto">
									<CustomButton
										size="14"
										type="button"
										pad="padding.smaller"
										text={  "Download"}
										activeBorderColor="Grey.3"
										activeColor="Grey.3"
										onClick={() =>  [] }
										icon={<DownloadIcon colour="Grey.3" height="15px" width="15px"/>}
									/>
									<Search placeholder="Search by ticket ID" />
								</SearchStyles>
							</Flex>
			
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
						</Container1>
						:
						<Flex margin="40px 0">
							<Span fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={ "Black.80"}>
								There is no food records here yet!.
							</Span>
						</Flex>

			}
 
		
			<AddCategory   open={modal} setOpen={setModal} modalRef={modalRef} onDOne={() => []}  />
			<AddFood   open={modal} setOpen={setModal} modalRef={modalRef} onDOne={() => []}  />
		</Main>
	);
};
export default FoodMenu;
 
