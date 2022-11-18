import React from "react";

interface IEllipseProps {
    id: string
    width: string
    height: string
    view: string
    diameter: string
}

export const Ellipse: React.FC<IEllipseProps> = ({ id, width, height, view, diameter }) => {
    return (
        <svg
            className="ellipse"
            id={id}
            width={width}
            height={height}
            viewBox={view}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
                <circle
                    id="path"
                    fill="transparent"
                    stroke="#FFF"
                    strokeWidth="0.03px"
                    cx={diameter}
                    cy={diameter}
                    r={diameter}
                />
        </svg>
    )
}