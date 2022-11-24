import React from "react";
import "./TypeOption.scss";

interface ITypeOptionProps {
    type: string
    isActive?: boolean
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const TypeOption: React.FC<ITypeOptionProps> = ({ type, isActive, onClick }) => {
    return (
        <div
            className={`type-option type-option_${type} ${isActive && "type-option_active"}`}
            onClick={onClick}
        >
            {type}
        </div>
    )
}