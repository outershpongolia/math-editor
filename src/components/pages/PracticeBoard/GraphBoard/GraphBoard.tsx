import React, { useCallback, useState } from "react";
import { DEFAULT_AXIS, DEFAULT_DATA, DEFAULT_LABEL, GRAPH_TYPES } from "../../../../constants";
import { IAxis, IAxisLabel, IDataType, IGraphType, TGraphType } from "../../../../interfaces";
import { addElementToAxis, convertStringToFloat } from "../../../../utils";
import { AxisInput } from "../../../Axis/AxisInput/AxisInput";
import { Button } from "../../../Button/Button";
import { Graph } from "../../../Graph/Graph";
import { TypeOption } from "../../../TypeOption/TypeOption";
import "./GraphBoard.scss";

interface IGraphBoardProps {}

export const GraphBoard: React.FC<IGraphBoardProps> = () => {
    const [ axis, setAxis ] = useState<IAxis>(DEFAULT_AXIS) 
    const [ dynamicData, setDynamicData ] = useState<IDataType[]>(DEFAULT_DATA)
    const [ dynamicLabel, setDynamicLabel ] = useState<IAxisLabel>(DEFAULT_LABEL)
    const [ error, setError] = useState(false)
    const [ graphType, setGraphType ] = useState<IGraphType>({ type: "line"})

    const handleAddAxis = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name
        const inputValue = e.target.value

        const code = inputValue.charCodeAt(e.target.value.length - 1)

        if (
            (inputName !== axis.xLabel.name && inputName !== axis.yLabel.name)
            && inputValue.length !== 0 
            && !((code > 47 && code < 58) || code === 44 || code === 46)
        ) {
            return
        }

        setAxis(axis => {
            return {
                xLabel: addElementToAxis(inputName, inputValue, axis.xLabel),
                yLabel: addElementToAxis(inputName, inputValue, axis.yLabel),
                xAxis: addElementToAxis(inputName, inputValue, axis.xAxis),
                yAxis: addElementToAxis(inputName, inputValue, axis.yAxis),
            }
        })
    }, [ setAxis, axis.xLabel, axis.yLabel ])

    const handleSubmitGraphSpecifics = useCallback(() => {
        setError(false)

        setDynamicData(dynamicData => {
            if (axis.xAxis && axis.yAxis) {
                const xAxisArray = convertStringToFloat(axis.xAxis.value)
                const yAxisArray = convertStringToFloat(axis.yAxis.value)

                if (xAxisArray.length !== yAxisArray.length) {
                    setError(true)
                    return dynamicData
                }

                return xAxisArray.map((number, index) => {
                    return {
                        x: number, 
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

    const handleChangeGraphType = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const type = e.currentTarget.textContent as unknown as TGraphType

        setGraphType({ type })
    }, [ setGraphType ])

    console.log({axis})
    
    return (
        <div className="graph-board">   
            <Graph 
                data={dynamicData}
                label={dynamicLabel}
                isArea={graphType.type === "area"}
            />

            <div className="graph-board__wrapper">
                <div className="graph-board__options">
                    {GRAPH_TYPES.map(x => {
                        return (
                            <TypeOption 
                                key={x.type}
                                type={x.type}
                                isActive={graphType.type === x.type}
                                onClick={handleChangeGraphType}
                            />
                        )
                    })}
                </div>

                <div className="graph-board__specifics-wrapper">
                    <div className="graph-board__specifics">
                        {Object.values(axis).map(item => {
                            return (
                                <AxisInput 
                                    key={item.name}
                                    name={item.name}
                                    title={item.title}
                                    value={item.value}
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