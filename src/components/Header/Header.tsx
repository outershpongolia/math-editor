import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ERoute } from "../../constants";
import "./Header.scss";

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
    
    const location = useLocation()

    return (
        <div className="header">
            <div className="header__list">

                {location.pathname !== "/" && 
                    <NavLink 
                        className="header__list-item" 
                        to={ERoute.HOMEPAGE}
                    >
                        Home
                    </NavLink>
                }

                <NavLink 
                    className="header__list-item" 
                    to={ERoute.PRACTICE_BOARD}
                >
                    Practice board
                </NavLink>
                <NavLink 
                    className="header__list-item" 
                    to={ERoute.CHEATSHEET}
                >
                    Cheatsheet
                </NavLink>

            </div>
        </div>
    )
}