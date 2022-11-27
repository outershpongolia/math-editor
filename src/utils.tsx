import { IAxisType } from "./interfaces"

export const convertStringToFloat = (value: string) => {
    return value.split(",")
                .map(x => parseFloat(x))
                .filter(x => !Number.isNaN(x))
}

export const addElementToAxis = (inputName: string, inputValue: string, element: IAxisType) => {
    return inputName === element.name ? {...element, value: inputValue} : element
}