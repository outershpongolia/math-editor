import React, { useCallback, useState } from "react";
import { DEFAULT_AXIS, DEFAULT_DATA, DEFAULT_LABEL } from "../../../../constants";
import { IAxis, IAxisLabel, IDataType } from "../../../../interfaces";
import { AxisInput } from "../../../Axis/AxisInput/AxisInput";
import { Button } from "../../../Button/Button";
import { Graph } from "../../../Graph/Graph";
import { Input } from "../../../Input/Input";
import "./GraphBoard.scss";

interface IGraphBoardProps {}

export const GraphBoard: React.FC<IGraphBoardProps> = () => {
    const [ axis, setAxis ] = useState<IAxis>(DEFAULT_AXIS) 
    const [ dynamicData, setDynamicData ] = useState<IDataType[]>(DEFAULT_DATA)
    const [ error, setError] = useState(false)
    const [ dynamicLabel, setDynamicLabel ] = useState<IAxisLabel>(DEFAULT_LABEL)

    const handleAddAxis = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name
        const inputValue = e.target.value

        const code = inputValue.charCodeAt(e.target.value.length - 1)

        if (
            (inputName !== axis.xLabel.name && inputName !== axis.yLabel.name)
            && inputValue.length !== 0 
            && !((code > 47 && code < 58) || code === 44)
        ) {
            return
        }


        setAxis(axis => {
            return {
                xAxis: inputName === axis.xAxis.name ? {...axis.xAxis, value: inputValue} : axis.xAxis,
                yAxis: inputName === axis.yAxis.name ? {...axis.yAxis, value: inputValue} : axis.yAxis,
                xLabel: inputName === axis.xLabel.name ? {...axis.xLabel, value: inputValue} : axis.xLabel,
                yLabel: inputName === axis.yLabel.name ? {...axis.yLabel, value: inputValue} : axis.yLabel
            }
        })
    }, [ setAxis, axis.xLabel, axis.yLabel ])

    const handleSubmitGraphSpecifics = useCallback(() => {
        setError(false)

        setDynamicData(dynamicData => {
            if (axis.xAxis && axis.yAxis) {
                const xAxisArray = axis.xAxis.value.split(",").map(n => parseInt(n)).filter(i => !Number.isNaN(i))
                const yAxisArray = axis.yAxis.value.split(",").map(n => parseInt(n)).filter(i => !Number.isNaN(i))

                if (xAxisArray.length !== yAxisArray.length) {
                    setError(true)
                    return dynamicData
                }

                return xAxisArray.map((n, index) => {
                    return {
                        x: n, 
                        y: yAxisArray[index]
                    }
                }) 
            }

            return dynamicData
        })

        setDynamicLabel(dynamicLabel => {
            if (!axis.xLabel || !axis.yLabel) {
                return dynamicLabel
            }

            return {
                xAxisLabel: axis.xLabel.value,
                yAxisLabel: axis.yLabel.value
            }
        })
    }, [ setDynamicData, axis, setError, setDynamicLabel ])
    
    return (
        <div className="graph-board">   
            <Graph 
                data={dynamicData}
                label={dynamicLabel}
            />

            <div className="graph-board__wrapper">
                <div className="graph-board__specifics-wrapper">
                    <div className="graph-board__specifics">
                        {Object.entries(axis).map(item => {
                            return (
                                <AxisInput 
                                    key={item[1].name}
                                    name={item[1].name}
                                    title={item[1].title}
                                    value={item[1].value}
                                    onChange={handleAddAxis}
                                />
                            )
                        })}
                        {error && 
                            <div className="error">X axis and Y axis must have same number of elements.</div>
                        }
                    </div>
                  
                    <Button
                        className="graph-board__button"
                        label="submit"
                        onClick={handleSubmitGraphSpecifics}
                    />
                </div>
            </div>
        </div>
    )
}