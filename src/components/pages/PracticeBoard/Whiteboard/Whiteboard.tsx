import React from "react";
import { Formula } from "../../../Formula/Formula";
import "./Whiteboard.scss";

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