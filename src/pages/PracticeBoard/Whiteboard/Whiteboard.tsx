import React from "react";
import "./Whiteboard.scss";

// Components
import { Formula } from "../../../components/Formula/Formula";

interface IWhiteboardProps {}

export const Whiteboard: React.FC<IWhiteboardProps> = () => {
    return (
        <div className="whiteboard">

            <div className="whiteboard__formula">
                <Formula />
            </div>
            
        </div>
    )
}