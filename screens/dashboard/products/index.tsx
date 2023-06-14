/* eslint-disable max-lines */

import React, {   useState }   from "react";
import { Bold, Dropdown, Flex,  Span, Table,      } from "../../../components";
import {     AddBtn, BtnsStyles, Container1, FoodStyles, HeaderSTyles, Main,   } from "./styles";
import { formatAMPM, formatNumber, formateDate,   } from "../../../lib";
// import Search from "../../../components/Search";
import { GeneralCountStyles, GeneralTableStyle } from "../../../components/styles";
import {   EditIcon, LoaderIcon, OrderIcon,    } from "../../../public/assets/svg";
import Image from "next/image";
import { GenericObjTypes } from "../../../constants/types";
import { HandleScrollTypes } from "devs-react-component-library";
import AddCategory from "./addCategory";
import AddProduct from "./addProduct";
import { useGetAllProducts } from "../../../hooks/useProduct";
import { Checkbox } from "../../../components/CheckMark";
import { useGetCategories } from "../../../hooks/useCategory";





const FoodMenu = () => {

	const { menu, loading: loadingmenu , mutate} = useGetAllProducts();
	const { categories,  mutate:mutateCategory } = useGetCategories();


	const [modal, setModal] = useState({type: ""});
	const modalRef = React.useRef<HandleScrollTypes>(null); 

	

	const openModal = (obj: {[e: string]: any, type: string}) => {
		setModal(obj);
		modalRef.current && modalRef.current.preventBodyScroll();
	};
 
	const tableHead = [ "Food", "category", "Date","Time", "Amount", "Avaliability", "Action"];
	const tableBody = menu?.data?.map((product: GenericObjTypes) => (
		{
			name: (
				<Flex width="auto" justifyContent="flex-start">
					<FoodStyles >
						{
							product?.productImage ?
								<Image src={product?.productImage} alt="Logo" objectFit="contain" layout="fill" /> 
								:
								<OrderIcon height="40" width="40"/>
						}
					</FoodStyles>
					<Bold fontFamily='quicksand' weight="700" lineHeight="19" size="12" colour={"Grey.1"}>
						{product?.name}
					</Bold>
				</Flex>
			),
			category: product?.category?.name,
			date: `${formateDate(new Date(product?.createdAt)).date} ${formateDate(new Date(product?.createdAt)).shortMonth}, ${formateDate(new Date(product?.createdAt)).year}` ,
			time: `${formatAMPM(new Date(product?.createdAt))}`,
			amount: "₦" + formatNumber(product?.amount),
			isAvailable: <Checkbox checked={product?.isAvailable} type="radio" />,
			action: (
				<Flex justifyContent="flex-start">
					{/* <Flex width="auto" height="auto" margin="0 8px 0 0" as="button">
						<TrashIcon colour="Error.default" height="20" width="20"/>
					</Flex> */}
					<Flex width="auto" height="auto" as="button" onClick={() => openModal({type: "editProduct", ...product})}>
						<EditIcon colour="Grey.2" height="20" width="20"/>
					</Flex>
				</Flex>
			)
		}
	));
 

	return (
		<Main>


			<HeaderSTyles height="auto" justifyContent="space-between">
				<Bold fontFamily='quicksandSemiBold' weight="700" lineHeight="28" size="24" colour={"Grey.2"}>
					Product
				</Bold>

				<BtnsStyles width="auto">
					<AddBtn>
						<Dropdown
							weight="300"
							direction="end"
							colour="common.white"
							dropColor="Grey.2"
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
									displayedValue: "Add New Product", 
									returnedValue: "addProduct",
									dropdownValue: "Add New Product",
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
									<Bold fontFamily='quicksand' weight="700" lineHeight="24" size="18" colour={ "Grey.2"}>
										All Products
									</Bold>
									<GeneralCountStyles>
										<Bold fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
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
									bodyColor="Grey.2"
									headColor="Black.60"
									tableHead={tableHead}
									tableBodys={tableBody}
								/>
							</GeneralTableStyle>
						</Container1>
						:
						<Flex margin="40px 0">
							<Span fontFamily='quicksand' weight="400" lineHeight="16" size="14" colour={ "Grey.2"}>
								There is no product records here yet!.
							</Span>
						</Flex>

			}
 
		
			<AddCategory   open={modal} setOpen={setModal} modalRef={modalRef} onDOne={ mutateCategory}  />
			<AddProduct   open={modal} setOpen={setModal} modalRef={modalRef} onDOne={mutate}  categories={categories}/>
		</Main>
	);
};
export default FoodMenu;
 
