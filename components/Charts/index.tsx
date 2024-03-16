/* eslint-disable max-lines */


import { Chart, 
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	TimeScale,
	Title,
	Tooltip,
	Legend,
	Filler,
	LineController,
	BarController,
	BarElement,
	DoughnutController,
	ArcElement,
	PieController
} from "chart.js";
import React from "react";
import { useRef, useEffect } from "react";
import { Paragraph } from "..";
import { theme } from "../../config/theme";
import { extractObjectValueFromNestedObject } from "../../lib";
import { ChartStyles, EmptyChart } from "./styles";
import { ChartType } from "./types";
import { WarningIcon } from "../../public/assets/svg";
import { DesktopLoader } from "../Loader";



 
const Charts =  ({
	type,
	datasets,
	labels,
	gradient = false,
	error = "",
	isLoading = false
}: {
	type: "bar" | "line" | "pie" | "doughnut",
	labels: string[],
	datasets: ChartType[],
	gradient?: boolean,
	isLoading?: boolean,
	error?: string
}) => {
	const ctx = useRef() as React.MutableRefObject<any>;
		
	
	Chart.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		TimeScale,
		Title,
		Tooltip,
		Legend,
		Filler,
		LineController,
		BarController,
		BarElement,
		DoughnutController,
		ArcElement,
		PieController
	);

	
	useEffect(() => {
		const Gradient = (color: string) => {
			const gradient = ctx.current.getContext("2d").createLinearGradient(0, 0, 0, 300);
			gradient.addColorStop(0, extractObjectValueFromNestedObject(theme.palette, color ));   
			gradient.addColorStop(1, "#ffffff45");
			return gradient;
		};
  
		const myLineChart = new Chart(ctx.current, {
			type: type || "line",
			data: {
				labels: labels,
				datasets: datasets.map(dataset => {
					return ({
						...dataset,
						tension: 0.1,
						backgroundColor: typeof(dataset.backgroundColor) === "string" ?
							gradient ? 
								Gradient(dataset.backgroundColor)
								: extractObjectValueFromNestedObject(
									theme.palette, dataset.backgroundColor
								)
							: dataset.backgroundColor.map(((_color: string) => {
								return gradient ? 
									Gradient(_color)
									: 	extractObjectValueFromNestedObject(theme.palette, _color);
							})),
						...(dataset.pointBackgroundColor && {
							pointBackgroundColor: extractObjectValueFromNestedObject(
								theme.palette, dataset.pointBackgroundColor
							)
						}),
						...(dataset.borderColor && {
							borderColor: typeof(dataset.borderColor) === "string" ?
								extractObjectValueFromNestedObject(
									theme.palette, dataset.borderColor
								)
								: dataset?.borderColor?.map(((color: string) => {
									return extractObjectValueFromNestedObject(theme.palette, color);
								}))
						}),
						...(dataset.pointBorderColor && {
							pointBorderColor: extractObjectValueFromNestedObject(
								theme.palette, dataset.pointBorderColor
							)
						}),
					});
				})
			},
			options: {
				responsive: true,
				maintainAspectRatio: true,
				plugins: {
					legend: {
						display: false,
					}
				},
				scales: {
					x: {
						display: type === "doughnut" ? false : true,
						beginAtZero: true,
						ticks: {
							
						},
						grid: {
							display: false
						}
					},
					y: {
						display: type === "doughnut" ? false : true,
						beginAtZero: true,
						position: "right",
						ticks: {
							// stepSize: 1
						}, 
						grid: {
							display: type === "doughnut" ? false : true,
							borderDash : [ 20, 5 ],
						},
 
					}
				}
			}
		}); 

		return () => myLineChart.destroy();

		
	}, [type, labels?.length, JSON.stringify(datasets) ]);

	return (
		<ChartStyles>
			{
				isLoading ?
					<DesktopLoader isLoading={isLoading}/>
					: error ?
						<EmptyChart bgColor="Black.10">
							<WarningIcon height="30" width="30" colour="Error.80"/>
							<Paragraph 
								fontFamily='ubuntu'
								weight="400"
								lineHeight="19"
								size="14"
								colour={"Error.80"}
								center
							>
								Something went wrong while rendering this chat.
							</Paragraph>
						</EmptyChart>
						: ![...datasets.map(dataset => (dataset.data))]?.flat()?.length ?
							<EmptyChart bgColor="Black.10">
								<Paragraph 
									fontFamily='ubuntu'
									weight="400"
									lineHeight="24"
									size="14"
									colour={"Black.80"}
									center
								>
									No data available.<br />
									Chart will be calculated once activity is recorded.
								</Paragraph>
							</EmptyChart>
							: null
			}	
 
			<div className="canvas"  >
				<canvas ref={ctx}></canvas>
			</div>
		</ChartStyles>
	);
};


export default Charts;