import { uniqueId } from "lodash";
import { evaluate } from "mathjs";
import React, { useCallback, useRef, useState } from "react";
import { EInputType } from "../../constants";
import { IPractice } from "../../interfaces";
import { Button } from "../Button/Button";
import { SpecialCharacters } from "../SpecialCharacters/SpecialCharacters";
import "./Formula.scss";
import { FormulaInput } from "./FormulaInput/FormulaInput";
import { FormulaOutput } from "./FormulaOutput/FormulaOutput";

interface IFormulaProps {}

export const Formula: React.FC<IFormulaProps> = () => {
    const [ formula, setFormula ] = useState<IPractice[]>([])
    const [ inputType, setInputType ] = useState(EInputType.PLAIN_FORMULA)
    const [ error, setError ] = useState("")

    const formulaInputRef = useRef<HTMLFormElement>(null)

    const handleSubmitFormula = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const target = e.target as HTMLFormElement
        const dataValue = new FormData(target)

        setFormula(formula => {
            try {
                setError("")
                return [
                    ...formula, 
                    {
                        id: uniqueId(), 
                        formula: inputType === EInputType.PLAIN_FORMULA 
                            ? String(dataValue.get("formula")) 
                            : evaluate(String(dataValue.get("formula")))["value"] || evaluate(String(dataValue.get("formula")))
                    }
                ]
            } catch (error) {
                console.error(error)
                setError("Invalid type of expression.")
                return formula
            }
        })

        target.reset()
    }, [ setFormula, inputType, setError ])

    const clearFormulaItem = useCallback((id: string) => {
        setFormula(formula => {
            return formula.filter(item => item.id !== id)
        })
    }, [ setFormula ])

    const handleClearAllFormulas = useCallback(() => {
        setFormula([])
    }, [ setFormula ])

    const addCharacterToInput = useCallback((x: string) => {
            const element = formulaInputRef?.current?.elements[0] as HTMLInputElement

            element.value = element.value + x

            element.focus()
    }, [])

    const handleChangeInputTypeToFormula = useCallback(() => {
        setInputType(EInputType.PLAIN_FORMULA)
        setError("")
    }, [ setInputType, setError ])

    const handleChangeInputTypeToCalculator = useCallback(() => {
        setInputType(EInputType.CALCULATOR)
    }, [ setInputType ])

    return (
        <div className="formula">

            <div className="formula__buttons">
                <Button
                    label="Plain formula" 
                    onClick={handleChangeInputTypeToFormula} 
                    isDisabled={inputType === EInputType.PLAIN_FORMULA}
                />
                <Button
                    label="Calculator" 
                    onClick={handleChangeInputTypeToCalculator} 
                    isDisabled={inputType === EInputType.CALCULATOR}
                />
            </div>

            <div className="formula__main">

                <div className="formula__input-wrapper">

                    <div className="formula__label">
                        {inputType === EInputType.PLAIN_FORMULA ? "Formula input" : "Calculator"}
                    </div>

                    {inputType === EInputType.PLAIN_FORMULA
                    ? <FormulaInput 
                        className="formula__input" 
                        ref={formulaInputRef}
                        name="formula" 
                        onSubmit={handleSubmitFormula} 
                    />
                    : <FormulaInput 
                        className="formula__input" 
                        ref={formulaInputRef}
                        name="formula" 
                        onSubmit={handleSubmitFormula} 
                    />
                    }

                    {error && <div className="formula__error error">{error}</div>}

                    <SpecialCharacters 
                        className="formula__characters"
                        onClick={addCharacterToInput} 
                    />
                    
                </div>

                <div className="formula__wrapper">

                    <div className="formula__label">Formula output</div>

                    <div 
                        className="formula__clear"
                        onClick={handleClearAllFormulas}
                    >
                        clear all
                    </div>

                    {formula.map(item => {
                        return (
                            <FormulaOutput 
                                key={item.id} 
                                id={item.id} 
                                output={item.formula} 
                                onClick={clearFormulaItem} 
                            />
                        )
                    })}

                </div>

            </div>
            
        </div>
    )
}