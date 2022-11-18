import React, { useCallback } from "react";
import "./SpecialCharacters.scss";
import { MATH_CHARACTERS } from "../../constants";

interface ISpecialCharactersProps {
    onClick: (x: string) => void
    className?: string
}

export const SpecialCharacters: React.FC<ISpecialCharactersProps> = ({ onClick, className }) => {

    const addCharacter = useCallback((char: string) => {
        
        return () => onClick(char)
    }, [ onClick ])

    return (
        <div className={`special-characters ${className}`}>

            {MATH_CHARACTERS.map(x => {
                return (
                    <div 
                        className="special-characters__character" 
                        key={x.name}
                        onClick={addCharacter(x.character)}
                    >
                        {x.icon}
                    </div>
                )
            })}

        </div>
    )
}