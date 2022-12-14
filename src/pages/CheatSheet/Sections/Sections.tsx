import React from "react";
import { NavLink } from "react-router-dom";
import { ERoute, SECTIONS } from "../../../constants";
import "./Sections.scss";

interface ISectionsProps {
    className?: string
}

export const Sections: React.FC<ISectionsProps> = ({ className }) => {
    return (
        <div className={`sections ${className}`}>
            {SECTIONS.map(section => {
                return (
                    <NavLink 
                        key={section.name}
                        className="sections__link" 
                        to={ERoute.CHEATSHEET_FORMULA.replace(":id", section.id)} 
                    >
                        <div>{section.name}</div>
                        <div>{section.id}</div>
                    </NavLink>
                )
            })}
        </div>
    )
}