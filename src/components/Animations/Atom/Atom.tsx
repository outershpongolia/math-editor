import anime from "animejs";
import { AnimeInstance } from "animejs";
import React, { useEffect, useRef } from "react";
import "./Atom.scss";

interface IAtomProps {}

export const Atom: React.FC<IAtomProps> = () => {

    const animationRef = useRef<AnimeInstance>()

    useEffect(() => {
        animationRef.current = anime({
            targets: ".atom ellipse",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: anime.stagger(250, {from: "last"}),
            direction: 'alternate',
            loop: true
        })
    }, [])

    return (
        <svg
            className="atom"
            id="svgAtom"
            width="32px"
            height="30px"
            viewBox="0 0 131.5103 131.51028"
            version="1.1"
        >
            <g
                id="layer"
                transform="translate(-54.74199,-107.91914)"
            >
                <ellipse
                    id="ellipse1"
                    cx="120.49714"
                    cy="172.54286"
                    rx="65.622856"
                    ry="13.577143"
                    fill="none"
                    stroke="#eff6e0"
                    strokeWidth={2}
                />
                <ellipse
                    id="ellipse2"
                    cx="33.079018"
                    cy="-206.89903"
                    rx="65.622856"
                    ry="13.577143"
                    transform="rotate(135.81035)"
                    fill="none"
                    stroke="#eff6e0"
                    strokeWidth={2}
                />
                <ellipse
                    id="ellipse3"
                    cx="173.67429"
                    cy="-121.62856"
                    rx="65.622856"
                    ry="13.577143"
                    transform="rotate(90)"
                    fill="none"
                    stroke="#eff6e0"
                    strokeWidth={2}
                />
                <ellipse
                    id="ellipse4"
                    cx="-207.33965"
                    cy="-39.684017"
                    rx="65.622856"
                    ry="13.577143"
                    transform="rotate(-136.01586)"
                    fill="none"
                    stroke="#eff6e0"
                    strokeWidth={2}
                />
                <path
                    id="nucleus"
                    d="m 117.44427,166.74663 a 7.6371427,7.0714288 0 0 1 10.4636,2.46156 7.6371427,7.0714288 0 0 1 -2.64975,9.69057 7.6371427,7.0714288 0 0 1 -10.46802,-2.44538 7.6371427,7.0714288 0 0 1 2.63227,-9.69466 l 3.92335,6.06699 z"
                    fill="#aec3b0a6"
                />
            </g>
        </svg>
    )
}