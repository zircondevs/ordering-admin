 
import React, {   useState }   from "react";
import { Accordion, Bold, Flex, Grid, Span,  } from "../../../../components";
import { AccordionBodyStyles, DropdownIconStyles, ProgressCardStyles } from "./styles";
import { Spacer } from "../../../../components/Spacer";
import { Checkbox } from "../../../../components/CheckMark";
import { LeftArrowIcon, SettingsIcon } from "../../../../public/assets/svg";
import { Icon } from "../WalletSection/styles";
import Link from "next/link";



type progressType =  {title: string, value: boolean, link: string, linkText:string}[]




const SetUp = ({dashboard, loading}: {dashboard: any, loading: boolean}) => {
	const [visible, setVisible] = useState(0);


	const progress = [
		{
			title: "Set up a store",
			value: dashboard?.hasStore,
			link: "/dashboard/stores",
			linkText: "Add Stores"
		},
		{
			title: "Add more product",
			value: dashboard?.hasProduct,
			link: "/dashboard/products",
			linkText: "Add Product"
		},
		{
			title: "Add store managers",
			value: dashboard?.hasStoreManagers,
			link: "/dashboard/settings?t=2",
			linkText: "Add Manager"
		},
	];


	return (
		<>
			{	
				!dashboard || loading ? null :
					dashboard?.hasStore && dashboard?.hasProduct && dashboard?.hasStoreManagers ? null
						:<ProgressCardStyles>
							<Accordion 
								gap={"0"}
								visible={visible}
								setVisible={setVisible}
								accordions={[
									{
										head: <AccordionHead visible={visible === 0} {...{progress}} />,
										details: <AccordionBody {...{progress}}  />,
										key: 1
									}
								]}
							/>
						</ProgressCardStyles>
			}
		</>
	);
};
export default SetUp;
 



const AccordionHead = ({visible, progress}: {visible: boolean, progress: progressType}) => {
	return (
		<Flex justifyContent="space-between">
			<Flex width="auto" wrap="nowrap">
				<Icon bgColor="common.white" margin="0 16px 0 0 !important">
					<SettingsIcon colour="Orange.default" height="20" width="20"/>
				</Icon>
				<div>
					<Span fontFamily='regular' weight="400" lineHeight="19" size="14" colour={ "Grey.2"}>
						Finish Up Set Up  {" "}
						<Bold fontFamily='regular' weight="700" lineHeight="19" size="14" colour={ "Grey.2"}>
							{Math.round((progress.filter(item => item.value)?.length)/progress?.length * 100)}% Complete
						</Bold>
					</Span>
					<br />
					<Span fontFamily='regular' weight="400" lineHeight="14" size="10" colour={ "Grey.3"}>
						Complete your store set and start making sales
					</Span>
				</div>
			</Flex>

			<DropdownIconStyles visible={visible}>
				<LeftArrowIcon colour="Grey.2" height="15" width="15"/>
			</DropdownIconStyles>
		</Flex>
	);
};
const AccordionBody = ({progress}: {progress: progressType}) => {
	
	return (
		<Grid justifyContent="space-between" gap="20px">
			<Spacer height="2px"/>
			{
				progress.map((item) => (
					<AccordionBodyStyles key={item.title} justifyContent="space-between">
						<Flex width="auto">
							<Checkbox  checked={item.value} type="radio" />
							<Span fontFamily='regular' weight="400" lineHeight="19" size="14" colour={ "Grey.3"}>
								{item.title}
							</Span>
						</Flex>

						<Flex width="max-content" height="auto" className="links" justifyContent="flex-start">
							<div>
								<Link href={item.link}>
									<Bold fontFamily='regular' weight="700" lineHeight="19" size="14" colour={ "Orange.default"}>
										{item.linkText}
									</Bold>
								</Link>
							</div>
						</Flex>
					</AccordionBodyStyles>
				))
			}
		</Grid>
	);
};