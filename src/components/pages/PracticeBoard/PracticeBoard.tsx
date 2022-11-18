import React from "react";
import { NavLink } from "react-router-dom";
import { ERoute } from "../../../constants";
import './PracticeBoard.scss';

interface IPracticeBoardProps {}

export const PracticeBoard: React.FC<IPracticeBoardProps> = () => {

    return (
        <div className="practice-board">

            <NavLink 
                className="practice-board__section"
                to={ERoute.WHITEBOARD}
            >
                <div className="practice-board__section-title">Whiteboard</div>
            </NavLink>

            <NavLink 
                className="practice-board__section"
                to={ERoute.GRAPH}
            >
                <div className="practice-board__section-title">Graph</div>
            </NavLink>

        </div>
    )
}