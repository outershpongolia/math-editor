import { uniqueId } from "lodash";
import React, { useCallback, useRef, useState } from "react";
import { IPractice } from "../../interfaces";
import { SpecialCharacters } from "../SpecialCharacters/SpecialCharacters";
import "./Formula.scss";
import { FormulaInput } from "./FormulaInput/FormulaInput";
import { FormulaOutput } from "./FormulaOutput/FormulaOutput";

interface IFormulaProps {}

export const Formula: React.FC<IFormulaProps> = () => {
    const [ formula, setFormula ] = useState<IPractice[]>([])

    const formulaInputRef = useRef<HTMLFormElement>(null)

    const handleSubmitFormula = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const target = e.target as HTMLFormElement
        const dataValue = new FormData(target)

        setFormula(formula => {
            return [...formula, {id: uniqueId(), formula: String(dataValue.get("formula"))}]
        })

        target.reset()
    }, [ setFormula ])

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

    return (
        <div className="formula">

            <div className="formula__input-wrapper">

                <div className="formula__label">Formula input</div>

                <FormulaInput 
                    className="formula__input" 
                    ref={formulaInputRef}
                    name="formula" 
                    onSubmit={handleSubmitFormula} 
                />

                <SpecialCharacters onClick={addCharacterToInput} />
                
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
    )
}