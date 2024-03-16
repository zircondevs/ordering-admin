
import { ChartDataCustomTypesPerDataset } from "chart.js";

export type ChartType  =  {
	borderWidth?: number,
	pointBackgroundColor?: string,
	pointRadius?: number,
	label: string,
	data: number[],
	borderColor?: string | string[],
	fill?: true,
	pointBorderColor?: string,
	backgroundColor: string | string[],
	pointBorderWidth?: number,
	pointHoverRadius?: number,
	pointHoverBackgroundColor?: string,
	pointHoverBorderWidth?: number,
	spacing?: number,
	offset?: number
}
export type DoughnutTypes  = ChartDataCustomTypesPerDataset & {
	borderWidth?: number,
	pointBackgroundColor?: string,
	pointRadius?: number,
	label: string,
	data: number[],
	borderColor?: string | string[],
	fill?: true,
	pointBorderColor?: string,
	backgroundColor: string | string[],
	pointBorderWidth?: number,
	pointHoverRadius?: number,
	pointHoverBackgroundColor?: string,
	pointHoverBorderWidth?: number,
	spacing?: number,
}