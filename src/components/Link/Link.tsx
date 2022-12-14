import React, { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import { ERoute } from "../../constants";
import "./Link.scss";

interface ILinkProps extends PropsWithChildren {
    route: ERoute
    className?: string 
    onClick?: () => void
}

export const Link: React.FC<ILinkProps> = ({ children, route, className, onClick }) => {
    return (
        <NavLink 
            className={({ isActive }) => isActive ? `link ${className}_selected` : `link ${className}`}
            to={route} 
            onClick={onClick}
        >
            {children}
        </NavLink>
    )
}