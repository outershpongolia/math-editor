import React from "react";
import { ERoute } from "../../constants";
import './PracticeBoard.scss';

// Components
import { Link } from "../../components/Link/Link";

interface IPracticeBoardProps {}

export const PracticeBoard: React.FC<IPracticeBoardProps> = () => {

    return (
        <div className="practice-board">
            <Link
                className="practice-board__section"
                route={ERoute.WHITEBOARD}
            >
                <div className="practice-board__section-title">Whiteboard</div>
            </Link> 

            <Link
                className="practice-board__section"
                route={ERoute.GRAPH}
            >
                <div className="practice-board__section-title">Graph</div>
            </Link> 
        </div>
    )
}