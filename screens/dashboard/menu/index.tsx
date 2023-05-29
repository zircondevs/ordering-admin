/* eslint-disable max-lines */

import React, {   useState }   from "react";
import { Bold, Dropdown, Flex,  Span, Table,      } from "../../../components";
import {     AddBtn, BtnsStyles, Container1, FoodStyles, HeaderSTyles, Main,   } from "./styles";
import { formatAMPM, formatNumber, formateDate,   } from "../../../lib";
// import Search from "../../../components/Search";
import { GeneralCountStyles, GeneralTableStyle } from "../../../components/styles";
import {   EditIcon, LoaderIcon, PlateIcon,  } from "../../../public/assets/svg";
import Image from "next/image";
import { GenericObjTypes } from "../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import AddCategory from "./addCategory";
import AddFood from "./addFood";
import { useGetAllFood } from "../../../hooks/useFood";
import { Checkbox } from "../../../components/CheckMark";
import { useGetCategories } from "../../../hooks/useCategory";





const FoodMenu = () => {

	const { menu, loading: loadingmenu , mutate} = useGetAllFood();
	const { categories,  mutate:mutateCategory } = useGetCategories();


	const [modal, setModal] = useState({type: ""});
	const modalRef = React.useRef<HandleScrollTypes>(null); 

	

	const openModal = (obj: {[e: string]: any, type: string}) => {
		setModal(obj);
		modalRef.current && modalRef.current.preventBodyScroll();
	};
 
	const tableHead = [ "Food", "category", "Date","Time", "Amount", "Avaliability", "Action"];
	const tableBody = menu?.data?.map((food: GenericObjTypes) => (
		{
			name: (
				<Flex width="auto" justifyContent="flex-start">
					<FoodStyles >
						{
							food?.foodImage ?
								<Image
									src={food?.foodImage}
									alt="Logo"
									objectFit="contain"
									layout="fill"
								/> 
								:
								<PlateIcon height="40" width="40"/>
						}
					</FoodStyles>
					<Bold fontFamily='quicksand' weight="700" lineHeight="19" size="12" colour={"Grey.1"}>
						{food?.name}
					</Bold>
				</Flex>
			),
			category: food?.category?.name,
			date: `${formateDate(new Date(food?.createdAt)).date} ${formateDate(new Date(food?.createdAt)).shortMonth}, ${formateDate(new Date(food?.createdAt)).year}` ,
			time: `${formatAMPM(new Date(food?.createdAt))}`,
			amount: "₦" + formatNumber(food?.amount),
			isAvailable: <Checkbox checked={food?.isAvailable} type="radio" />,
			action: (
				<Flex justifyContent="flex-start">
					{/* <Flex width="auto" height="auto" margin="0 8px 0 0" as="button">
						<TrashIcon colour="Error.default" height="20" width="20"/>
					</Flex> */}
					<Flex width="auto" height="auto" as="button" onClick={() => openModal({type: "editFood", ...food})}>
						<EditIcon colour="Grey.2" height="20" width="20"/>
					</Flex>
				</Flex>
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
					<AddBtn>
						<Dropdown
							weight="300"
							direction="end"
							colour="common.white"
							dropColor="Black.80"
							dropHovColor="Black.default"
							hovBgColor="Black.20"
							searchField={false}
							type="showmore"
							handleSelect={(selected: string) => openModal({type: selected})}
							icon={(
								<Span fontFamily='quicksand' weight="400" lineHeight="24" size="18" colour={ "common.white"}>
									Add New
								</Span>
							)}
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
				loadingmenu  ?
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
											{menu?.count}
										</Bold>
									</GeneralCountStyles>
								</div>
								{/* <SearchStyles wrap="nowrap" alignItems="stretch" width="auto">
									<Search placeholder="Search by ticket ID" />
								</SearchStyles> */}
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
 
		
			<AddCategory   open={modal} setOpen={setModal} modalRef={modalRef} onDOne={ mutateCategory}  />
			<AddFood   open={modal} setOpen={setModal} modalRef={modalRef} onDOne={mutate}  categories={categories}/>
		</Main>
	);
};
export default FoodMenu;
 
