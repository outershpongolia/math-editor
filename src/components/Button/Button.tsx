import React from "react";
import "./Button.scss";

interface IButtonProps {
    label: string
    onClick: () => void
    className?: string
    isDisabled?: boolean
}

export const Button: React.FC<IButtonProps> = ({ label, onClick, className, isDisabled }) => {
    return (
        <button 
            className={`button ${className}`}
            onClick={onClick}
            disabled={isDisabled}
        >
            {label}
        </button>
    )
}