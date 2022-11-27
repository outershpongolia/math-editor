import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ERoute } from "../../constants";
import "./MenuList.scss";

interface IMenuListProps {
    onClick?: () => void
}

export const MenuList: React.FC<IMenuListProps> = ({ onClick }) => {
    
    const location = useLocation()

    return (
        <div className="menu-list">
            {location.pathname !== "/" && 
                <NavLink 
                    className="menu-list__item" 
                    to={ERoute.HOMEPAGE}
                    onClick={onClick}
                >
                    Home
                </NavLink>
            }

            <NavLink 
                className="menu-list__item" 
                to={ERoute.PRACTICE_BOARD}
                onClick={onClick}
            >
                Practice board
            </NavLink>
            <NavLink 
                className="menu-list__item" 
                to={ERoute.CHEATSHEET}
                onClick={onClick}
            >
                Cheatsheet
            </NavLink>
        </div>
    )
}