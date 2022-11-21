import { Unit } from "mathjs"

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
    x: number,
    y: number
}

export interface IAxisType {
    value: string,
    name: string,
    title: string
}

export interface IAxis {
    xAxis: IAxisType,
    yAxis: IAxisType
}