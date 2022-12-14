import { type } from "os"
import React from "react"

export interface IFormula {
    name: string
    formula: string
    description: string
}

export interface IPractice {
    id: string
    formula: string
}

export interface IDataType {
    x: number
    y: number
}

export interface IAxisType {
    value: string
    name: "x-axis" | "y-axis" | "x-label" | "y-label"
    title: string
}

export interface IAxis {
    xAxis: IAxisType
    yAxis: IAxisType
    xLabel: IAxisType
    yLabel: IAxisType
}

export interface IAxisLabel {
    xAxisLabel: string
    yAxisLabel: string
}

export type TGraphType = "line" | "area"

export interface IGraphType {
    type: TGraphType
}

export interface IIcon {
    className: string
}