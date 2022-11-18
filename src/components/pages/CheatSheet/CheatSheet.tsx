import React from "react";
import { Sections } from "./Sections/Sections";
import "./CheatSheet.scss";
import { Formulas } from "./Formulas/Formulas";
import { Outlet } from "react-router-dom";

interface ICheatSheetProps {}

export const CheatSheet: React.FC<ICheatSheetProps> = () => {
    return (
        <div className="cheatsheet">
            {/* <div className="cheatsheet__static">
                <Sections className="cheatsheet__section cheatsheet__section_left" />
                <Formulas className="cheatsheet__section cheatsheet__section_right" />
            </div>
            <div className="cheatsheet__dynamic">
                <Outlet />
            </div> */}
        </div>
    )
}