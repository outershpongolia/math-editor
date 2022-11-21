import React, { useCallback, useState } from "react";
import { DEFAULT_FORMULA } from "../../../../constants";
import { IFormula } from "../../../../interfaces";
import { Button } from "../../../Button/Button";
import { FormulaInput } from "../../../Formula/FormulaInput/FormulaInput";
import { Input } from "../../../Input/Input";
import "./Formulas.scss";
import { MdClose } from "react-icons/md";

interface IFormulasProps {
    className?: string
}

export const Formulas: React.FC<IFormulasProps> = ({ className }) => {
    const [ formula, setFormula ] = useState<IFormula>(DEFAULT_FORMULA)
    const [ isOpen, setIsOpen ] = useState(false)

    const handleAddFormula = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setIsOpen(true)

        const target = e.target as HTMLFormElement
        const value = new FormData(target)

        setFormula(formula => {
            return {...formula, formula: String(value.get("formula"))}
        })

        target.reset()
    }, [ setFormula, setIsOpen ])

    const handleAddFormulaName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFormula(formula => {
            return {...formula, name: e.target.value}
        })
    }, [ setFormula ])

    const handleAddFormulaDescription = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFormula(formula => {
            return {...formula, description: e.target.value}
        })
    }, [ setFormula ])

    const handleSubmitFormula = useCallback(() => {
        setIsOpen(false)

        const addFormulas = JSON.parse(localStorage.getItem("formula") || "[]")
        localStorage.setItem("formula", JSON.stringify([...addFormulas, formula]))

        setFormula(DEFAULT_FORMULA)
    }, [ formula, setIsOpen ])

    const handleClosePopup = useCallback(() => {
        setIsOpen(false)
    }, [ setIsOpen ])

    return (
        <div className={`formulas ${className}`}>

            <div className="formulas__add">
                <div className="formulas__add-label">Add your formula here: </div>
                <FormulaInput 
                    className="formulas__input" 
                    name="formula"
                    onSubmit={handleAddFormula} 
                />
            </div>

            {isOpen && 
                <div className="formulas__info-wrapper">

                    <div className="formulas__info">

                        <MdClose 
                            className="formulas__info-close" 
                            onClick={handleClosePopup}
                        />

                        <div className="formulas__info-row">
                            <div className="formulas__info-label">Name:</div>
                            <Input 
                                name="name"
                                placeholder="Give a name to your formula"
                                value={formula.name}
                                onChange={handleAddFormulaName}
                            />
                        </div>

                        <div className="formulas__info-row">
                            <div className="formulas__info-label">Description:</div>
                            <Input 
                                name="description"
                                placeholder="Write some description for your formula"
                                value={formula.description}
                                onChange={handleAddFormulaDescription}
                            />
                        </div>

                        <Button 
                            className="formulas__info-button"
                            label="submit"
                            onClick={handleSubmitFormula}
                        />
                    </div>
                </div>
            }

            <div className="formulas__context">
                Here you can add any formula you like to the cheatsheet for the chosen lesson. Please, pay close attention to correctness of the formula you are adding. Try to give a name to your formula, as specific as possible. Feel free to add to the description section anything additional that suits your needs. 
            </div>
        </div>
    )
}