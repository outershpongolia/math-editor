import React, { useCallback } from "react";
import "./FormulaOutput.scss";
import { MdClose } from "react-icons/md";

interface IFormulaOutputProps {
    id: string
    output: string
    onClick?: (id: string) => void
    className?: string
}

export const FormulaOutput: React.FC<IFormulaOutputProps> = ({ id, output, onClick, className }) => {

    const handleOnClick = useCallback(() => {
        if (!onClick) {
            return
        }

        onClick(id)
    }, [ onClick, id ])

    return (
        <div 
            id={id}
            className={`formula-output ${className}`}
        >
            {output}
            <div 
                className="formula-output__close"
                onClick={handleOnClick}
            >
                <MdClose></MdClose>
            </div>
        </div>
    )
}