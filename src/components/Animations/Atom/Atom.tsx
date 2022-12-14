import anime from "animejs";
import React, { useEffect } from "react";
import "./Atom.scss";

// Icons
import { AtomIcon } from "../../../svg/AtomIcon";

interface IAtomProps {}

export const Atom: React.FC<IAtomProps> = () => {
    useEffect(() => {
        anime({
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
        <AtomIcon className="atom" />
    )
}