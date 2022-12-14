import React from "react";
import "./Homepage.scss";

// Components
import { SolarSystem } from "../../components/Animations/SolarSystem/SolarSystem";

interface IHomepageProps {}

export const Homepage: React.FC<IHomepageProps> = () => {
    return (
        <div className="homepage">

            <div className="homepage__introduction">
                <div className="homepage__title">Welcome to <span>Math Editor</span>!</div>
                <div className="homepage__description">Here you can solve math and physics problems online. Please be aware that here you won't find solutions for your problems, you can only practice them until you come to a solution.</div>
            </div>

            <div className="homepage__animation">
                <SolarSystem />
            </div>

        </div>
    )
}