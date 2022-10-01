import { Link } from "react-router-dom";

const svgBlack = require("../../images/arrow-right.svg").default;
const svgWhite = require("../../images/arrow-right-white.svg").default;

export const Button = ({ link, text, theme }) => (
    <Link
        to={link}
        className={theme === "black" ? "theme-black" : "theme-white"}
    >
        <p className="buttonWidth">{text}</p>
        <img
            src={theme === "black" ? svgBlack : svgWhite}
            className="buttonIcon flex-shrink-1 "
            alt="arrow pointing right"
            id="animation"
        />
    </Link>
);
