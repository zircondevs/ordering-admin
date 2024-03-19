
import React, { useState }    from "react";
import {  Bold,   Dropdown,   Flex, Header3, Span,     } from "../../../../components";
 
import Charts from "../../../../components/Charts";
import { ChartCard, Container2, Customer, CustomerCard, Main } from "./styles";
import { BadgeIcon } from "../../../../public/assets/svg";
import { Spacer } from "../../../../components/Spacer";
import { useGetCustomerChart, useGetTopPurchasingCustomer } from "../../../../hooks/usedashboard";
import { formatNumber } from "../../../../lib";
 

<link href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"></link>;



const CustomerMetrics = () => {
	const [filterBy, setFilterBy] = useState("All Time");

	const { customerChart, loading, error} = useGetCustomerChart(filterBy);
	const {  topPurchasingCustomer } = useGetTopPurchasingCustomer();
 

	const options = ["All Time",  "This Year", "Last 30 Days", "Last Week", "This Week", "Today"];
 
	console.log(customerChart);
	return (
 
		<Main height="auto" alignItems="flex-start">
			<ChartCard>
				<Container2 height="auto" justifyContent="space-between">
					<Header3 fontFamily='semiBold'weight="400"lineHeight="21"size="18"colour={"Black.80"}>
						Customer Count Chart
					</Header3>

					<Dropdown
						weight="300"
						direction="end"
						colour="Grey.1"
						dropColor="Grey.2"
						dropHovColor="Grey.1"
						hovBgColor="Grey.5"
						initial="Select a filter range"
						searchField={false}
						clearSelected
						icon={"jklk"}
						handleSelect={(selected: any) => setFilterBy(  selected)}
						data={
							options.map(option => (
								{
									displayedValue: option, 
									returnedValue: option,
									dropdownValue: option
								}
							))
						}
					/>
				</Container2>
			
				<Spacer height="20px"/>
				<Charts
					gradient={true}
					type={"line"}
					error={error}
					isLoading={loading}
					labels= {["Monday", "Tuesday", "Wednesday", "qwq", "sda"]}
					// labels= {statistics?.data?.map((data: any) => data?.subject?.substring(0, 3))}
					datasets= {[
						{
							borderWidth: 2,
							pointBackgroundColor: "common.white",
							pointRadius: 4,
							label: "Customers",
							data:  [10, 2, 3, 34, 56],
							backgroundColor:  "Black.40",
							// data:   statistics?.data?.map((data: any) => data?.score),
							// backgroundColor: statistics?.data?.length > 0 ? statistics?.data?.map((range: any) => colorsRank(range?.score)) : "Black.40",
							borderColor: "Success.default",
							fill: true,
							pointBorderColor: "Success.default",
							pointBorderWidth: 2,
							pointHoverRadius: 7,
							pointHoverBackgroundColor: "white",
							pointHoverBorderWidth: 2,
						},
					]}
				/>
			</ChartCard>

			{
				topPurchasingCustomer?.[0] ?
					<Customer>
						<Header3 fontFamily='semiBold'weight="400"lineHeight="21"size="16"colour={"Black.80"}>
							Top purchasing customer
						</Header3>
						<Spacer height="20px"/>
						<CustomerCard>
							
							<Flex height="auto" justifyContent="flex-start" margin=" 0   0 10px 0">
								<Bold fontFamily='semiBold'weight="400"lineHeight="21"size="16"colour={"common.white"}>
									{formatNumber(topPurchasingCustomer?.[0]?.purchaseAmount )} purchases
								</Bold>
							</Flex>
							
							<Flex height="auto" justifyContent="flex-start" alignItems="flex-start" wrap="nowrap">
								<BadgeIcon colour="Yellow.default"/>
								<Flex height="auto" justifyContent="flex-start"  width="auto" margin="0 0 0 10px" direction="column" alignItems="flex-start">
									<Bold fontFamily='bold'weight="400"lineHeight="32"size="21"colour={"common.white"}>
										{topPurchasingCustomer?.[0]?.fullName }
									</Bold>
									<Span fontFamily='bold'weight="400"lineHeight="14"size="12"colour={"Black.40"}>
										{topPurchasingCustomer?.[0]?.email }
									</Span>

								</Flex>
							</Flex>
						</CustomerCard>
					</Customer>
					: null
			}
		</Main>

 
	);
};
export default CustomerMetrics;
 



 