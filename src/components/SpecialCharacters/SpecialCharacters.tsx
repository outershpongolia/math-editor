import React, { useCallback } from "react";
import "./SpecialCharacters.scss";
import { MATH_CHARACTERS } from "../../constants";

interface ISpecialCharactersProps {
    onClick: (x: string) => void
}

export const SpecialCharacters: React.FC<ISpecialCharactersProps> = ({ onClick }) => {

    const addCharacter = useCallback((char: string) => {

        return () => onClick(char)
    }, [ onClick ])

    return (
        <div className="special-characters">

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