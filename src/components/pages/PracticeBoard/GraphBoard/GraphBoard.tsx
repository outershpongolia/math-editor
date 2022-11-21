import React, { useCallback, useState } from "react";
import { DEFAULT_DATA } from "../../../../constants";
import { IDataType } from "../../../../interfaces";
import { Button } from "../../../Button/Button";
import { Graph } from "../../../Graph/Graph";
import { Input } from "../../../Input/Input";
import "./GraphBoard.scss";

interface IGraphBoardProps {}

export const GraphBoard: React.FC<IGraphBoardProps> = () => {
    const [ axis, setAxis ] = useState<{xAxis: string, yAxis: string}>({
        xAxis: "",
        yAxis: ""
    }) 
    const [ dynamicData, setDynamicData ] = useState<IDataType[]>(DEFAULT_DATA)
    const [ error, setError] = useState(false)

    const handleAddAxis = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const code = e.target.value.charCodeAt(e.target.value.length - 1)

        if (e.target.value.length !== 0 && !((code > 47 && code < 58) || code === 44)) {
            return
        }

        const inputValue = e.target.value
        const inputName = e.target.name

        setAxis(axis => {
            return {
                xAxis: inputName === "x-axis" ? inputValue : axis.xAxis,
                yAxis: inputName === "y-axis" ? inputValue : axis.yAxis
            }
        })
    }, [ setAxis ])

    const handleSubmitGraphSpecifics = useCallback(() => {
        setError(false)

        setDynamicData(dynamicData => {

            if (axis.xAxis && axis.yAxis) {
                const xAxisArray = axis.xAxis.split(",").map(n => parseInt(n)).filter(i => !Number.isNaN(i))
                const yAxisArray = axis.yAxis.split(",").map(n => parseInt(n)).filter(i => !Number.isNaN(i))

                if (xAxisArray.length !== yAxisArray.length) {
                    setError(true)
                    return dynamicData
                }

                console.log(xAxisArray)

                return xAxisArray.map((n, index) => {
                    return {
                        x: n, 
                        y: yAxisArray[index]
                    }
                }) 
            }

            return dynamicData
        })
    }, [ setDynamicData, axis, setError ])

    return (
        <div className="graph-board">
            
            <Graph 
                data={dynamicData}
            />

            <div className="graph-board__specifics-wrapper">

                <div className="graph-board__specifics">

                    {}

                    <div className="graph-board__input-wrapper">
                        <div className="graph-board__label">X axis</div>
                        <Input
                            className="graph-board__input"
                            name="x-axis"
                            value={axis.xAxis}
                            onChange={handleAddAxis}
                        />
                        <div className="graph-board__manual">Valid input format for x axis: number or numbers divided by coma. <i>E.g. 2, 3, 8</i></div>
                    </div>

                    <div className="graph-board__input-wrapper">
                        <div className="graph-board__label">Y axis</div>
                        <Input
                            className="graph-board__input"
                            name="y-axis"
                            value={axis.yAxis}
                            onChange={handleAddAxis}
                        />
                        <div className="graph-board__manual">Valid input format for y axis: number or numbers divided by coma. <i>E.g. 2, 3, 8</i></div>
                    </div>

                    {error && <div className="error">X axis and Y axis must have same number of elements.</div>}

                </div>

                <Button
                    className="graph-board__button"
                    label="submit"
                    onClick={handleSubmitGraphSpecifics}
                />

            </div>

        </div>
    )
}