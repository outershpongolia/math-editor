import { TbMath } from "react-icons/tb";
import { CgMathPlus, CgMathMinus, CgMathDivide, CgMathEqual } from "react-icons/cg";
import { IAxis, IDataType } from "./interfaces";

export enum ERoute {
    HOMEPAGE = "/",
    PRACTICE_BOARD = "/practice-board",
    WHITEBOARD = "/whiteboard",
    GRAPH = "/graph",
    CHEATSHEET = "/cheatsheet",
    CHEATSHEET_FORMULA = ":id"
}

export enum EInputType {
    PLAIN_FORMULA = "plain-formula",
    CALCULATOR = "calculator"
}

export const SOLAR_SYSTEM = [
    {
        planet: "mercury",
        size: "24px",
        color: ["#495057", "#ced4da"],
        area: "300px",
        view: "0 0 100 100",
        margines: "-12px",
        diameter: "50",
        speed: 5000
    },
    {
        planet: "venus",
        size: "40px",
        color: ["#dc2f02", "#ffbf69"],
        area: "500px",
        view: "0 0 140 140",
        margines: "-20px",
        diameter: "70",
        speed: 8000
    },
    {
        planet: "earth",
        size: "44px",
        color: ["#007991", "#618b4a"],
        area: "700px",
        view: "0 0 180 180",
        margines: "-20px",
        diameter: "90",
        speed: 9000
    },
    {
        planet: "mars",
        size: "32px",
        color: ["#660708", "#e5383b"],
        area: "900px",
        view: "0 0 200 200",
        margines: "-16px",
        diameter: "100",
        speed: 10000
    }
]

export const MATH_CHARACTERS = [
    {
        name: "plus",
        character: " + ",
        icon: <CgMathPlus className="icon" />
    },
    {
        name: "minus",
        character: " - ",
        icon: <CgMathMinus className="icon" />
    },
    {
        name: "times",
        character: " * ",
        icon: "X"
    },
    {
        name: "divide",
        character: " / ",
        icon: <CgMathDivide className="icon" />
    },
    {
        name: "equal",
        character: " = ",
        icon: <CgMathEqual className="icon" />
    },
    {
        name: "root",
        character: "sqrt( )",
        icon: <TbMath className="icon icon_small" />
    },
    {
        name: "square",
        character: "pow( , 2)",
        icon: <div className="sup">x<sup>2</sup></div>
    },
    {
        name: "log",
        character: "log()",
        icon: "log"
    },
    {
        name: "sinus",
        character: "sin()",
        icon: "sin"
    },
    {
        name: "cosinus",
        character: "cos()",
        icon: "cos"
    },
    {
        name: "tangens",
        character: "tan()",
        icon: "tn"
    }
]

export const DEFAULT_DATA: IDataType[] = [
    {
        x: 0,
        y: 0
    }
]

export const DEFAULT_AXIS: IAxis = {
    xAxis: {
        value: "",
        name: "x-axis",
        title: "x axis"
    },
    yAxis: {
        value: "",
        name: "y-axis",
        title: "y axis"
    }
}

export const SECTIONS = [
    {
        name: "Vektor polozaja. Pomeraj",
        id: "2.1",
    },
    {
        name: "Srednja brzina",
        id: "2.2",
    },
    {
        name: "Ravnomerno pravolinijsko kretanje",
        id: "2.3",
    },
    {
        name: "Klasicni zakon sabiranja brzina",
        id: "2.4",
    },
    {
        name: "Ravnomerno ubrzano pravolinijsko kretanje",
        id: "2.5",
    },
    {
        name: "Ravnomerno kruzno kretanje materijalne tacke",
        id: "2.6.1",
    },
    {
        name: "Ravnomerno rotaciono kretanje tela",
        id: "2.6.2",
    },
    {
        name: "Ravnomerno ubrzano kruzno kretanje materijalne tacke",
        id: "2.7",
    }
]

export const DEFAULT_FORMULA = {
    name: "",
    formula: "",
    description: ""
}

