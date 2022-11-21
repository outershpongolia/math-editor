import { max } from "mathjs";
import { IDataType } from "./interfaces";



export const createLabel = (dataArray: IDataType[], key: string) => {
    if (!dataArray || dataArray.length === 0) {
        return []
    }

    return [...Array(max(dataArray.map(x => x[key])) + 1)].map((_, index) => index)
}