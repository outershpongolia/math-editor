import anime from "animejs";
import React, { useEffect } from "react";
import { SOLAR_SYSTEM } from "../../../constants";
import "./SolarSystem.scss";

// Icons
import { Ellipse } from "../../../svg/EllipseIcon";

interface ISolarSystemProps {}

export const SolarSystem: React.FC<ISolarSystemProps> = () => {
    useEffect(() => {
        SOLAR_SYSTEM.map(planet => {
            const path = anime.path(`#${planet.planet} circle`);

            anime({
                targets: `.${planet.planet}`,
                translateX: path("x"),
                translateY: path("y"),
                easing: "linear",
                loop: true,
                duration: planet.speed
            })

            return null
        })
    }, [])

    return (
        <div className="solar-system">
            
            {SOLAR_SYSTEM.map((planet, index) => {
                return (
                    <div 
                        className="solar-system__line" 
                        key={planet.planet}
                        style={{
                            bottom: index === 0 ? "-250px" : index === 1 ? "-380px" : index === 2 ? "-510px" : "-640px" 
                        }}
                    >

                        <Ellipse 
                            className="ellipse"
                            id={planet.planet}
                            view={planet.view} 
                            diameter={planet.diameter} 
                            width={planet.area} 
                            height={planet.area} 
                        />

                        <div 
                            className={`solar-system__planet ${planet.planet}`}
                            style={{
                                width: planet.size,
                                height: planet.size,
                                top: planet.margines,
                                left: planet.margines,
                                background: `linear-gradient(180deg, ${planet.color[0]}, ${planet.color[1]})`
                            }}
                        ></div>

                    </div>
                )
            })}

        </div>
    )
}