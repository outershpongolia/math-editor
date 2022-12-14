import React from "react";
import { Input } from "../Input/Input";
import "./AxisInput.scss";

interface IAxisInputProps {
    name: string
    title: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const AxisInput: React.FC<IAxisInputProps> = ({ name, title, value, onChange }) => {
    return (
        <div className="axis-input">
            <div className="axis-input__label">{title}</div>

            <Input
                className="axis-input__input"
                name={name}
                value={value}
                onChange={onChange}
            />
            {!title.includes("label") &&
                <div className="axis-input__manual manual">
                    Valid input format for {title}: number or numbers divided by coma. <i>E.g. 2, 3, 8</i>
                </div>
            }
        </div>
    )
}