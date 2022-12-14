import React, { useCallback, useState } from "react";
import "./Header.scss";

// Components
import { Atom } from "../Animations/Atom/Atom";
import { MenuList } from "../MenuList/MenuList";

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
    const [ isMenuOpened, setIsMenuOpened ] = useState(false)
    
    const smallScreen = window.matchMedia("(max-width: 600px)")

    const handleToggleMenu = useCallback(() => {
        setIsMenuOpened(isMenuOpened => !isMenuOpened)
    }, [ setIsMenuOpened ])

    return (
        <div className="header">
            {smallScreen.matches
            ? <div 
                className="header__menu"
                onClick={handleToggleMenu}
            >
                <Atom />
                Menu
            </div>
            : <MenuList />
            }

            {isMenuOpened
            && <div className="header__menu-opened">
                <MenuList onClick={handleToggleMenu} />
            </div>
            }
        </div>
    )
}