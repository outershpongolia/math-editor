import React, { useEffect, useRef } from "react";
import "./Graph.scss";
import * as d3 from "d3";

interface IGraphProps {}

export const Graph: React.FC<IGraphProps> = () => {

    const svgRef = useRef<SVGSVGElement>(null)

    useEffect(() => {
        const width = 400
        const height = 400
        const padding = 20
        
        const svg = d3.select(svgRef.current)
                        .attr("width", width)
                        .attr("height", height)
                        .style("background-color", "white")

        svg.append("svg:svg")

        const xScale = d3.scaleLinear().domain([5, -5]).range([width-padding, padding])
        const yScale = d3.scaleLinear().domain([-5, 5]).range([height-padding, padding])

        const xAxis = d3.axisBottom(xScale).tickValues([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5])
        const yAxis = d3.axisLeft(yScale).tickValues([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5])

        const xAxisPlot = svg.append("g")
                                .attr("class", "axis axis--x")
                                .attr("transform", `translate(0, ${height / 2})`)
                                .call(xAxis)                            

        const yAxisPlot = svg.append("g")
                                .attr("class", "axis axis--y")
                                .attr("transform", `translate(${width / 2}, 0)`)
                                .call(yAxis)

        xAxisPlot.selectAll(".tick line")
                    .attr("y1", (width - 2*padding)/2 * -1)
                    .attr("y2", (width - 2*padding)/2 * 1)

        yAxisPlot.selectAll(".tick line")
                    .attr("x1", (width - 2*padding)/2 * -1)
                    .attr("x2", (width - 2*padding)/2 * 1)
    }, [])

    return (
        <div className="graph" id="graph">
            <svg ref={svgRef}></svg>
        </div>
    )
}