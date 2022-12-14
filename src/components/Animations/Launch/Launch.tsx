import React, { useEffect } from "react";
import "./Launch.scss";
import anime from "animejs";

// Icons
import { LaunchIcon } from "../../../svg/LaunchIcon";

interface ILaunchProps {}

export const Launch: React.FC<ILaunchProps> = () => {
    useEffect(() => {
        anime.timeline({
            loop: true,
            direction: 'alternate',
            duration: 1000
        })
        .add({
            targets: "#rocket",
            easing: 'linear',
            translateY: [0, -8]
        }, 0)
        .add({
            targets: "#head",
            duration: 600,
            easing: 'easeInQuad',
            rotateZ: [0, 16]
        }, 0)
    }, [])

    useEffect(() => {
        anime({
            targets: "#arm",
            rotateZ: [0, 4],
            duration: 250,
            direction: "alternate",
            easing: "linear",
            loop: true
        })
    }, [])

    useEffect(() => {
        anime({
            targets: "#bubbles path",
            opacity: [1, 0],
            delay: anime.stagger(700, {start: 300}),
            easing: "linear",
            duration: 500,
            direction: "alternate",
            loop: true
        })
    })

    return (
        <LaunchIcon className="launch" />
    )
}