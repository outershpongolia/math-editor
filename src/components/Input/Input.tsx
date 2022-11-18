import React from "react";
import "./Input.scss";

interface IInputProps {
    name: string
    value: string
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export const Input: React.FC<IInputProps> = ({ name, value, placeholder, onChange, className }) => {
    return (
        <input 
            className={`input ${className}`} 
            type="text" 
            name={name} 
            onChange={onChange} 
            value={value} 
            placeholder={placeholder} 
        />
    )
}