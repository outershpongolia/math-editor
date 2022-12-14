import React, { useRef } from "react";
import { Launch } from "../../components/Animations/Launch/Launch";
import "./CheatSheet.scss";

interface ICheatSheetProps {}

export const CheatSheet: React.FC<ICheatSheetProps> = () => {

    return (
        <div className="cheatsheet">
            
            <Launch />

            <div className="cheatsheet__text">
                This page is under construction...
            </div>

        </div>
    )
}