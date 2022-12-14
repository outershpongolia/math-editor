import React from "react";
import { useLocation } from "react-router-dom";
import { ERoute } from "../../constants";
import "./MenuList.scss";

// Components
import { Link } from "../Link/Link";

interface IMenuListProps {
    onClick?: () => void
}

export const MenuList: React.FC<IMenuListProps> = ({ onClick }) => {
    
    const location = useLocation()

    return (
        <div className="menu-list">
            {location.pathname !== "/" && 
                <Link
                    className="menu-list__item"
                    route={ERoute.HOMEPAGE}
                    onClick={onClick}
                >
                    Home
                </Link>
            }

            <Link
                className="menu-list__item"
                route={ERoute.PRACTICE_BOARD}
                onClick={onClick}
            >
                Practice board
            </Link>

            <Link
                className="menu-list__item"
                route={ERoute.CHEATSHEET}
                onClick={onClick}
            >
                Cheatsheet
            </Link>
        </div>
    )
}