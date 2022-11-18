import { noop } from "lodash";
import React, { createContext, PropsWithChildren, useState } from "react";
import { IPractice } from "../interfaces";

interface IFormulaContextProps {
    formula: IPractice[]
    setFormula: React.Dispatch<React.SetStateAction<IPractice[]>>
    specialCharacter: string
    setSpecialCharacter: React.Dispatch<React.SetStateAction<string>>
}

export const FormulaContext = createContext<IFormulaContextProps>({
    formula: [],
    setFormula: noop,
    specialCharacter: "",
    setSpecialCharacter: noop
})

export const FormulaContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [ formula, setFormula ] = useState<IPractice[]>([])
    const [ specialCharacter, setSpecialCharacter ] = useState("")

    return (
        <FormulaContext.Provider
            value={{
                formula,
                setFormula,
                specialCharacter,
                setSpecialCharacter
            }}
        >
            {children}
        </FormulaContext.Provider>
    )
}