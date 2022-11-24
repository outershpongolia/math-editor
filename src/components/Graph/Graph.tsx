import React from "react";
import "./Graph.scss";
import { LinearScale, ScaleOptions } from 'chart.js/auto';
import { ReactChart } from 'chartjs-react';
import { IAxisLabel, IDataType } from "../../interfaces";

interface IGraphProps {
    data: IDataType[]
    label: IAxisLabel
    isArea: boolean
}

const colorStyleBlue = "#124559"

const axisScales: ScaleOptions = {
    type: "linear",
    beginAtZero: true,
    ticks: {stepSize: 1},
    grid: {
        color: "#495057",
        lineWidth: 0.1,
        tickWidth: 1,
        tickLength: 5
    },
    title: {
        display: true,
        font: {size: 16}
    }
}

ReactChart.register(LinearScale)

export const Graph: React.FC<IGraphProps> = React.memo(({ data, label, isArea }) => {

    return (
        <div className="graph">

            <ReactChart
                id="chart"
                type="line"
                height={400}
                data={{
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
                            ...axisScales,
                            title: {
                                ...axisScales.title,
                                text: label.xAxisLabel || "x"
                            }
                        },
                        y: {
                            ...axisScales,
                            title: {
                                ...axisScales.title,
                                text: label.yAxisLabel || "y"
                            }
                        },
                    },
                    elements: {
                        line: {
                            borderColor: "#598392", 
                            borderWidth: 2,
                            fill: isArea 
                                ? {
                                    target: "origin",
                                    above: "rgb(18, 69, 89, 0.2)"
                                }
                                : "none"
                        },
                        point: {backgroundColor: colorStyleBlue}
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