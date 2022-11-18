import React from "react";
import "./FormulaInput.scss";

interface IFormulaInputProps {
    name: string
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    className: string
    ref?: React.LegacyRef<HTMLFormElement>
}

export const FormulaInput = React.forwardRef<HTMLFormElement, IFormulaInputProps>(({name, onSubmit, className}, ref) => {
    return (
        <form 
            className="formula-input"
            ref={ref}
            onSubmit={onSubmit}
        >
            <input 
                className={`formula-input__input ${className}`} 
                name={name} 
                type="text"
            />
        </form>
    )
})