import React from "react";
import { Line } from "react-chartjs-2";
import {
   Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
} from 'chart.js';


ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
)
const Graph = () => {
	return (
		<div>
            <Line
                
				data={{
					labels: [1, 2, 3, 4, 5],
					datasets: [
						{
							data: [4, 5, 6, 7, 8],
							label: "graph1",
							borderColor: "red",
						},
						{
							data: [7, 8, 9, 10, 11],
							label: "graph2",
							borderColor: "blue",
						},
					],
				}}
			/>
		</div>
	);
};

export default Graph;
