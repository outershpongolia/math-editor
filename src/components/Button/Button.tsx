import React from "react";
import "./Button.scss";

interface IButtonProps {
    label: string
    onClick: () => void
    className?: string
}

export const Button: React.FC<IButtonProps> = ({ label, onClick, className }) => {
    return (
        <button 
            className={`button ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}