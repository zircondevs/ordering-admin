
import React    from "react";
import { Bold, Grid, Span,   } from "../../../../components";
import {      Card,   HeaderSTyles,   List,   Main, SubCardStyle,  } from "./styles";
 
import CustomButton from "../../../../components/Button";
import { Checkbox } from "../../../../components/CheckMark";
import { Spacer } from "../../../../components/Spacer";





const Subscription = () => {
	
	const plans = [
		{
			duration: "Monthly",
			amount: 200,
			benefits: ["jsds", "snkas"]
		},
		{
			duration: "Quarterly",
			amount: 200,
			benefits: ["jsds", "snkas"]
		},
		{
			duration: "Yearly",
			amount: 200,
			benefits: ["jsds", "snkas"]
		},
	];
	return (
		<Main>
			<HeaderSTyles height="auto" justifyContent="space-between" margin='40px 0 40px'>
				<Bold fontFamily='semiBold' weight="700" lineHeight="24" size="18" colour={"Grey.2"}>
					Update Security Information
				</Bold>
			</HeaderSTyles>

 
 
			<SubCardStyle columns="repeat(auto-fit, minmax(200px, 250px))" justifyContent="flex-start" gap="16px">
				{
					plans.map(plan => (
						<Card key={plan.duration} pad="60px 36px" direction="column" alignItems="flex-start">
							<Bold fontFamily='semiBold' weight="700" lineHeight="24" size="18" colour={"Grey.1"}>
								{plan.duration}
							</Bold>
							<Spacer  height="8px"/>
							<Span fontFamily='regular' weight="400" lineHeight="16" size="12" colour={"Grey.1"}>
								For easy access and payments
							</Span>
							<Spacer  height="16px"/>
							<Bold fontFamily='semiBold' weight="700" lineHeight="40" size="36" colour={"Grey.1"}>
								₦ {plan.amount}
							</Bold>
							<Spacer  height="16px"/>
							<CustomButton
								size="14"
								activeColor={"Grey.1"}
								type="submit"
								fullwidth
								nonActiveBgColor="Black.20"
								borderRadius="8"
								text={"Choose Plan" }
							/>
							<Spacer  height="24px"/>
							<Grid gap="16px">
								{
									plan.benefits.map((benefit, idx) => (
										<List key={idx} justifyContent="flex-start">
											<Checkbox  type="radio" checked={true}/>
											<Span fontFamily='regular' weight="400" lineHeight="16" size="14" colour={"Grey.2"}>
												{benefit}
											</Span>
										</List>
									))
								}
							</Grid>

						</Card>
					))
				}
			</SubCardStyle>
 
 
		</Main>
	);
};
export default Subscription;
 
 