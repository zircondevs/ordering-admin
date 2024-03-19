/* eslint-disable max-lines */

import React, { useState }  from "react";
import { Bold,   Flex,  Frame,  Span,        } from "../../../../components";
import {      CollapseBtnStyles, MetricsCardStyles,   MetricsStyles, Styles,   } from "./styles";
import Image from "next/image";
import { Spacer } from "../../../../components/Spacer";
import { useGetProductMetrics } from "../../../../hooks/useProduct";
import { MakeOnlyFirstLettersCapital } from "../../../../lib";





const ProductMetrics = () => {
	const [collapse, setCollapse] = useState(false);
	const {productMetrics} = useGetProductMetrics();
 

	
	return (
		<>
			{
				productMetrics?.highestSeller || productMetrics?.lowestSeller ?
					<Styles>
						<Flex height="auto" justifyContent="space-between">
							<Bold fontFamily='regular' weight="700" lineHeight="24" size="18" colour={ "Grey.2"}>
								Product Metrics
							</Bold>
							<CollapseBtnStyles   type="button" onClick={() => setCollapse(!collapse)}>
								<Bold fontFamily='regular' weight="400" lineHeight="21" size="14" colour={ "Orange.default"}>
									{collapse ? "Show": "Collapse"  } Metrics
								</Bold>
							</CollapseBtnStyles>
						</Flex>

						{
							!collapse ?
								<>
									<Spacer height="10px"/>
									<MetricsStyles>
										{
											productMetrics?.highestSeller ?
												<MetricsCardStyles bgColor="Yellow.5">
													<Frame   width="100px" height="auto">
														<Image src={productMetrics?.highestSeller?.productImage?.[0]}  width="100%" height="100%" />
													</Frame>
													<Flex height="auto" direction="column" alignItems="flex-start">
														<Bold fontFamily='regular' weight="600" lineHeight="24" size="16" colour={ "Grey.1"}>
															Most Purchased Product
														</Bold>
														<Span fontFamily='regular' weight="400" lineHeight="19" size="12" colour={ "Grey.3"}>
															{MakeOnlyFirstLettersCapital(productMetrics?.highestSeller?.name)}
														</Span>

														<Flex height="auto" justifyContent="space-between" margin="20px 0 0">
															<Flex height="auto" direction="column" width="auto" alignItems="flex-start">
																<Span fontFamily='regular' weight="400" lineHeight="16" size="12" colour={ "Grey.3"}>
																	Total Sold
																</Span>
																<Bold fontFamily='regular' weight="600" lineHeight="19" size="14" colour={ "Grey.1"}>
																	{productMetrics?.highestSeller?.quantity}
																</Bold>
															</Flex>
															<Flex height="auto" direction="column" width="auto" alignItems="flex-start">
																<Span fontFamily='regular' weight="400" lineHeight="16" size="12" colour={ "Grey.3"}>
																	Avg. Time In Store
																</Span>
																<Bold fontFamily='regular' weight="600" lineHeight="19" size="14" colour={ "Grey.1"}>
																	{productMetrics?.highestSeller?.name}
																</Bold>
															</Flex>
														</Flex>
													</Flex>
												</MetricsCardStyles>
												: null
										}
										

										{
											productMetrics?.lowestSeller ?
												<MetricsCardStyles bgColor="Orange.5">
													<Frame   width="100px" height="auto">
														<Image src={productMetrics?.lowestSeller?.productImage?.[0]}  width="100%" height="100%" />
													</Frame>
													<Flex height="auto" direction="column" alignItems="flex-start">
														<Bold fontFamily='regular' weight="600" lineHeight="24" size="16" colour={ "Grey.1"}>
															Least Purchased Product
														</Bold>
														<Span fontFamily='regular' weight="400" lineHeight="19" size="12" colour={ "Grey.3"}>
															{MakeOnlyFirstLettersCapital(productMetrics?.lowestSeller?.name)}
														</Span>

														<Flex height="auto" justifyContent="space-between" margin="20px 0 0">
															<Flex height="auto" direction="column" width="auto" alignItems="flex-start">
																<Span fontFamily='regular' weight="400" lineHeight="16" size="12" colour={ "Grey.3"}>
																	Total Sold
																</Span>
																<Bold fontFamily='regular' weight="600" lineHeight="19" size="14" colour={ "Grey.1"}>
																	{productMetrics?.lowestSeller?.quantity}
																</Bold>
															</Flex>
															<Flex height="auto" direction="column" width="auto" alignItems="flex-start">
																<Span fontFamily='regular' weight="400" lineHeight="16" size="12" colour={ "Grey.3"}>
																	Avg. Time In Store
																</Span>
																<Bold fontFamily='regular' weight="600" lineHeight="19" size="14" colour={ "Grey.1"}>
																	Bag and Show
																</Bold>
															</Flex>
														</Flex>
													</Flex>
												</MetricsCardStyles>
												: null
										}
									</MetricsStyles>
								</>
								: null
						}
					</Styles>
					: null
			}
		</>
	);
};
export default ProductMetrics;
 
