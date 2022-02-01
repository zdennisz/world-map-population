import React from "react";
import { Chart } from "react-google-charts";
interface ChartControllerProps {
	setIsLoading(value: boolean): void;
}
const ChartController = (props: ChartControllerProps) => {
	let dummyData = [
		["Country", "Popularity"],
		["Germany", 200],
		["United States", 300],
		["Brazil", 400],
		["Canada", 500],
		["France", 600],
		["RU", 700],
	];
	return (
		<Chart
			chartEvents={[
				{
					eventName: "select",
					callback: ({ chartWrapper }) => {
						const chart = chartWrapper.getChart();
						const selection = chart.getSelection();
						if (selection.length === 0) return;
						const region = dummyData[selection[0].row + 1];
						console.log("Selected : " + region);
					},
				},
				{
					eventName: "ready",
					callback: () => {
						props.setIsLoading(false);
					},
				},
			]}
			chartType='GeoChart'
			width='100%'
			height='400px'
			data={dummyData}
		/>
	);
};

export default ChartController;
