import React from "react";
import "./Graph.scss";
import { LinearScale } from 'chart.js/auto';
import { ReactChart } from 'chartjs-react';
import { createLabel } from "../../utils";
import { IDataType } from "../../interfaces";

interface IGraphProps {
    data: IDataType[]
}

const grid = {
    color: "#495057",
    lineWidth: 0.1,
    tickWidth: 1,
    tickLength: 5
}

ReactChart.register(LinearScale)

export const Graph: React.FC<IGraphProps> = React.memo(({ data }) => {

    return (
        <div className="graph">

            <ReactChart
                id="chart"
                type="line"
                height={400}
                data={{
                    labels: createLabel(data, "x"),
                    datasets: [{
                        label: "f(x)",
                        data: data,
                        parsing: {
                            xAxisKey: "x",
                            yAxisKey: "y"
                        },
                    }],
                }}
                options={{
                    scales: {
                        x: {
                            grid: grid,
                            title: {
                                display: true,
                                text: "x"
                            }
                        },
                        y: {
                            beginAtZero: true,
                            grid: grid,
                            title: {
                                display: true,
                                text: "y"
                            },
                            ticks: {
                                stepSize: 1
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }}
            />

        </div>
    )
})